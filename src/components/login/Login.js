import React, { Component } from 'react'
import { Field, reduxForm } from "redux-form"
import { connect } from 'react-redux';
import { authActions } from '../../actions/auth.actions';
import { Link } from 'react-router-dom';


class LoginForm extends Component {

  constructor(props) {
    super(props);
    this.state = { login: "", password: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleLoginChange = ({ target }) => {
    this.setState({ login: target.value })
  }

  handlePasswordChange = ({ target }) => {
    this.setState({ password: target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { login, password } = this.state
    if (login && password) {
      this.props.login(login, password);
    }
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="card">
          <h5 className="card-header bg-transparent">Sign In</h5>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>

              <div className="form-group row">
                <label className="col-md-4 col-form-label text-md-right">Login</label>
                <div className="col-md-6">
                  <input type="text" className="form-control" placeholder="Enter login" onChange={this.handleLoginChange} />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-md-4 col-form-label text-md-right">Password</label>
                <div className="col-md-6">
                  <input type="password" className="form-control" placeholder="Enter password" onChange={this.handlePasswordChange} />
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
                <Link to="/registration" className="btn btn-link">Register</Link>
              </div>

            </form>
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}

const actionCreators = {
  login: authActions.login,
  logout: authActions.logout
};

const Login = connect(mapStateToProps, actionCreators)(LoginForm)

export default Login
