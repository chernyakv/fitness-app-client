import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goalActions} from '../../../../state/ducks/goal/actions'
import {actions} from '../../../../state/ducks/user/actions'
import {planActions} from '../../../../state/ducks/plan/actions'
import {Affix, Button, Table, Tabs} from 'antd';
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

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
    this.props.getUserParameters(this.props.profile.id, startOfMonth, endOfMonth);
    this.props.getTodayActivities("1", endOfMonth);
    this.props.getExerciseForToday(this.props.profile.id);

  }

  render() {

    const modalProps = {
      updateExercise: this.props.updateExercise,
      exercise: this.props.exercise,
    }
    console.log(this.props.exercise);
    return (
      <div className='goals-content'>
        <EditExerciseModal />
        <Tabs defaultActiveKey="1">
          <TabPane tab="Мой день" key="1">
            <MayDayComponent activities={this.props.activities} exercise={this.props.exercise}/>
          </TabPane>
          <TabPane tab="Прогресс" key="2">
            <ProgressComponent parameters={this.props.userParameters}/>
          </TabPane>
          <TabPane tab="Планирование" key="3">
            <PlanningComponent activities={this.props.activity}/>
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
  activities: state.activities.todayActivities,
  exercise: state.exercises.todayExercise,
  date: state.plans.date,
  profile: state.auth.profile,
  userParameters: state.users.userParameters
});

const mapDispatchToProps = {
  setUserPlan:planActions.setUserPlan,
  getActivitiesForDay: planActions.getActivitiesForDay,
  updatePlanActivities: planActions.updatePlan,
  setUserGoals: goalActions.setUserGoals,
  showModal: actions.showModal,
  addGoal: goalActions.addUserGoal,
  updateGoal: goalActions.updateUserGoal,
  deleteGoal: goalActions.removeGoal,
  getUserParameters: actions.getUserParameters,
  getTodayActivities: goalActions.getTodayActivities,
  getExerciseForToday: exerciseActions.getExerciseForToday,
  updateExercise: exerciseActions.updateExercise,

};

export default connect(mapStateToProps, mapDispatchToProps)(GoalContainerComponent)
