import React, {Component} from 'react'
import 'antd/dist/antd.css';
import './PlanningComponent.css'
import {Icon, Timeline} from 'antd';
import EditActivityModal from "../../../Activity/EditActivityModal/EditActivityModal";
import {actions} from "../../../../../state/ducks/user";
import {connect} from "react-redux";
import {activityActions} from "../../../../../state/ducks/activity";

class PlanningComponent extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        const {plans} = this.props;

        const modalProps = {
            updateActivity: this.props.updateActivity
        }

        if (plans.activities.length==0) {
            console.log(plans.activities +"noo activities");
            return <h4>No activities for today</h4>
        }
        console.log("PlanningComponent")
        console.log({plans});
        return (
            <div>
                <div className="plans-content">
                    <EditActivityModal/>
                    <div className='plans'>

                        <h4>Планирование</h4>For {plans.date} activities:
                        <Timeline>{plans.activities.map((activity, j) => <Timeline.Item key={j}
                                                                                style={{
                                                                                    paddingRight: "20px",
                                                                                    paddingBottom: "20px"
                                                                                }}
                                                                                color={activity.completed===true?"green":"red"}>{activity.description}
                                <Icon type="edit" onClick={() => {
                                    this.props.showModal("EditActivityModal", {...modalProps, activity});
                                }}/></Timeline.Item>)}</Timeline>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    error: state.activities.error,
    loading: state.activities.loading,
    activity: state.activities.activity,
    userParameters: state.users.userParameters,
    plans: state.plans.plans
});

const mapDispatchToProps = {
    updateActivity: activityActions.updateActivity,
    showModal: actions.showModal,
    getUserParameters: actions.getUserParameters
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanningComponent)


