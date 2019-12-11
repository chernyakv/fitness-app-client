import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Tooltip,
    Icon,
    Cascader,
    Select,
    Row,
    Col,
    Checkbox,
    Button,
    AutoComplete,
} from 'antd';

class AntdForm extends Component {


    render() {

        const formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 },
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 },
            },
        };

        const { getFieldDecorator } = this.props.form;

        return (
            <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                <Form.Item label="Login">
                    {getFieldDecorator('login', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your Login!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>

                <Form.Item label="Password" hasFeedback>
                    {getFieldDecorator('password', {
                        rules: [
                            {
                                required: true,
                                message: 'Please input your password!',
                            }                           
                        ],
                    })(<Input.Password />)}
                </Form.Item>

                <Form.Item label="Name">
                    {getFieldDecorator('firstName', {
                        rules: [                            
                            {
                                required: true,
                                message: 'Please input your name!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>

                
                <Form.Item label="Surname">
                    {getFieldDecorator('lastName', {
                        rules: [                            
                            {
                                required: true,
                                message: 'Please input your surname!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>

            </Form>
        )
    }
}

export default Form.create({ name: 'test' })(AntdForm);