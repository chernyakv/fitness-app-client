import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goalsActions} from '../../../../actions/goals.actions'
import {usersActions} from '../../../../actions/users.actions'
import {Affix, Button, Table, Tabs} from 'antd';
import 'antd/dist/antd.css';
import './GoalContainerComponent.css'
import MayDayComponent from "./MayDayComponent/MayDayComponent";
import ProgressComponent from "./ProgressComponent/ProgressComponent";
import PlanningComponent from "./PlanningComponent/PlanningComponent";
import MotivationComponent from "./MotivationComponent/MotivationComponent";
import moment from 'moment';
import EditExerciseModal from "../../../modals/EditExerciseModal/EditExerciseModal";

const {TabPane} = Tabs;
const {Column, ColumnGroup} = Table;


class GoalContainerComponent extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth   = moment().endOf('month').format('YYYY-MM-DD');
    this.props.getUserParameters(this.props.profile.id, startOfMonth, endOfMonth);
    this.props.getTodayActivities("1", endOfMonth);
  }

  state = {
    top: 100
  };

  render() {
    const modalProps = {
      updateExercise: this.props.updateExercise,
      exercise: this.props.exercise,
    }


    return (
      <div className='goals-content'>
        <EditExerciseModal/>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Мой день" key="1">
            <MayDayComponent activities={this.props.activities} exercise={this.props.exercise}/>
          </TabPane>
          <TabPane tab="Прогресс" key="2">
            <ProgressComponent parameters={this.props.userParameters}/>
          </TabPane>
          <TabPane tab="Планирование" key="3">
            <PlanningComponent/>
          </TabPane>
          <TabPane tab="Мотивация" key="4">
            <MotivationComponent/>
          </TabPane>
        </Tabs>
        <Affix  style={{ position: 'absolute', top: 10, right: 15 }}>
          <Button
            shape="circle"
            type="primary"
            onClick={() => {
              this.props.showModal("EditExerciseModal", {...modalProps})
            }}>
          >
            +
          </Button>
        </Affix>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.goals.error,
  loading: state.goals.loading,
  goals: state.goals.goals,
  exercise: state.goals.exercise,
  activities: state.goals.activities,
  profile: state.auth.profile,
  userParameters: state.users.userParameters
})

const mapDispatchToProps = {
  setUserGoals: goalsActions.setUserGoals,
  showModal: usersActions.showModal,
  addGoal: goalsActions.addUserGoal,
  updateGoal: goalsActions.updateUserGoal,
  updateExercise: goalsActions.updateExercise,
  deleteGoal: goalsActions.removeGoal,
  getUserParameters: usersActions.getUserParameters,
  getTodayActivities: goalsActions.getTodayActivities
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainerComponent)
