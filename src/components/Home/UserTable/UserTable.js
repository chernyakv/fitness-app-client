import React, { Component } from 'react'
import { connect } from 'react-redux';
import { usersActions } from '../../../actions/users.actions';
import './UserTable.css';
import { FaBeer, FaEdit, FaTrash } from 'react-icons/fa';
import { IconContext } from "react-icons";
import UserEditModal from '../UserEditModal'
import { bindActionCreators } from 'redux'
import { show } from 'redux-modal';

class UserTable extends Component {
    componentDidMount() {
        this.props.getAll();
    }

    render() {
        console.log(this.props);
        return (
            <IconContext.Provider value={{ style: { margin: 0, padding: 0 } }}>
                <div className="table-wrapper">
                    <div className="table-title">
                        <table class="table table-hover table-borderless">
                            <thead>
                                <tr>
                                    <td>Id</td>
                                    <td>Login</td>
                                    <td>Name</td>
                                    <td>Surname</td>
                                    <td>Action</td>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.users ? this.props.users.map(u => (
                                    <tr>
                                        <td>{u.id}</td>
                                        <td>{u.login}</td>
                                        <td>{u.firstName}</td>
                                        <td>{u.lastName}</td>
                                        <td>
                                            <button type="button" className="btn" onClick={() => {
                                                this.props.showModal("UserEditForm", { message: `This is a modal`, user: u })
                                            }}>
                                                <FaEdit />
                                            </button>
                                            <UserEditModal/>
                                            <button type="button" className="btn" onClick={() => {
                                                this.props.deleteUser(u.id);
                                            }}>
                                                <FaTrash />
                                            </button>

                                        </td>
                                    </tr>
                                )) : (<tr>No users</tr>)}
                            </tbody>
                        </table>
                    </div>
                </div>
            </IconContext.Provider>
        )
    }
}

function mapStateToProps(state) {
    return {
        users: state.users.users,
        deleteSucces: state.users.userDeleted
    }
}

const actionCreators = {
    getAll: usersActions.getAll,
    deleteUser: usersActions.deleteUser,
    showModal:  usersActions.showModa
}

export default connect(mapStateToProps, actionCreators)(UserTable)
