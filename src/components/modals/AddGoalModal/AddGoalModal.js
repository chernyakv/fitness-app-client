import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, DatePicker, Form, Input} from 'antd';

const {RangePicker} = DatePicker;

class AddGoalModal extends Component {
  constructor(props) {
    super(props);
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
          description: values.description,
          startDate: values.startEndTime[0]._d,
          endDate: values.startEndTime[1]._d,
          measureFrom: values.measureFrom,
          measureTo: values.measureTo,
          measureLabel: values.measureLabel
        }
        this.props.addGoal(goal);
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
        sm: {span: 16},
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
      rules: [{type: 'object', required: true, message: 'Please select time!'}],
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
                    message: 'Please input task description!',
                  },
                ],
              })(<Input/>)}
            </Form.Item>

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

            <Form.Item label="Measure Label">
              {getFieldDecorator('measureLabel')(<Input/>)}
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