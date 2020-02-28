import React from 'react'
import 'antd/dist/antd.css';
import './Motivation.css'
import {withRouter} from "react-router";
import {Route, Router, Switch} from 'react-router-dom'
import Motivation from "./Motivation";
import News from "../News/News";


const MotivationTab = (props) => {
  const {path} = props.match;

  return (
    <div className='motivation-wrapper'>
      <Switch>
        <Route path={`${path}`} exact component={Motivation}/>
        <Route path={`${path}/:id?`} exact component={News}/>
      </Switch>
    </div>
  )
};

export default withRouter(MotivationTab)
