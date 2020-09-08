import React, { useEffect } from 'react';
import './App.css';
import Routes from './routes';
import { auth } from './services/firebase';

import { useStateValue } from './services/StateProvider';

function App() {
  const [{user}, dispatch ] = useStateValue();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if(authUser) {
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
    return () => {
      unsubscribe();
    }
  }, []);

  console.log('USER: ', user);
  
  return (
    <div className="App">
      <Routes />
    </div>
  );
}

export default App;
