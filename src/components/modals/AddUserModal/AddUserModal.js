import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalBody, FormGroup, FormControl, FormLabel, Form } from 'react-bootstrap'
import { connectModal } from 'redux-modal'

class AddUserModal extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user: {
                login: '',
                password: '',
                firstName: '',
                lastName: '',
                weight: '',
                height: ''
            }
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.addUser(this.state.user);        
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
        const { show, handleHide, message, submit } = this.props;
    
        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Add user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form onSubmit={this.handleSubmit}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="text" name="login" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" name="password" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" name="firstName" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" name="lastName" onChange={this.handleChange} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Height</Form.Label>
                            <Form.Control type="text" name="height" onChange={this.handleChange} />
                        </Form.Group>    

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Weight</Form.Label>
                            <Form.Control type="text" name="weight" onChange={this.handleChange} />
                        </Form.Group>                    
                    </Form>               
                </Modal.Body>

                <Modal.Footer>
                    <Button  className= "btn btn-primary btn-sm" onClick={handleHide}>Close</Button>
                    <Button className= "btn btn-primary btn-sm" onClick={this.handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default connectModal({ name: 'AddUserModal', destroyOnHide: true })(AddUserModal)