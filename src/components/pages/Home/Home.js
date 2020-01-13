import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authActions } from '../../../actions/auth.actions'
import './Home.css';
import UserProfileSideBar from '../../content/User/UserProfileSideBar/UserProfileSideBar';
import GoalContainerComponent from '../../content/Goal/GoalContainerComponent/GoalContainerComponent';
import GoalSelectionComponent from "../../content/Goal/GoalSelectionComponent/GoalSelectionComponent";
import {userService} from "../../../service/user.service";
import {usersActions} from "../../../actions/users.actions";

export class Home extends Component {

  constructor(props) {
    super(props);
    this.setUserGoal = this.setUserGoal.bind(this);
  }

  componentDidMount() {
    this.props.setUserProfile(this.props.login);
  }

  setUserGoal = (userId) => {
    this.props.setUserGoal(this.props.profile.id, '1');
  }

  render() {
    const {profile} = this.props;
    console.log(profile);

    if(!profile) {
      return <h4>No user profile</h4>
    }

    return (
      <div className="row con">
        <div className="col-md-3">
          <UserProfileSideBar profile={profile} />
        </div>
        <div className="col-md-9">
          {profile.hasGoal ? (
            <GoalContainerComponent />
          ) : (
            <GoalSelectionComponent profile={profile} setUserGaol={this.setUserGoal}/>
          )}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  login: state.auth.login
})

const mapDispatchToProps = {
  setUserProfile: authActions.setCurrentUser,
  setUserGoal: usersActions.setGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
