import React from 'react';
import 'antd/dist/antd.css';
import {Button, Form, Icon, Input} from 'antd';
import styles from './ChangePassword.module.css'

const ChangePasswordForm = (props) => {

  const handleSubmit = e => {
    e.preventDefault();
    props.form.validateFields((err, values) => {
      if (!err) {
        props.handleSubmit(values);
      }
    });
  }

  const {getFieldDecorator} = props.form;

  return (
    <Form onSubmit={handleSubmit} className={styles.change_password_form}>
      <Form.Item>
        {getFieldDecorator('oldPassword', {
          rules: [{required: true, message: 'Please input your old password!'}],
        })(
          <Input
            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
            type="password"
            placeholder="Old password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('newPassword', {
          rules: [{required: true, message: 'Please input your new password!'}],
        })(
          <Input
            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
            type="password"
            placeholder="New password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.change_password_form_button}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  )
};

export default Form.create({name: 'change_password_form'})(ChangePasswordForm)