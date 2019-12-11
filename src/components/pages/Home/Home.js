import React, { Component } from 'react'
import { connect } from 'react-redux'
import jwt_decode from 'jwt-decode';
import './Home.css';
import photo from '../../../assets/default_avatar1.png'
import UserProfileSideBar from '../../content/User/UserProfileSideBar/UserProfileSideBar';

export class Home extends Component {

  
  render() {
    const user = jwt_decode(JSON.parse(localStorage.getItem('jwt')).accessToken);
    
    return (
      <div className="row con">
        <div className="col-md-3">
          <UserProfileSideBar user={user} />
        </div>
        <div className="col-md-9">
          <div className="content">
            <h4>User goals here</h4>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user
})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
