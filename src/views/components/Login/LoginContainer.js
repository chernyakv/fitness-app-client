import React, {Component, Fragment} from 'react'
import {connect} from 'react-redux';
import {authActions} from '../../../state/ducks/auth/actions';
import 'antd/dist/antd.css';
import LoginForm from "./LoginForm";


class LoginContainer extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = (values) => {
    this.props.login(values.login, values.password);
  };

  render() {
    return (
      <Fragment>
        <LoginForm handleSubmit={this.handleSubmit}/>
      </Fragment>
    )
  }
}

const actionCreators = {
  login: authActions.login
};

export default connect(null, actionCreators)(LoginContainer)
