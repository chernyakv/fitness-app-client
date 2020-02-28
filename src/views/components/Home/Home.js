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
import {Affix, Button, Icon, Tabs} from 'antd';
import 'antd/dist/antd.css';
import {exerciseActions} from "../../../state/ducks/exercise";
import EditExerciseModal from "../Exercises/EditExerciseModal/EditExerciseModal";
import {withRouter} from "react-router";
import MotivationTab from "../Motivation/MotivationTab";

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

  renderHomeTabs = (tab) => {

    const modalProps = {
      updateExercise: this.props.updateExercise,
      exercise: this.props.exercise,
    };

    return (
      <div className="home-content">
        <EditExerciseModal/>
        <Tabs defaultActiveKey={tab}
              onChange={key => {
                this.props.history.push(`/${key}`);
              }}>
          <TabPane tab={
            <snap>
              <Icon type="heart"/>
              Мой день
            </snap>
          } key="day">
            <MayDay/>
          </TabPane>
          <TabPane tab={
            <snap>
              <Icon type="bar-chart"/>
              Прогресс
            </snap>} key="progress">
            <Progress/>
          </TabPane>
          <TabPane tab={
            <snap>
              <Icon type="carry-out"/>
              Планирование
            </snap>
          } key="planning">
            <PlanningComponent/>
          </TabPane>
          <TabPane tab={
            <snap>
              <Icon type="line-chart"/>
              Мотивация
            </snap>
          } key="motivation">
            <MotivationTab/>
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
    const {profile, match} = this.props;

    if (!profile) {
      return <h4>No user profile</h4>
    }
    return (
      <div className="row con">
        <div className="col-md-3">
          <UserProfileSideBar profile={profile}/>
        </div>
        <div className="col-md-9">
          {profile.goal ? (
            this.renderHomeTabs(match.params.tab)
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

const HomeWithRouter = withRouter(Home);
export default connect(mapStateToProps, mapDispatchToProps)(HomeWithRouter)
