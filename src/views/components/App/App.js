import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Redirect, Router, Switch} from 'react-router-dom'
import AdminPage from '../../pages/Admin'
import HomePage from '../../pages/Home'
import ChangePasswordPage from '../../pages/ChangePassword'
import LoginPage from '../../pages/Login'
import RegistrationPage from '../../pages/Registration'
import {PrivateRoute} from '../PrivateRoute/PrivateRoute';
import {NotAuthenticatedRoute} from '../PrivateRoute/NotAuthenticatedRoute';
import {history} from '../../../helpers/History';


const App = () => {
  return (
    <Router history={history}>
      <Switch>
        <PrivateRoute exact path="/" component={HomePage}/>
        <NotAuthenticatedRoute exact path="/registration" component={RegistrationPage}/>
        <NotAuthenticatedRoute exact path="/login" component={LoginPage}/>
        <PrivateRoute exact path="/admin" roles={['ADMIN']} component={AdminPage}/>
        <PrivateRoute exact path="/resetPassword" component={ChangePasswordPage}/>
        <Redirect from="*" to="/"/>
      </Switch>
    </Router>
  );
};

export default App;
