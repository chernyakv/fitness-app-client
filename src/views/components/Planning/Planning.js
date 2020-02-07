import 'antd/dist/antd.css';
import React, {useEffect} from 'react'
import {connect} from "react-redux";

import './Planning.css'
import AddActivityModal from "../Activity/AddActivityModal/AddActivityModal";
import EditActivityModal from "../../components/Activity/EditActivityModal/EditActivityModal";
import {actions} from "../../../state/ducks/user/actions";
import {planActions} from "../../../state/ducks/plan";

import {Button, Icon, List, Modal, Tabs, Tag} from 'antd';
import moment from "moment";

const {confirm} = Modal;
const {TabPane} = Tabs;
const tabNum = 5;
const planTabs = [];
for (let i = 0; i < tabNum; i++) {
    planTabs.push(moment().add("days", i));
}

function showConfirm(props, activity) {
    confirm({
        title: 'Do you want to delete these activity?',
        content: 'When clicked the OK button, this dialog will be closed after 1 second',
        onOk() {
            props.removeActivity(props.plans.planId, activity.activityId)
            return new Promise((resolve, reject) => {
                setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
            }).catch(() => console.log('Oops errors!'));
        },
        onCancel() {
        },
    });
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
            }} tabBarExtraContent={
                <Button onClick={() => {
                    props.showModal("AddActivityModal", {
                        ...modalProps, plans
                    });
                }} style={{backgroundColor: 'gold', fontSize: '16px'}}>+
                </Button>
            }>
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
                                          </Tag>
                                      }>
                                      <Tag style={{backgroundColor: 'gold'}}>
                                          <Icon type="delete"
                                                style={{fontSize: '16px'}}
                                                onClick={() => {
                                                    showConfirm(props, activity)
                                                }}/>
                                      </Tag>
                                      <List.Item.Meta
                                          onClick={() => {
                                              props.showModal("EditActivityModal", {
                                                  ...modalProps, activity
                                              });
                                          }}
                                          title={activity.name}
                                          description={
                                              <div>{activity.description}
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


