import React, { Component } from 'react'
import { connect } from 'react-redux'
import AddUserModal from '../../modals/AddUserModal'
import EditUserModal from '../../modals/EditUserModal'
import { usersActions } from '../../../actions/users.actions'
import { Table, Divider, Tag, Button, Pagination, notification } from 'antd';
import 'antd/dist/antd.css';
const { Column, ColumnGroup } = Table;

const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: message     
    });
  };

export class Admin extends Component {

    constructor(props) {
        super(props);
        this.handleAddUser = this.handleAddUser.bind(this);
        this.handleUpdateUser = this.handleUpdateUser.bind(this);
    }

    componentDidMount() {
        this.props.getAll();
    }

    handleAddUser(user) {       
        this.props.addUser(user)
            .then(() => {
                openNotificationWithIcon('success', 'user has been added')
            });                 
    }

    handleUpdateUser(user) {
        openNotificationWithIcon('success', 'user has been updated')
        this.props.updateUser(user);
    }

    render() {
        if (this.props.loading) {
            return <h4>Loading...</h4>
        }

        if (this.props.error) {
            return <h4>Error...</h4>
        }

        if (this.props.users !== false) {
            const modalProps = {
                addUser: this.handleAddUser,
                updateUser: this.handleUpdateUser
            }

            return (
                <div>
                    <div style={{ paddingTop: 10 }}>
                        <Button type="primary" onClick={() => {this.props.showModal("AddUserModal", { ...modalProps })}}>
                            Add user
                        </Button>
                    </div>
                    <Table dataSource={this.props.users}  expandedRowRender={record => <p style={{ margin: 0 }}>Height: {record.height} Weight: {record.weight} </p>}>
                        <Column title="ID" dataIndex="id" key="id" />
                        <Column title="First Name" dataIndex="firstName" key="firstName" />
                        <Column title="Last Name" dataIndex="lastName" key="lastName" />
                        <Column title="Login" dataIndex="login" key="login" />
                        <Column
                            title="Action"
                            key="action"
                            render={(text, record) => (
                                <span>
                                    <button type="button" className="btn" onClick={() => {
                                        
                                        this.props.showModal("EditUserModal", { ...modalProps, record })
                                    }}>Edit</button>
                                    <AddUserModal />
                                    <Divider type="vertical" />
                                    <button type="button" className="btn" onClick={() => {
                                        openNotificationWithIcon('success', 'user has been deleted')
                                        this.props.deleteUser(record.id)
                                    }}>Delete</button>
                                    <EditUserModal />
                                    <Divider type="vertical" />
                                </span>
                            )}
                        />
                        <Pagination defaultCurrent={2} total={50} />
                    </Table>
                </div>
            )
        }
        return null;
    }
}

const mapStateToProps = (state) => ({
    error: state.users.error,
    loading: state.users.loading,
    users: state.users.users,
    deleteSucces: state.users.userDeleted
})

const mapDispatchToProps = {
    getAll: usersActions.getAll,
    addUser: usersActions.addUser,
    updateUser: usersActions.updateUser,
    deleteUser: usersActions.deleteUser,
    showModal: usersActions.showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin)
