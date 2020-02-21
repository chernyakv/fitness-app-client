import React from 'react'
import photo from '../../../../assets/avatar.png'

const UserProfileSideBar = props => {
  const {profile} = props;

  if (!profile) {
    return <h4>No user profile</h4>
  }

  return (
    <div className="profile-sidebar">
      <div className="profile-userpic">
        <img src={photo} className="avatar" alt=""/>
      </div>
      <div className="profile-usertitle">
        <div className="profile-usertitle-name">
          {profile.firstName + ' ' + profile.lastName}
        </div>
        <div className="profile-usertitle-job">
          {profile.roles[0].name}
        </div>
      </div>
    </div>
  )
};

export default UserProfileSideBar
