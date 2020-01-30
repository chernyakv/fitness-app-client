import React, {Component} from 'react'
import 'antd/dist/antd.css';
import './PlanningComponent.css'
import {Icon, List, Tag, Layout, Tabs, Button} from 'antd';
import EditActivityModal from "../../../Activity/EditActivityModal/EditActivityModal";
import {actions} from "../../../../../state/ducks/user";
import {connect} from "react-redux";
import {activityActions} from "../../../../../state/ducks/activity";

const {TabPane} = Tabs;

const operations = <Button>Extra Action</Button>;



class PlanningComponent extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {Header, Footer, Sider, Content} = Layout;

        const {activities, plans} = this.props;

        const modalProps = {
            updateActivity: this.props.updateActivity
        };

        if (!activities) {
            return <h4>No activities for today</h4>
        }

        return (
            <div className="demo-loading-container">
                <EditActivityModal/>
                <Tabs tabBarExtraContent={operations}>
                    <TabPane tab="Today" key="1">
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
                                      <Tag  style={{backgroundColor: 'gold'}}>{activity.timeToComplete} minutes <Icon
                                          type="clock-circle" style={{fontSize: '16px'}}/></Tag>

                                  </List.Item>
                              )}/>
                    </TabPane>
                    <TabPane tab="Tomorrow" key="2">
                        Content of tab 2
                    </TabPane>
                    <TabPane tab="Today+2" key="3">
                        Content of tab 3
                    </TabPane>
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
    showModal: actions.showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(PlanningComponent)


