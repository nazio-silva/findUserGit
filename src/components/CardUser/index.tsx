import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store';
import Link from '@mui/material/Link';
import { openModal } from '../../slices/modalSlice';

const CardUser = () => {

  const dispatch = useDispatch()

  const users = useSelector((state: RootState) => state.git.users)

  return (
    <>
      {users.map((user) => {
        return (
          <Card key={user.login}>
            <CardMedia
              component="img"
              style={{ height: "100%", width: 250 }}
              src={user.avatar_url}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {user.login}
              </Typography>

              <Link href={user.html_url} underline="hover">
                {user.url}
              </Link>
            </CardContent>

            <CardActions onClick={() => dispatch(openModal(user))}>
              <Button size="small">Ver Detalhes</Button>
            </CardActions>
          </Card>
        )
      })}
    </>

  )

}

export default CardUser;