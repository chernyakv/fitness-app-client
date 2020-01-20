import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import {authActions} from '../../../state/ducks/auth/actions';
import ChangePasswordForm from "./ChangePasswordForm";


class ChangePasswordContainer extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (values) => {
    this.props.reset(values.oldPassword, values.newPassword)
  }

  render() {
    return (
      <Fragment>
        <ChangePasswordForm handleSubmit={this.handleSubmit}/>
      </Fragment>
    )
  }
}

const mapDispatchToProps = {
  reset: authActions.resetPassword
};

export default connect(null, mapDispatchToProps)(ChangePasswordContainer)
