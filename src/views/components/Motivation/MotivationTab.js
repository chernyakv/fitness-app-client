import React from 'react'
import 'antd/dist/antd.css';
import './Motivation.css'
import {withRouter} from "react-router";
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import Motivation from "./Motivation";
import MotivationItem from "../MotivationItem/MotivationItem";
import MotivationElem from "./MotivationElem";


const MotivationTab = (props) => {
  const { path } = props.match;

  return (
    <div className='motivation-wrapper'>
      <Switch>
        <Route path={`${path}`} exact component={Motivation} />
        <Route path={`${path}/:id?`} exact component={MotivationElem} />
      </Switch>
    </div>
  )
};

export default withRouter(MotivationTab)
