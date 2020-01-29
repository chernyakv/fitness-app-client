import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, TimePicker, Form, Input, Checkbox} from 'antd';

class EditActivityModal extends Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit = e => {
        e.preventDefault();
        const {activity} = this.props;

        this.props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {


                const activity1 = {
                    ...activity,
                    activityId: activity.activityId,
                    planId: activity.planId,
                    name: values.name,
                    description: values.description,
                    completed: values.isCompleted,
                    start: values.startTime,
                    end: values.endTime

                };
                console.log(activity1);
                this.props.updateActivity(activity.activityId,activity1);
                this.props.handleHide();
            }
        });
    };

    render() {
        const {show, handleHide} = this.props;
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
                    <Modal.Title>Edit Activity</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                        <Form.Item label="Activity Name">
                            {getFieldDecorator('name')(<Input/>)}
                        </Form.Item>
                        <Form.Item label="Activity description">
                            {getFieldDecorator('description')(<Input/>)}
                    </Form.Item>

                        <Form.Item label="start Time">
                            {getFieldDecorator('startTime', {
                                valuePropName: 'startTime',
                            })(
                                <TimePicker />
                            )}
                        </Form.Item>
                        <Form.Item label="end Time">
                            {getFieldDecorator('endTime', {
                                valuePropName: 'endTime',
                            })(
                                <TimePicker />
                            )}
                        </Form.Item>
                        <Form.Item {...formItemLayout}>
                            {getFieldDecorator('isCompleted', {
                                valuePropName: 'isCompleted',
                            })(
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

const WrappedAddPlanForm = Form.create({name: 'editActivityModal'})(EditActivityModal);

export default connectModal({name: 'EditActivityModal', destroyOnHide: false})(WrappedAddPlanForm)