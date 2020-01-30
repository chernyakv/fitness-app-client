import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import {Button, Form, Input} from 'antd';
import 'antd/dist/antd.css';

class AddUserModal extends Component {

  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const user = {
          login: values.login,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          age: values.age,
          weight: values.weight,
          height: values.height,
        }
        this.props.addUser(user);
        this.props.handleHide();
      }
    });
  }

  render() {
    const {show, handleHide, message, submit} = this.props;
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 6},
        sm: {span: 6},
      },
      wrapperCol: {
        xs: {span: 14},
        sm: {span: 14},
      },
    };

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add user</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Login">
              {getFieldDecorator('login', {
                rules: [
                  {
                    required: true,
                    message: 'Please input login!',
                  },
                ],
              })(<Input/>)}
            </Form.Item>

            <Form.Item label="Password">
              {getFieldDecorator('password', {
                rules: [
                  {
                    required: true,
                    message: 'Please input password!',
                  },
                ],
              })(<Input type="password"/>)}
            </Form.Item>

            <Form.Item label="First Name">
              {getFieldDecorator('firstName', {
                rules: [
                  {
                    required: true,
                    message: 'Please input firstName!',
                  },
                ],
              })(<Input/>)}
            </Form.Item>

            <Form.Item label="Last Name">
              {getFieldDecorator('lastName', {
                rules: [
                  {
                    required: true,
                    message: 'Please input lastName!',
                  },
                ],
              })(<Input/>)}
            </Form.Item>

            <Form.Item label="Age">
              {getFieldDecorator('age', {
                rules: [
                  {
                    required: true,
                    message: 'Please input age!',
                  },
                ],
              })(<Input/>)}
            </Form.Item>

            <Form.Item label="Height">
              {getFieldDecorator('height', {
                rules: [
                  {
                    required: true,
                    message: 'Please input height!',
                  },
                ],
              })(<Input/>)}
            </Form.Item>

            <Form.Item label="Weight">
              {getFieldDecorator('weight', {
                rules: [
                  {
                    required: true,
                    message: 'Please input weight!',
                  },
                ],
              })(<Input/>)}
            </Form.Item>
          </Form>
        </Modal.Body>

        <Modal.Footer>
          <Button
            type="primary"
            size="small"
            className="btn"
            onClick={handleHide}
          >
            Close
          </Button>
          <Button
            type="primary"
            size="small"
            className="btn"
            onClick={this.handleSubmit}
          >
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

const WrappedAddUserForm = Form.create({name: 'addGoalModal'})(AddUserModal);

export default connectModal({name: 'AddUserModal', destroyOnHide: true})(WrappedAddUserForm)