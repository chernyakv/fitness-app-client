import React from 'react'
import photo from '../../../../assets/default_avatar1.png'

const UserProfileSideBar = props => {
    const { user } = props;

    return (
        <div className="profile-sidebar">
            <div className="profile-userpic">
                <img src={photo} className="avatar" alt="" />
            </div>
            <div className="profile-usertitle">
                <div className="profile-usertitle-name">
                    {user.sub}
                </div>
                <div className="profile-usertitle-job">
                    {user.scopes}
                </div>
            </div>
        </div>
    )
}

export default UserProfileSideBar
