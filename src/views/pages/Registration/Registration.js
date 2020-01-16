import React, { Component } from 'react'
import { connect } from 'react-redux'
import { authActions } from '../../../state/ducks/auth/actions';

export class Registration extends Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                login: '',
                password: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();
     
        const { user } = this.state;
        debugger;
        if (user.login && user.password) {
            this.props.register(user.login, user.password);
        }
    }

    render() {
        return (
            <div className="col-md-6">
                <div className="card">
                    <h5 className="card-header bg-transparent">Registration</h5>
                    <div className="card-body">
                        <form onSubmit={this.handleSubmit}>

                            <div className="form-group row">
                                <label className="col-md-4 col-form-label text-md-right">Login</label>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Enter login" name="login" onChange={this.handleChange} />
                                </div>
                            </div>

                            <div className="form-group row">
                                <label className="col-md-4 col-form-label text-md-right">Password</label>
                                <div className="col-md-6">
                                    <input type="password" className="form-control" placeholder="Enter password" name="password" onChange={this.handleChange} />
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
        );
    }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {
    register: authActions.register
}

export default connect(mapStateToProps, mapDispatchToProps)(Registration)


