import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, Form, Input, Radio, TimePicker} from 'antd';
import moment from 'moment';

const format = 'HH:mm';

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
          id: activity.id,
          name: values.name,
          description: values.description,
          completed: values.completed,
          startTime: values.startTime.format(format),
          endTime: values.endTime.format(format),
          timeToComplete: activity.timeToComplete
        };
        console.log(activity1);
        this.props.updateActivity(activity.id, activity1);
        this.props.handleHide();
      }
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
              {getFieldDecorator("name", {
                initialValue: activity.name
              })(<Input/>)}
            </Form.Item>
            <Form.Item label="Activity description" defaultValue={activity.description}>
              {getFieldDecorator('description', {
                initialValue: activity.description
              })(<Input/>)}
            </Form.Item>

            <Form.Item label="Change start Time">
              {getFieldDecorator('startTime', {
                valuePropName: 'startTime',
                initialValue: moment(activity.startTime, format)
              })(
                <TimePicker format={format}/>
              )}
            </Form.Item>
            <Form.Item label="Change end Time">
              {getFieldDecorator('endTime', {
                valuePropName: 'endTime',
                initialValue: moment(activity.endTime, format)
              })(
                <TimePicker format={format}/>
              )}
            </Form.Item>
            <Form.Item label="Completed">
              {getFieldDecorator('completed', {
                valuePropName: 'completed',
                initialValue: activity.completed
              })(
                <Radio.Group defaultValue={false} buttonStyle="solid">
                  <Radio.Button value={true}>Done</Radio.Button>
                  <Radio.Button value={false}>Not Done</Radio.Button>
                </Radio.Group>,
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