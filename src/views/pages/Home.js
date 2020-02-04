import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import authContext from '../../store';

const Home = () => {
  const [{ isLoggedIn, username }, dispatch] = useContext(authContext);
  function logOut() {
    dispatch({
      type: 'LOGOUT'
    });
  }

  return (
    <div className="container">
      <div className="App-header">
        <Header>{`Well hello there, ${isLoggedIn ? username : 'Stranger!'}`}</Header>
      </div>
      <div className="App-footer">
        {isLoggedIn ? (
          <p>
            Click{' '}
            <Link to="/" onClick={logOut}>
              here
            </Link>{' '}
            to logout
          </p>
        ) : (
          <p>
            Click <Link to="/login">here</Link> to login
          </p>
        )}
      </div>
    </div>
  );
};

export default Home;
