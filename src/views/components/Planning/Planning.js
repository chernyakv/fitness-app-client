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
import {activityActions} from "../../../state/ducks/activity";

const {TabPane} = Tabs;
const tabNum = 5;
const planTabs = [];
for (let i = 0; i < tabNum; i++) {
  planTabs.push(moment().add("days", i));
}
const time = [];
for (let i = 1; i < 25; i++) {
  time.push([moment("00:00:00","HH:mm:ss").add(i-1,"hours").format("HH:mm"),moment("00:00:00","HH:mm:ss").add(i,"hours").format("HH:mm")]);
}

const Planning = (props) => {

  const {plans} = props;
  const modalProps = {
    updateActivity: props.updateActivity,
    addActivity: props.addActivity
  };

  useEffect(() => {
    console.log("time");
    console.log(time);
    props.getPlan(props.profile.id, moment().format("YYYY-MM-DD"));
  }, []);
  // const customizeRenderEmpty = () => (
  //   <div style={{ textAlign: 'center' }}>
  //     <Icon type="smile" style={{ fontSize: 20 }} />
  //     <p>Data Not Found</p>
  //   </div>
  // );

  return (
    <div className="card-container">
      <EditActivityModal/>
      <AddActivityModal/>
      <Tabs type="card"  onTabClick={(key, e) => {
        props.getPlan(props.profile.id, (moment().add('days', key)).format("YYYY-MM-DD"));

      }} tabBarExtraContent={<Button onClick={() => {
        props.showModal("AddActivityModal", {
          ...modalProps, plans
        });
      }} style={{backgroundColor: 'gold', fontSize: '16px'}}>+</Button>}>
        {[...Array(tabNum).keys()].map(i => (

          <TabPane  tab={planTabs[i].format("ddd")} key={i}>
            <List  style={{"backgroundColor": "#ffe79a"}}
                  size="large"
                  bordered
                  dataSource={props.activities}
                  renderItem={activity => (
                    <List.Item style={{"backgroundColor": "#fff1d2"}} >
                      <List.Item.Meta
                        onClick={() => {
                          props.showModal("EditActivityModal", {
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

const mapStateToProps = (state) => ({

  activities: state.plans.activities,
  profile: state.auth.profile,
  plans: state.plans.plans
});

const mapDispatchToProps = {
  updateActivity: activityActions.updateActivity,
  addActivity: activityActions.addActivity,
  getPlan: planActions.getByUserIdAndDate,
  showModal: actions.showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Planning)


