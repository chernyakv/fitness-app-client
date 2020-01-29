import React, {Component} from 'react'
import 'antd/dist/antd.css';
import './PlanningComponent.css'
import {Icon, Timeline, List, Avatar, Button, Skeleton} from 'antd';
import EditActivityModal from "../../../Activity/EditActivityModal/EditActivityModal";
import {actions} from "../../../../../state/ducks/user";
import {connect} from "react-redux";
import {activityActions} from "../../../../../state/ducks/activity";

class PlanningComponent extends Component {

    constructor(props) {
        super(props);
        console.log("PlanningComponent props");
        console.log(props);
    }

    render() {
        const {activities,plans} = this.props;

        const modalProps = {
            updateActivity: this.props.updateActivity
        };

        if (!activities) {
            return <h4>No activities for today</h4>
        }

        return (
            // <List
            //     className="demo-loadmore-list"
            //     loading={initLoading}
            //     itemLayout="horizontal"
            //
            //     dataSource={activities}
            //     renderItem={item => (
            //         <List.Item
            //             actions={[<a key="list-loadmore-edit">edit</a>, <a key="list-loadmore-more">more</a>]}
            //         >
            //             <Skeleton avatar title={false} loading={item.description} active>
            //                 <List.Item.Meta
            //
            //                     title={<a href="https://ant.design">{item.name}</a>}
            //
            //                 />
            //                 <div>content</div>
            //             </Skeleton>
            //         </List.Item>
            //     )}
            // />
            <div>
                <div className="plans-content">
                    <EditActivityModal/>
                    <div className='plans'>

                        <h4>Планирование</h4>For {plans.date} activities:
                        <Timeline>{activities.map((activity, j) => <Timeline.Item key={j}
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
    activities: state.plans.activities,
    userParameters: state.users.userParameters,
    plans: state.plans.plans
});

const mapDispatchToProps = {
    updateActivity: activityActions.updateActivity,
    showModal: actions.showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanningComponent)


