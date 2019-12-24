import React, { Component } from 'react';
import { connect } from 'react-redux';
import { authActions } from '../../../actions/auth.actions'
import './Home.css';
import UserProfileSideBar from '../../content/User/UserProfileSideBar/UserProfileSideBar';
import GoalsContainerComponent from '../../content/Goal/GoalsConatainerComponent/GoalsContainerComponent';

export class Home extends Component {
  componentDidMount() {
    this.props.setUserProfile(this.props.login);
  }

  render() {
    const {profile} = this.props;

    return (
      <div className="row con">
        <div className="col-md-3">
          <UserProfileSideBar profile={profile} />
        </div>
        <div className="col-md-9">
          <GoalsContainerComponent profile={profile}/>
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
  setUserProfile: authActions.setCurrentUser

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
