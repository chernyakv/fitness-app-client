import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, Form, Input,Rate} from 'antd';

class AddNewsModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const {motivationItem} = this.props;

    this.props.form.validateFieldsAndScroll((err, values) => {

      if (!err) {

        const motivationItem1 = {
          description: values.description,
          tag: values.tag,
          timeToRead: values.timeToRead,
          score: values.score
        };
        this.props.addMotivationItem(motivationItem.id, motivationItem1);
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
          <Modal.Title>Add news item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form {...formItemLayout} onSubmit={this.handleSubmit}>
            <Form.Item label="News description">
              {getFieldDecorator('description')(<Input/>)}
            </Form.Item>
            <Form.Item label="News tag">
              {getFieldDecorator('tag')(<Input/>)}
            </Form.Item>
            <Form.Item label="News timeToRead">
              {getFieldDecorator('timeToRead')(<Input/>)}
            </Form.Item>
            <Form.Item label="News score">
              {getFieldDecorator('score', {
                initialValue: 3.5,
              })(<Rate />)}
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

const WrappedAddAddNewsModalForm = Form.create({name: 'addNewsModal'})(AddNewsModal);

export default connectModal({name: 'AddNewsModal', destroyOnHide: false})(WrappedAddAddNewsModalForm)