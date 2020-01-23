import React, {Component} from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import './PlanningComponent.css'
import {Timeline, Icon, Affix, Button} from 'antd';
import EditActivityModal from "../../../EditActivityModal/EditActivityModal";
import {actions} from "../../../../../state/ducks/user";
import {activityActions} from "../../../../../state/ducks/activity";


class PlanningComponent extends Component {


    render() {
        const {plans} = this.props;
        if (!plans) {
            return <h4>No plans</h4>
        }
        const modalProps = {
            updateActivity: this.props.updateActivity,
            activity: this.props.activity,
        }
        return (
            <div>
                <div className="col-md-9">
                        <EditActivityModal />

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
                <Affix style={{position: 'absolute', top: 10, right: 15}}>
                    <Button
                        shape="circle"
                        type="primary"
                        onClick={() => {
                            this.props.showModal("EditExerciseModal", {...modalProps})
                        }}>
                        +
                    </Button>
                </Affix>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    showModal: actions.showModal,
    activities: state.activities.todayActivities,
})

const mapDispatchToProps = {
    updateActivity:activityActions.updateActivity
}

export default connect(mapStateToProps, mapDispatchToProps)(PlanningComponent)
