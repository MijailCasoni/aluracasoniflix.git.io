import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import Login  from './Pages/Login';
import Paypal from './Pages/Paypal';
import Home from './Pages/Home';
import Profile from './Pages/Profile';
import { auth} from './firebase';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from './features/counter/UserSlice.js';
import {login, logout} from './features/counter/UserSlice.js';


function App() {
  const user = useSelector(selectUser);
  const classes = useStyles();
  const dispatch = useDispatch();

  useEffect(() => {

    return auth.onAuthStateChanged((userAuth) => {
          if (userAuth) {
            dispatch(login({
              uid: userAuth.uid,
              email: userAuth.email
            }))
          } else {
            dispatch(logout)
          }
        });
  }, [dispatch])

  return (
    <div className={classes.root}>
        <Router>
          {
              <Switch>
                <Route path="/login">
                  <Login/>
                </Route>
                <Route path="/profile">
                  <Profile/>
                </Route>
                <Route path='/checkout'>
                  <Paypal/>
                </Route>
                <Route path='/'>
                  <Home/>
                </Route>
              </Switch>
          }
        </Router>

    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor:"#111",
    minHeight: "100vh",
    },
  }));

export default App;
