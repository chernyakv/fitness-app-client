import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, Form, Input} from 'antd';

class EditExerciseModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit = e => {
    e.preventDefault();
    const {exercise} = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        const exercise1 = {
          id: exercise.id,
          date: exercise.date,
          userId: exercise.userId,
          calories: values.calories ? exercise.calories - values.calories : exercise.calories,
          water: values.water ? exercise.water - values.water : exercise.water,
          sleep: values.sleep ? exercise.sleep - values.sleep : exercise.sleep,
          activity: exercise.activity
        };

        this.props.updateExercise(exercise1.id, exercise1);
        this.props.handleHide();
      }
    });
  };

  render() {
    const {show, handleHide, message, submit} = this.props;
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

    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Create goal</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Calories">
              {getFieldDecorator('calories')(<Input/>)}
            </Form.Item>

            <Form.Item label="Water">
              {getFieldDecorator('water')(<Input/>)}
            </Form.Item>

            <Form.Item label="Sleep">
              {getFieldDecorator('sleep')(<Input/>)}
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

const WrappedEditExerciseModal = Form.create({name: 'editExerciseModal'})(EditExerciseModal);

export default connectModal({name: 'EditExerciseModal', destroyOnHide: false})(WrappedEditExerciseModal)