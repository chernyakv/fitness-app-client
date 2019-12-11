import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalBody, FormGroup, FormControl, FormLabel, Form } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import AntdForm from './AntdForm';

class EditUserModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                login: props.record.login,
                firstName: props.record.firstName,
                lastName: props.record.lastName,
                weight: props.record.weight,
                height: props.record.height
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        const user = this.props.record;
        for (var key in this.state.user) user[key] = this.state.user[key];
        debugger;
        this.props.updateUser(user);
        this.props.handleHide();
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

    render() {
        const { show, handleHide, user } = this.props
        console.log(this.props);

        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="text" name="login" defaultValue={this.state.user.login} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="firstName" defaultValue={this.state.user.firstName} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" name="lastName" defaultValue={this.state.user.lastName} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="text" name="weight" defaultValue={this.state.user.weight} onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="text" name="height" defaultValue={this.state.user.height} onChange={this.handleChange} />
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <button className="btn btn-primary btn-sm" onClick={handleHide}>Close</button>
                    <button className="btn btn-primary btn-sm" onClick={this.handleSubmit}>Submit</button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default connectModal({ name: 'EditUserModal', destroyOnHide: true })(EditUserModal)