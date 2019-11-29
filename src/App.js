import React from 'react';
import './App.css';
import Header from './components/header/Header';
import {Route, BrowserRouter} from 'react-router-dom'
import Login from './components/login/Login';
import Registration from './components/registration/Registration';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header/>
        <div class="app-content-wrapper">
          <Route path="/login" component={Login}/>
          <Route path="/registration" component={Registration}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
