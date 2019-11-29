import React from 'react';
import './Header.css';
import {NavLink} from 'react-router-dom'


function Header(props) {
  return (
    <nav class="navbar navbar-expand-lg navbar-light navbar-laravel">
    <div class="container">
      <a class="navbar-brand" href="/">Goals App</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
            <li class="nav-item">
                <div class="nav-link">
                  <NavLink to="/login">Login</NavLink>
                </div>                
            </li>    
            <li class="nav-item">
                <div class="nav-link">
                  <NavLink to="/registration">Registration</NavLink>
                </div>           
            </li>       
        </ul>
      </div>
    </div>
  </nav>
  );
}

export default Header;