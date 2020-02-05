import React, {useEffect} from 'react'
import 'antd/dist/antd.css';
import {Button, Icon, List, Tabs, Tag} from 'antd';
import './Planning.css'
import EditActivityModal from "../../components/Activity/EditActivityModal/EditActivityModal";
import {actions} from "../../../state/ducks/user/actions";
import {connect} from "react-redux";
import AddActivityModal from "../Activity/AddActivityModal/AddActivityModal";
import {planActions} from "../../../state/ducks/plan";
import moment from "moment";

const {TabPane} = Tabs;
const tabNum = 5;
const planTabs = [];
for (let i = 0; i < tabNum; i++) {
  planTabs.push(moment().add("days", i));
}

const Planning = (props) => {

  const {plans} = props;

  const modalProps = {
    updateActivity: props.updateActivity,
    addActivity: props.addActivity
  };

  useEffect(() => {

    props.getPlan(props.profile.id, moment().format("YYYY-MM-DD"));
  }, []);
  return (
    <div className="card-container">
      <EditActivityModal/>
      <AddActivityModal/>
      <Tabs type="card" onTabClick={(key, e) => {
        props.getPlan(props.profile.id, (moment().add('days', key)).format("YYYY-MM-DD"));
      }} tabBarExtraContent={<Button onClick={() => {
        props.showModal("AddActivityModal", {
          ...modalProps, plans
        });
      }} style={{backgroundColor: 'gold', fontSize: '16px'}}>+</Button>}>
        {[...Array(tabNum).keys()].map(i => (

          <TabPane tab={planTabs[i].format("ddd")} key={i}>
            <List style={{"backgroundColor": "#ffe79a"}}
                  size="large"
                  bordered
                  dataSource={plans.activities}
                  renderItem={activity => (
                    <List.Item
                      style={activity.completed ? {"backgroundColor": "#ffea93"} : {"backgroundColor": "#ffffff"}}
                      extra={

                        <Tag style={{backgroundColor: 'gold'}}>{activity.timeToComplete} minutes <Icon
                          type="clock-circle" style={{fontSize: '16px'}}/>
                        </Tag>}>
                      <Tag style={{backgroundColor: 'gold'}}> <Icon type="delete" style={{fontSize: '16px'}}
                                                                    onClick={() => {
                                                                      props.removeActivity(plans.planId, activity.activityId)
                                                                    }}/></Tag>
                      <List.Item.Meta
                        onClick={() => {
                          props.showModal("EditActivityModal", {
                            ...modalProps, activity
                          });
                        }}
                        title={activity.name}
                        description={<div>{activity.description}
                          <div>{activity.start}-{activity.end}</div>
                        </div>}
                      />
                    </List.Item>
                  )}/>
          </TabPane>
        ))}

      </Tabs>

    </div>
  )
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  plans: state.plans.plans
});

const mapDispatchToProps = {
  updateActivity: planActions.updateActivity,
  addActivity: planActions.addActivity,
  getPlan: planActions.getByUserIdAndDate,
  removeActivity: planActions.removeActivity,
  showModal: actions.showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Planning)


