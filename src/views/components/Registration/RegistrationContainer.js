import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux'
import {authActions} from '../../../state/ducks/auth/actions';
import RegistrationForm from "./RegistrationForm";

class RegistrationContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    this.props.register(values.login, values.password);
  }

  render() {
    return (
      <Fragment>
        <RegistrationForm handleSubmit={this.handleSubmit} />
      </Fragment>
    );
  }
}

const mapDispatchToProps = {
  register: authActions.register
}

export default connect(null, mapDispatchToProps)(RegistrationContainer)


