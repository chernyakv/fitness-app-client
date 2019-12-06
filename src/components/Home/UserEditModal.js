import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Button, Modal, ModalBody, FormGroup, FormControl, FormLabel, Form } from 'react-bootstrap'
import { connectModal } from 'redux-modal'

class UserEditModal extends Component {
    static propTypes = {
        message: PropTypes.string.isRequired,
        handleHide: PropTypes.func.isRequired
    };

    render() {
        const { show, handleHide, message, user } = this.props

        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Edit user</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Login</Form.Label>
                            <Form.Control type="text" value={user.login} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="text" value={user.firstName} />
                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="text" value={user.lastName} />
                        </Form.Group>                
                    </Form>               
                </Modal.Body>

                <Modal.Footer>
                    <Button onClick={handleHide}>Close</Button>
                    <Button bsStyle="danger" onClick={this.handleClose}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

export default connectModal({ name: 'UserEditForm' })(UserEditModal)