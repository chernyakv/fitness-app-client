import React, {Component} from 'react';
import {connect} from 'react-redux';
import {authActions} from '../../../state/ducks/auth/actions'
import './Home.css';
import UserProfileSideBar from '../../components/User/UserProfileSideBar/UserProfileSideBar';
import GoalSelectionComponent from "../../components/Goals/GoalSelectionComponent/GoalSelectionComponent";
import {actions} from "../../../state/ducks/user/actions";
import MayDay from "../MayDay";
import Progress from "../Progress";
import PlanningComponent from "../Planning/Planning";
import Motivation from "../Motivation";
import {Affix, Button, Tabs} from 'antd';
import 'antd/dist/antd.css';
import {exerciseActions} from "../../../state/ducks/exercise";
import EditExerciseModal from "../Exercises/EditExerciseModal/EditExerciseModal";

const {TabPane} = Tabs;

class Home extends Component {

  constructor(props) {
    super(props);
    this.setUserGoal = this.setUserGoal.bind(this);
  }

  componentDidMount() {
    this.props.setUserProfile(this.props.login);
  }

  setUserGoal = (id, goal) => {
    this.props.setUserGoal(this.props.profile.id, goal);
  };

  renderHomeTabs = () => {

    const modalProps = {
      updateExercise: this.props.updateExercise,
      exercise: this.props.exercise,
    };

    return (

      <div className="home-content">
        <EditExerciseModal/>
        <Tabs defaultActiveKey="1">
          <TabPane tab="Мой день" key="1">
            <MayDay/>
          </TabPane>
          <TabPane tab="Прогресс" key="2">
            <Progress/>
          </TabPane>
          <TabPane tab="Планирование" key="3">
            <PlanningComponent/>
          </TabPane>
          <TabPane tab="Мотивация" key="4">
            <Motivation/>
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
  };

  render() {
    const {profile} = this.props;

    if (!profile) {
      return <h4>No user profile</h4>
    }
    console.log("props");
    console.log(this.props);
    return (
      <div className="row con">
        <div className="col-md-3">
          <UserProfileSideBar profile={profile}/>
        </div>
        <div className="col-md-9">
          {profile.hasGoal ? (
            this.renderHomeTabs()
          ) : (
            <GoalSelectionComponent profile={profile} setUserGoal={this.setUserGoal}/>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  exercise: state.exercises.todayExercise,
  profile: state.auth.profile,
  login: state.auth.login
});

const mapDispatchToProps = {
  setUserProfile: authActions.setCurrentUser,
  updateExercise: exerciseActions.updateExercise,
  setUserGoal: actions.setGoal,
  showModal: actions.showModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)
