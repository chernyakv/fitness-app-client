import React, {Component} from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import './PlanningComponent.css'
import {Timeline, Icon} from 'antd';
import GoalContainerComponent from "../GoalContainerComponent";
import GoalSelectionComponent from "../../GoalSelectionComponent/GoalSelectionComponent";
import EditActivityModal from "../../../EditActivityModal/EditActivityModal";


class PlanningComponent extends Component {


    render() {
        const {plans} = this.props;
        if (!plans) {
            return <h4>No plans</h4>
        }

        return (
            <div>
                <div className="col-md-9">
                    {plans.isEmpty ? (
                        <EditActivityModal/>
                    ) : (
                        <EditActivityModal activities={plans.activities} />
                    )}
                </div>
                <div className='planning-wrapper'>
                    <h4>Планирование</h4>
                    <Timeline>
                        <Timeline.Item> guk</Timeline.Item>
                        <Timeline.Item>Solve initial network problems {plans.date}</Timeline.Item>
                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{fontSize: '16px'}}/>} color="red">
                            Technical testing 2015-09-01
                        </Timeline.Item>
                        <Timeline.Item>Network problems being solved 2015-09-01</Timeline.Item>
                    </Timeline>,
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = {}

export default connect(mapStateToProps, mapDispatchToProps)(PlanningComponent)
