import React, {Component} from 'react'
import {Modal} from 'react-bootstrap'
import {connectModal} from 'redux-modal'
import 'antd/dist/antd.css';
import {Button, Form, Input, Radio} from 'antd';


class AddNewsItemModal extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = e => {
    e.preventDefault();
    const {motivationItem} = this.props;
    this.props.form.validateFieldsAndScroll((err, values) => {

      if (!err) {
        const newsItem = {
          item: values.item,
          itemType: values.itemType,
          motivationItem: motivationItem
        };
        this.props.addNewsItem(motivationItem.id, newsItem);
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

            <Form.Item label="Item type">
              {getFieldDecorator('itemType', {initialValue: "TEXT"})(
                <Radio.Group buttonStyle="solid">
                  <Radio.Button value={"TEXT"}>Text</Radio.Button>
                  <Radio.Button value={"IMAGE"}>Image</Radio.Button>
                </Radio.Group>
              )}
            </Form.Item>
            <Form.Item label="Item">
              {getFieldDecorator('item', {initialValue: "write text/url"})(
                <Input pattern={{
                  pattern: "[A-Za-z]",
                  title: "The Social Security Number"
                }}/>)}
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