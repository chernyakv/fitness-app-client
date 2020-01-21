import React, {Component} from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import {planActions} from '../../../../../state/ducks/plan/actions';
import {actions} from '../../../../../state/ducks/user/actions'
import './PlanningComponent.css'
import {Timeline, Icon} from 'antd';


class PlanningComponent extends Component {
    constructor(props) {
        super(props);
    }
  render() {

    return (
      <div className='planning-wrapper'>
        <h4>Планирование</h4>
        <Timeline>
          <Timeline.Item></Timeline.Item>
          <Timeline.Item>Solve initial network problems 2015-09-01</Timeline.Item>
          <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>} color="red">
            Technical testing 2015-09-01
          </Timeline.Item>
          <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
        </Timeline>,
      </div>
    )
  }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PlanningComponent)
