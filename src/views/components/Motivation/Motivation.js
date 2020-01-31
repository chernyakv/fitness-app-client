import React, {Component} from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import './MotivationComponent.css'


class MotivationComponent extends Component {


  render() {
    return (
      <div className='motivation-wrapper'>
        <h4>Мотивация</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(MotivationComponent)
