import React from 'react'
import jwt_decode from 'jwt-decode';
import {Redirect, Route} from 'react-router-dom'

export const PrivateRoute = ({component: Component, roles, ...rest}) => {

  return <Route {...rest} render={props => {
    const currentUser = localStorage.getItem("jwt")

    if (!currentUser) {
      return <Redirect to={{pathname: "/login", state: {from: props.location}}}/>
    }

    if (currentUser && roles) {
      const role = jwt_decode(JSON.parse(localStorage.getItem('jwt')).accessToken).scopes.substring(5);
      if (roles.indexOf(role) === -1) {
        return <Redirect to={{pathname: "/", state: {from: props.location}}}/>
      }
    }

    return <Component {...props} />
  }}/>
}

