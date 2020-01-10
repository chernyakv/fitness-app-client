import React, {Component} from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import './PlanningComponent.css'

class PlanningComponent extends Component {

  render() {
    return (
      <div className='planning-wrapper'>
        <h4>Планирование</h4>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(PlanningComponent)
