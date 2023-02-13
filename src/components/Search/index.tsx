import React, { useEffect, useState } from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

import { useDispatch } from 'react-redux'
import types from '../../actions/git-actions/types';

const Search: React.FC = () => {

  const [name, setName] = useState("")
  const dispatch = useDispatch()

  const onChange = (e: any) => {
    const value = e.target.value
    setName(value)
  }

  return (
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', marginTop: 2 }}
    >
      <InputBase
        fullWidth
        sx={{ ml: 1, flex: 1 }}
        placeholder="Ex: José"
        inputProps={{ 'aria-label': 'search google maps' }}
        onChange={onChange}
      />
      <IconButton
        type="button"
        sx={{ p: '10px' }}
        aria-label="search"
        onClick={() => dispatch({ type: types.GET_USER_REQUESTED, payload: { name } })}
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}

export default Search;