import React from 'react'
import 'antd/dist/antd.css';
import './Motivation.css'
import {withRouter} from "react-router";
import {Router} from 'react-router-dom'


const MotivationElem = (props) => {

  return (
    <div className='motivation-wrapper'>
      {props.match.params.id}
    </div>
  )
};

export default withRouter(MotivationElem)
