import React from 'react';
import './App.css';

import { Route, BrowserRouter, Redirect, Switch } from 'react-router-dom'
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../Header/Header';

function App(store) {

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="app-content-wrapper">
          <div className="container">
            <div className="row">
              <Switch>
                <Route path="/login" component={Login} />
                <Route path="/registration" component={Registration} />
                <Redirect from="*" to="/" />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
