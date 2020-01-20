import React from 'react';
import 'antd/dist/antd.css';
import {Button, Form, Icon, Input} from 'antd';
import styles from './Registration.module.css'

const RegistrationForm = (props) => {

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
    <Form onSubmit={handleSubmit} className={styles.register_form}>
      <Form.Item>
        {getFieldDecorator('login', {
          rules: [{required: true, message: 'Please input your login!'}],
        })(
          <Input
            prefix={<Icon type="user" style={{color: 'rgba(0,0,0,.25)'}}/>}
            placeholder="Login"
          />,
        )}
      </Form.Item>
      <Form.Item>
        {getFieldDecorator('password', {
          rules: [{required: true, message: 'Please input your Password!'}],
        })(
          <Input
            prefix={<Icon type="lock" style={{color: 'rgba(0,0,0,.25)'}}/>}
            type="password"
            placeholder="Password"
          />,
        )}
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" className={styles.register_form_button}>
          Register
        </Button>
      </Form.Item>
    </Form>
  )
};

export default Form.create({name: 'registration_form'})(RegistrationForm)