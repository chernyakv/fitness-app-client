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
                    name: values.name,
                    description: values.description,
                    isCompleted: values.isCompleted,
                    start: values.startTime,
                    end: values.endTime,
                    timeToComplete: activity.timeToComplete
                };
                console.log(activity1);
                this.props.updateActivity(activity.activityId,activity1);
                this.props.handleHide();
            }
            window.location.reload();
        });
    };

    render() {
        const {show, handleHide} = this.props;
        const {getFieldDecorator} = this.props.form;
        const {activity} = this.props;
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
                  <Modal.Title>Edit Activity</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                  <Form {...formItemLayout} onSubmit={this.handleSubmit}>
                      <Form.Item label="Activity Name">
                          {getFieldDecorator("name",{
                              initialValue:activity.name
                          })(<Input />)}
                      </Form.Item>
                      <Form.Item label="Activity description"  defaultValue={activity.description}>
                          {getFieldDecorator('description',{
                              initialValue:activity.description
                          })(<Input />)}
                      </Form.Item>

                      <Form.Item label="start Time">
                          {getFieldDecorator('startTime', {
                              valuePropName: 'startTime',
                          })(
                            <TimePicker format={format}/>
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
                              valuePropName: 'isCompleted',
                              initialValue:activity.isCompleted
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