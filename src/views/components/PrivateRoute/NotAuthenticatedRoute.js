import React from 'react'
import {Redirect, Route} from 'react-router-dom'

export const NotAuthenticatedRoute = ({component: Component, ...rest}) => {
  return <Route {...rest} render={props => {
    const currentUser = localStorage.getItem("jwt")
    if (currentUser) {
      return <Redirect to={{pathname: "/", state: {from: props.location}}}/>
    }

    return <Component {...props} />
  }}/>
}