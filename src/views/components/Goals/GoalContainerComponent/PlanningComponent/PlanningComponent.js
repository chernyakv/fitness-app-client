import React, {Component} from 'react'
import 'antd/dist/antd.css';
import './PlanningComponent.css'
import {Button, Icon, List, Tabs, Tag} from 'antd';
import EditActivityModal from "../../../Activity/EditActivityModal/EditActivityModal";
import {actions} from "../../../../../state/ducks/user";
import {connect} from "react-redux";
import {activityActions} from "../../../../../state/ducks/activity";
import AddActivityModal from "../../../Activity/AddActivityModal/AddActivityModal";

const {TabPane} = Tabs;

const tabNum = 3;

class PlanningComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const {activities, plans} = this.props;
    const modalProps = {
      updateActivity: this.props.updateActivity,
      addActivity: this.props.addActivity
    };
    console.log("ppppppppppppppppppppppppp")
    console.log(plans)
    if (!activities) {
      return <h4>No activities for today</h4>
    }

    return (
      <div className="card-container">
        <EditActivityModal/>
        <AddActivityModal/>
        <Tabs type="card" tabBarExtraContent={<Button onClick={() => {
          this.props.showModal("AddActivityModal", {
            ...modalProps, plans
          });
        }} style={{backgroundColor: 'gold' ,fontSize: '16px'}}>+</Button>}>
          {[...Array(tabNum).keys()].map(i => (
            <TabPane tab={plans.date} key={i}>
              <List style={{"backgroundColor": "#ffe79a"}}
                    size="large"
                    bordered
                    dataSource={activities}
                    renderItem={activity => (
                      <List.Item style={{"backgroundColor": "#fff1d2"}}>
                        <List.Item.Meta
                          onClick={() => {
                            this.props.showModal("EditActivityModal", {
                              ...modalProps, activity
                            });
                          }}
                          title={activity.name}
                          description={activity.description}
                        />
                        <Tag style={{backgroundColor: 'gold'}}>{activity.timeToComplete} minutes <Icon
                          type="clock-circle" style={{fontSize: '16px'}}/></Tag>

                      </List.Item>
                    )}/>
            </TabPane>
          ))}

        </Tabs>

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
  addActivity: activityActions.addActivity,
  showModal: actions.showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanningComponent)


