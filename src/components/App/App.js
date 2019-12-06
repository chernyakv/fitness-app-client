import React from 'react';
import './App.css';
import { Route, Router, Redirect, Switch } from 'react-router-dom'
import Registration from '../Registration/Registration';
import Login from '../Login/Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from '../Header/Header';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { NotAuthenticatedRoute } from '../PrivateRoute/NotAuthenticatedRoute';
import Home from '../Home/Home';
import { history } from '../../helpers/History';

function App(store) {

  return (
    <Router history={history}>
      <div className="App">
        <Header />
        <div className="app-content-wrapper">
          <div className="container">
           
              <Switch>
                <PrivateRoute exact path="/" component={Home} />
                <NotAuthenticatedRoute exact  path="/registration" component={Registration} />
                <NotAuthenticatedRoute exact  path="/login" component={Login} />
                <Redirect from="*" to="/" />
              </Switch>
           
          </div>
        </div>

      </div>
    </Router>
  );  
}

export default App;
