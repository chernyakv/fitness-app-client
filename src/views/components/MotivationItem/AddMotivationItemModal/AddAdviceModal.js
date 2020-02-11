import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, Form, Input} from 'antd';

class AddAdviceModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const {motivations} = this.props;

    this.props.form.validateFieldsAndScroll((err, values) => {
      console.log("AddAdviceModal")
      console.log(this.props)
      if (!err) {
        const motivationItem = {
          description: values.description,

        };
        this.props.addMotivationItem(motivations.motivationId, motivationItem);
        this.props.handleHide();
      }
    });
  };

  render() {
    const {show, handleHide} = this.props;
    const {getFieldDecorator} = this.props.form;

    const formItemLayout = {
      labelCol: {
        xs: {span: 8},
        sm: {span: 8},
      },
      wrapperCol: {
        xs: {span: 14},
        sm: {span: 14},
      },
    };
    return (
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add motivation item</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="Advice description">
              {getFieldDecorator('description')(<Input/>)}
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

const WrappedAddAdviceModalForm = Form.create({name: 'addAdviceModal'})(AddAdviceModal);

export default connectModal({name: 'AddAdviceModal', destroyOnHide: false})(WrappedAddAdviceModalForm)