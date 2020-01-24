import React, {Component} from 'react'
import 'antd/dist/antd.css';
import './PlanningComponent.css'
import {Timeline,Icon} from 'antd';

class PlanningComponent extends Component {


    render() {
        const {plans} = this.props;
        if (!plans) {
            return <h4>No plans</h4>
        }
        console.log("PlanningComponent")
        console.log({plans});
        return (
            <div>
                <div className="col-md-9">


                <div className='planning-wrapper'>
                    <h4>Планирование</h4>
                    <Timeline>{plans.map((item)=><Timeline.Item key={item.planId}>For {item.date} activities:
                        <ul>{item.activities.map((act)=><Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />} color="red">{act.description}</Timeline.Item>)}</ul></Timeline.Item>)}</Timeline>
                </div>
                </div>
            </div>
        )
    }
}




export default PlanningComponent
