import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, Form, Input} from 'antd';

class AddNewsItemModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const {motivationItem} = this.props;
    console.log(motivationItem);
    this.props.form.validateFieldsAndScroll((err, values) => {

      if (!err) {
        const newsItem = {
          item: values.item,
          itemType: values.itemType,
          motivationItem: motivationItem
        };
        console.log("AddNewsItemModal newsItem")
        console.log(newsItem);
        console.log("AddNewsItemModal motivationItem")
        console.log(motivationItem);

        this.props.updateMotivationItem(motivationItem.id, newsItem);
        this.props.handleHide();
      }
    });
  };

  render() {
    console.log("AddNewsItemModal")
    console.log(this.props)
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

            <Form.Item label="Item type">
              {getFieldDecorator('itemType', {initialValue: "TEXT"})(<Input/>)}
            </Form.Item>
            <Form.Item label="Item">
              {getFieldDecorator('item', {initialValue: "Arrays and/or values to concatenate into a new array. If all valueN parameters are omitted, concat returns a shallow copy of the existing array on which it is called. See the description below for more details."})(
                <Input/>)}
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

const WrappedAddNewsItemModalForm = Form.create({name: 'addNewsItemModal'})(AddNewsItemModal);

export default connectModal({name: 'AddNewsItemModal', destroyOnHide: false})(WrappedAddNewsItemModalForm)