import './App.css';
import {BrowserRouter as Router , Routes ,Route} from 'react-router-dom'
import Login from './Login';
import Dashboard from './Dashboard';
import { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';
import { ProSidebarProvider } from 'react-pro-sidebar';

function App() {

  const [{user},dispatch] = useStateValue()
 useEffect(() => {
    const savedUser = JSON.parse(localStorage.getItem('user'));
    if (savedUser) {
        dispatch({
            type: actionTypes.SET_USER,
            user: savedUser
        });
    }
}, []);

  return (
  
      <div className="app">
      <Router>
      {!user?(<Login/>):( <>
      <Routes>

      <Route path="/" Component={Dashboard}/>
      
      </Routes>
      
      </>)}
      </Router>
    </div>

  );
}

export default App;
