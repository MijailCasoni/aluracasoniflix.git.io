import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState } from 'react';
import { Counter } from './features/counter/Counter';
import { Button } from "./componentes/Button";
import {Footer } from "./componentes/Footer";
import {Header } from "./componentes/Header";
import {Banner} from "./componentes/Banner";


function App() {
  const user = null;
  return (
    <div className={classes.root}>
        <Router>
          {
            !user?(<Login/>):(
              <Switch>
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
            )
          }
        </Router>

    </div>
  );
}

export default App;
