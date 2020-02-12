import React, {useState} from 'react'
import 'antd/dist/antd.css';
import {Icon, List, Modal, Tag} from 'antd';
import News from "../News/News";
const {confirm} = Modal;
const MotivationItem = ({removeMotivationItem,motivationItems,motivations}) => {
  const [visible, setVisible] = useState(true);
  const [newsItems, setNewsItems] = useState(null);
  const showNews = () => {
    setVisible(false);
  };
  const onClose = () => {
    setVisible(true);
  };
  function showConfirm(motivationItem) {
    confirm({
      title: 'Do you want to delete these motivationItem?',
      content: 'When clicked the OK button, this dialog will be closed after 1 second',
      onOk() {
        console.log(motivationItem)
        console.log(motivations)
        removeMotivationItem(motivations.motivationId, motivationItem.motivationItemId)
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
        {motivationItems ? (
          <div>

            <List
              size="large"
              bordered
              header={<h3>Motivation</h3>}
              dataSource={motivationItems}
              renderItem={motivationItem => (
                <div>{motivationItem.newsItems.length !== 0 ?
                  <List.Item onClick={() => {
                    setNewsItems(motivationItem);
                    showNews()
                  }}
                             extra={
                    <Tag style={{backgroundColor: 'gold'}}>{motivationItem.timeToRead} minutes to read <Icon
                      type="clock-circle" style={{fontSize: '16px'}}/>
                    </Tag>}>
                    <Tag style={{backgroundColor: 'gold'}}>
                      <Icon type="delete"
                            style={{fontSize: '16px'}}
                            onClick={() => {
                              showConfirm( motivationItem)
                            }}/>
                    </Tag>
                    <List.Item.Meta
                      title={"NEWS"}
                      description={motivationItem.description}
                    />

                  </List.Item> :
                  <List.Item>
                    <Tag style={{backgroundColor: 'gold'}}>
                      <Icon type="delete"
                            style={{fontSize: '16px'}}
                            onClick={() => {
                              showConfirm( motivationItem)
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
              {"NOOOOOOOOOOOOOOOOOOOOOODAAAAAAAAAAAAAAAAATAAAAAAAAAAAAAAAAAAAAAAAAAA"}
            </div>
          ))}
      </div>) : (
      <News onClose={onClose} newsItems={newsItems}/>)
  );
};
export default MotivationItem