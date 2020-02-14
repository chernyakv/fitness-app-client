import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, Form, Input, Radio, TimePicker} from 'antd';

const format = 'HH:mm';

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
          completed: values.completed,
          start: values.startTime.format(format),
          end: values.endTime.format(format),
          timeToComplete: values.timeToComplete
        };
        this.props.addActivity(plans.id, activity1);
        this.props.handleHide();
      }
    });
  };

  render() {
    const {show, handleHide} = this.props;
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = null;

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add Activity</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Activity Name">
              {getFieldDecorator("name")(<Input/>)}
            </Form.Item>
            <Form.Item label="Activity description">
              {getFieldDecorator('description')(<Input/>)}
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
            <Form.Item label="Completed">
              {getFieldDecorator('completed', {
                valuePropName: 'completed',
                initialValue: false
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

const WrappedAddPlanForm = Form.create({name: 'addActivityModal'})(AddActivityModal);

export default connectModal({name: 'AddActivityModal', destroyOnHide: false})(WrappedAddPlanForm)