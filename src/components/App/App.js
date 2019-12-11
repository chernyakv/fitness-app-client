import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Router, Redirect, Switch } from 'react-router-dom'
import Login from '../pages/Login/Login';
import Admin from '../pages/Admin/Admin';
import Home from '../pages/Home/Home';
import Registration from '../pages/Registration/Registration';
import ResetPassword from '../pages/ResetPassword/ResetPassword';
import { Header } from '../layouts/Header/Header';
import { PrivateRoute } from '../PrivateRoute/PrivateRoute';
import { NotAuthenticatedRoute } from '../PrivateRoute/NotAuthenticatedRoute';
import { history } from '../../helpers/History';



function App() {

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
                <PrivateRoute exact  path="/admin" roles={['ADMIN']} component={Admin} />
                <PrivateRoute exact  path="/resetPassword" component={ResetPassword} />
                <Redirect from="*" to="/" />
              </Switch>           
          </div>
        </div>

      </div>
    </Router>
  );  
}

export default App;
