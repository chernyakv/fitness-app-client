import React, { Component } from 'react'
import './Home.css';
import photo from '../../assets/default_avatar.jpg'
import UserTable from './UserTable/UserTable';

export default class Home extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-md-3 pt">
          <div className="profile-sidebar">

            <div className="profile-userpic">
              <img src={photo} className="avatar" alt="" />
            </div>

            <div className="profile-usertitle">
              <div className="profile-usertitle-name">
                Marcus Doe
					    </div>
              <div className="profile-usertitle-job">
                Developer
				    	</div>
            </div>
          </div>
          
        </div>
        <div className="col-md-9 pt">
          <div className="content">
            <UserTable/>
          </div>
        </div>
      </div>
    )
  }
}
