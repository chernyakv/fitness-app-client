import React, { Component } from 'react'
import { Modal, ModalBody } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import {
    Form,
    Input,
    Button,
    DatePicker
} from 'antd';

const { MonthPicker, RangePicker, WeekPicker } = DatePicker;

class AddGoalModal extends Component {

    constructor(props) {
        super(props);

        this.handleSubmit = this.handleSubmit.bind(this);
    }



    handleSubmit = e => {
        e.preventDefault();
        debugger;
    
        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {                          
                this.props.addGoal(values);
                this.props.handleHide();
            }
        });
    };

    render() {
        const { show, handleHide, message, submit } = this.props;
        const { getFieldDecorator } = this.props.form;

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

        const tailFormItemLayout = {
            wrapperCol: {
                xs: {
                    span: 24,
                    offset: 0,
                },
                sm: {
                    span: 16,
                    offset: 8,
                },
            },
        };

        const config = {
            rules: [{ type: 'object', required: true, message: 'Please select time!' }],
        };

        return (
            <Modal show={show}>
                <Modal.Header>
                    <Modal.Title>Create goal</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="Goal Name">
                            {getFieldDecorator('description', {
                                rules: [                                 
                                    {
                                        required: true,
                                        message: 'Please input your name!',
                                    },
                                ],
                            })(<Input />)}
                        </Form.Item>

                        <Form.Item {...tailFormItemLayout}>
                            <Button type="primary" htmlType="submit">
                                Register
                            </Button>
                        </Form.Item>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button className="btn btn-primary btn-sm" onClick={handleHide}>Close</Button>
                    <Button className="btn btn-primary btn-sm" onClick={this.handleSubmit}>Submit</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}

const WrappedAddGoalForm = Form.create({ name: 'register' })(AddGoalModal);

export default connectModal({ name: 'AddGoalModal', destroyOnHide: true })(WrappedAddGoalForm)