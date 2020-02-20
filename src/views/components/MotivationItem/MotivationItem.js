import React, {useState} from 'react'
import 'antd/dist/antd.css';
import {Button, Icon, List, Modal, Tag} from 'antd';
import News from "../News/News";
import AddNewsItemModal from "./AddMotivationItemModal/AddNewsItemModal";
const {confirm} = Modal;
const MotivationItem = ({ setVisibleButton,props}) => {

  const [visible, setVisible] = useState(true);
  const [visibleAddNews, setVisibleAddNews] = useState(false);
  const [motivationItem, setMotivationItem] = useState(null);

  const showNews = () => {
    setVisible(false);
  };

  const onClose = () => {
    setVisibleAddNews(false);
    setVisibleButton(true);
    setVisible(true);
  };

  function showConfirm(motivationItem) {
    confirm({
      title: 'Do you want to delete these motivationItem?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        props.removeMotivationItem(motivationItem.id);
        return new Promise((resolve, reject) => {
          setTimeout(Math.random() > 0.5 ? resolve : reject, 1000);
        }).catch(() => console.log('Oops errors!'));
      },
      onCancel() {
      },
    });
  }

  return (
    visible ? (
      <div>
        {props.motivations.motivationItems ? (
          <div>

            <List
              size="large"
              bordered
              header={<h3>Motivation</h3>}
              dataSource={props.motivations.motivationItems}
              renderItem={motivationItem => (
                <div>{motivationItem.newsItems.length !== 0 || motivationItem.tag ?
                  <List.Item onClick={() => {
                    setMotivationItem(motivationItem);
                    setVisibleButton(false);
                    setVisibleAddNews(true);
                    showNews()
                  }}
                             extra={
                               <Tag style={{backgroundColor: '#65ccff'}}>{motivationItem.timeToRead} minutes to
                                 read <Icon
                                   type="clock-circle" style={{fontSize: '16px'}}/>
                               </Tag>}>
                    <Tag style={{backgroundColor: '#9ad0ff'}}>
                      <Icon type="delete"
                            style={{fontSize: '16px'}}
                            onClick={() => {
                              showConfirm(motivationItem)
                            }}/>
                    </Tag>
                    <List.Item.Meta
                      title={"NEWS"}
                      description={motivationItem.description}
                    />

                  </List.Item> :
                  <List.Item>
                    <Tag style={{backgroundColor: '#9ad0ff'}}>
                      <Icon type="delete"
                            style={{fontSize: '16px'}}
                            onClick={() => {
                              showConfirm(motivationItem)
                            }}/>
                    </Tag>
                    <List.Item.Meta
                      title={"ADVICE"}
                      description={motivationItem.description}
                    />
                  </List.Item>
                }</div>
              )}/>
          </div>
        ) : (
          (<div>
              {"NO DATA"}
            </div>
          ))}
      </div>) : (
      <div>
        <AddNewsItemModal/>
        <div> {visibleAddNews ?
          <Button type="primary" onClick={() => {
            props.showModal("AddNewsItemModal", {
              ...props, motivationItem
            })
          } }>Add news</Button> : <div></div>
        }</div>
        <News onClose={onClose} motivationItem={motivationItem} visibleAddNews={visibleAddNews}/>
      </div>)
  );
};
export default MotivationItem