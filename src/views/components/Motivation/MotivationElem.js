import React from 'react'
import 'antd/dist/antd.css';
import './Motivation.css'
import {withRouter} from "react-router";
import {Redirect, Route, Router, Switch} from 'react-router-dom'
import Motivation from "./Motivation";
import MotivationItem from "../MotivationItem/MotivationItem";


const MotivationElem = (props) => {

  return (
    <div className='motivation-wrapper'>
      {props.match.params.id}
    </div>
  )
};

export default withRouter(MotivationElem)
