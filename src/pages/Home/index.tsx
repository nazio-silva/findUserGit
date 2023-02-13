import React from 'react';

import Search from './../../components/Search/index';
import CardUser from '../../components/CardUser';
import { RootState } from '../../store/store';
import { useSelector } from 'react-redux';
import Error from '../../components/Error';
import { NOT_FOUND } from './../../erros/index';

const HomePage: React.FC = () => {

  const failure = useSelector((state: RootState) => state.git.failure)

  return (
    <div>
      <Search />
      <h1>Usuário Pesquisado:</h1>
      {failure ? <Error text={NOT_FOUND} /> : <CardUser />}
    </div>
  )
}

export default HomePage;