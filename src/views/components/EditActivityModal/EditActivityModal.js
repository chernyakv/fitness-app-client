import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, DatePicker, Form, Input,   Checkbox} from 'antd';

const {RangePicker} = DatePicker;

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

                const rangeTimeValue = values['range-time-picker'];
                const value = {
                    ...values,
                    'date-time-picker': values['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'),
                    'range-time-picker': [
                        rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
                        rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss'),
                    ],
                };
                const activity1 = {
                    activityId: activity.activityId,
                    planId: activity.planId,
                    name: values.name,
                    description: values.description,
                    isCompleted: values.isCompleted,
                    date: values.date,
                    start: values.startEndTime[0]._d,
                    end: values.startEndTime[1]._d

                };
                console.log(activity1);
                console.log('Received values of form: ', value);
                this.props.updateActivity(activity1.activityId, activity1);
                this.props.handleHide();
            }
        });
    };

    render() {
        const {show, handleHide} = this.props;
        const {getFieldDecorator} = this.props.form;
        const config = {
            rules: [{type: 'object', required: true, message: 'Please select time!'}],
        };
        const rangeConfig = {
            rules: [{type: 'array', required: true, message: 'Please select time!'}],
        };
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
                        </Form.Item><Form.Item label="Activity description">
                        {getFieldDecorator('description')(<Input/>)}
                    </Form.Item>

                        <Form.Item label="RangePicker[showTime]">
                            {getFieldDecorator('startEndTime', rangeConfig)(
                                <RangePicker showTime format="YYYY-MM-DD HH:mm:ss"/>,
                            )}
                        </Form.Item>

                        <Form.Item label="DatePicker[showTime]">
                            {getFieldDecorator('date', config)(
                                <DatePicker showTime format="YYYY-MM-DD HH:mm:ss"/>,
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

const WrappedAddPlanForm = Form.create({name: 'addPlanModal'})(EditActivityModal);

export default connectModal({name: 'AddPlanModal', destroyOnHide: false})(WrappedAddPlanForm)