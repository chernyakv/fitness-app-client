import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, TimePicker, Form, Input, Checkbox} from 'antd';

class AddActivityModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        const {plans} = this.props;

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {


                const activity1 = {
                    name: values.name,
                    description: values.description,
                    isCompleted: values.isCompleted,
                    start: values.startTime,
                    end: values.endTime,
                    timeToComplete: values.timeToComplete
                };
                this.props.addActivity(plans.planId,activity1);
                this.props.handleHide();
            }
        });
        window.location.reload();
    };

    render() {
        const {show, handleHide} = this.props;
        const {getFieldDecorator} = this.props.form;
        const format = 'HH:mm';
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
                    <Modal.Title>Add Activity</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="Activity Name">
                            {getFieldDecorator("name")(<Input />)}
                        </Form.Item>
                        <Form.Item label="Activity description" >
                            {getFieldDecorator('description')(<Input />)}
                        </Form.Item>

                        <Form.Item label="start Time">
                            {getFieldDecorator('startTime', {
                                valuePropName: 'startTime',
                            })(
                                <TimePicker format={format} />
                            )}
                        </Form.Item>
                        <Form.Item label="end Time">
                            {getFieldDecorator('endTime', {
                                valuePropName: 'endTime',
                            })(
                                <TimePicker format={format}/>
                            )}
                        </Form.Item>
                        <Form.Item {...formItemLayout}>
                            {getFieldDecorator('isCompleted', {
                                valuePropName: 'isCompleted'})(
                                <Checkbox>
                                    isCompleted
                                </Checkbox>,
                            )}
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

const WrappedAddPlanForm = Form.create({name: 'addActivityModal'})(AddActivityModal);

export default connectModal({name: 'AddActivityModal', destroyOnHide: false})(WrappedAddPlanForm)