import React, { Component } from 'react'
import { connect } from 'react-redux';
import { authActions } from '../../../state/ducks/auth/actions';


class ResetPassword extends Component {

  constructor(props) {
    super(props);
    this.state = { password: "", newPassword: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  hanleOldPasswordChange = ({ target }) => {
    this.setState({ password: target.value })
  }

  hanleNewPasswordChange = ({ target }) => {
    this.setState({ newPassword: target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { password, newPassword } = this.state
    if (password && newPassword) {
      this.props.reset(password, newPassword);
    }
  }

  render() {
    return (
      <div className="col-md-6">
        <div className="card">
          <h5 className="card-header bg-transparent">Reset password</h5>
          <div className="card-body">
            <form onSubmit={this.handleSubmit}>

              <div className="form-group row">
                <label className="col-md-4 col-form-label text-md-right">Password</label>
                <div className="col-md-6">
                  <input type="password" className="form-control" placeholder="Enter login" onChange={this.hanleOldPasswordChange} />
                </div>
              </div>

              <div className="form-group row">
                <label className="col-md-4 col-form-label text-md-right">New password</label>
                <div className="col-md-6">
                  <input type="password" className="form-control" placeholder="Enter password" onChange={this.hanleNewPasswordChange} />
                </div>
              </div>

              <div className="form-group">
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
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
  reset: authActions.resetPassword
}; 

export default connect(mapStateToProps, actionCreators)(ResetPassword)
