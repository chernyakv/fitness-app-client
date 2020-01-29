import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, DatePicker, Form, Input, Select} from 'antd';

const { Option } = Select;
const {RangePicker} = DatePicker;

class AddGoalModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const goal = {
          startDate: values.startEndTime[0]._d,
          endDate: values.startEndTime[1]._d,
          measureFrom: values.measureFrom,
          measureTo: values.measureTo,
        }
        this.props.addGoal(goal);
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
          <Modal.Title>Create goal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Time" onClick={(event) => event.stopPropagation()}>
              {getFieldDecorator('startEndTime', {
                rules:  [
                  {
                    required: true,
                    message: 'Please input time!',
                  },
                ],
              })(<RangePicker/>)}
            </Form.Item>

            <Form.Item label="Measure From">
              {getFieldDecorator('measureFrom')(<Input/>)}
            </Form.Item>

            <Form.Item label="Measure To">
              {getFieldDecorator('measureTo')(<Input/>)}
            </Form.Item>

            <Form.Item label="Select" hasFeedback>
              {getFieldDecorator('select', {
                rules: [{ required: true, message: 'Please select your goal!' }],
              })(
                <Select placeholder="Please select a goal type">
                  <Option value="hold1">Набрать вес</Option>
                  <Option value="hold">Держать вес</Option>
                  <Option value="lose">Сбросить вес</Option>
                </Select>,
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

const WrappedAddGoalForm = Form.create({name: 'addGoalModal'})(AddGoalModal);

export default connectModal({name: 'AddGoalModal', destroyOnHide: false})(WrappedAddGoalForm)