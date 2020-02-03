import React, { useContext } from 'react';
import Header from '../components/Header';
import authContext from '../../store';

const Home = () => {
  const [{ isLoggedIn, username }] = useContext(authContext);
  return (
    <>
      <Header>{`Well hello there, ${isLoggedIn ? username : 'Stranger!'}`}</Header>
    </>
  );
};

export default Home;
