import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goalActions} from '../../../../state/ducks/goal/actions'
import {actions} from '../../../../state/ducks/user/actions'
import {Affix, Button, Tabs} from 'antd';
import 'antd/dist/antd.css';
import './GoalContainerComponent.css'
import MayDayComponent from "./MayDayComponent/MayDayComponent";
import ProgressComponent from "./ProgressComponent/ProgressComponent";
import PlanningComponent from "./PlanningComponent/PlanningComponent";
import MotivationComponent from "./MotivationComponent/MotivationComponent";
import moment from 'moment';
import EditExerciseModal from "../../Exercises/EditExerciseModal/EditExerciseModal";
import {exerciseActions} from "../../../../state/ducks/exercise/actions";

const {TabPane} = Tabs;

class GoalContainerComponent extends Component {

  componentDidMount() {
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
    this.props.getUserParameters(this.props.profile.id, startOfMonth, endOfMonth);
    this.props.getTodayActivities("1", endOfMonth);
    this.props.getTodayExercise(this.props.profile.id);
  }

  render() {

    const modalProps = {
      updateExercise: this.props.updateExercise,
      exercise: this.props.exercise,
    };

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
  error: state.goals.error,
  loading: state.goals.loading,
  goals: state.goals.goals,
  exercise: state.exercises.todayExercise,
  activities: state.goals.activities,
  profile: state.auth.profile,
  userParameters: state.users.userParameters
});

const mapDispatchToProps = {
  setUserGoals: goalActions.setUserGoals,
  showModal: actions.showModal,
  addGoal: goalActions.addUserGoal,
  updateGoal: goalActions.updateUserGoal,
  deleteGoal: goalActions.removeGoal,
  getUserParameters: actions.getUserParameters,
  getTodayActivities: goalActions.getTodayActivities,
  getTodayExercise: exerciseActions.getExerciseForToday,
  updateExercise: exerciseActions.updateExercise
};

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainerComponent)
