import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

import { Provider } from './store';
import { initialAuthState, authReducer } from './reducers/AuthReducer';
import Routes from './views/Routes';

function App() {
  const useAuthState = useReducer(initialAuthState, authReducer);

  return (
    <Provider value={useAuthState}>
      <Routes />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
