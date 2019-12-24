import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, DatePicker, Form, Input} from 'antd';
import moment from 'moment';

const {RangePicker} = DatePicker;


class EditGoalModal extends Component {
  constructor(props) {
    super(props);
    console.log(moment(this.props.record.startDate))

    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(date, dateString) {
    console.log(dateString);
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const goal = {
          ...this.props.record,
          description: values.description,
          startDate: values.startEndTime[0]._d,
          endDate: values.startEndTime[1]._d,
          measureFrom: values.measureFrom,
          measureTo: values.measureTo
        }
        console.log(goal);
        this.props.updateGoal(goal);
        this.props.handleHide();
      }
    });
  };

  render() {
    const {show, handleHide, message, submit} = this.props;
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 24},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 24},
        sm: {span: 12},
      },
    };

    const tailFormItemLayout = {
      wrapperCol: {
        xs: {
          span: 16,
          offset: 8,
        },
        sm: {
          span: 16,
          offset: 8,
        },
      },
    };

    const config = {
      rules: [{type: 'object', required: true, message: 'Please select time!'}],
    };

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Edit goal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Goal Name">
              {getFieldDecorator('description', {
                initialValue: this.props.record.description,
                rules: [
                  {
                    required: true,
                    message: 'Please input your name!',
                  },
                ],
              })(<Input/>)}
            </Form.Item>

            <Form.Item label="Time">
              {getFieldDecorator('startEndTime', {
                initialValue: [
                  this.props.record.startDate ? moment(this.props.record.startDate) : null,
                  this.props.record.endDate ? moment(this.props.record.endDate) : null,
                ]
              })(<RangePicker/>)}
            </Form.Item>

            <Form.Item label="Measure From">
              {getFieldDecorator('measureFrom')(<Input/>)}
            </Form.Item>

            <Form.Item label="Measure To">
              {getFieldDecorator('measureTo')(<Input/>)}
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

const WrappedEditGoalForm = Form.create({name: 'editGoalModal'})(EditGoalModal);

export default connectModal({name: 'EditGoalModal', destroyOnHide: false})(WrappedEditGoalForm)