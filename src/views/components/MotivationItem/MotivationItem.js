import React, {useState} from 'react'
import 'antd/dist/antd.css';
import {Icon, List, Modal, Tag} from 'antd';
import {NavLink} from "react-router-dom";

const {confirm} = Modal;
const MotivationItem = (props) => {

  const [visible, setVisible] = useState(true);
  const [motivationItem, setMotivationItem] = useState(null);


  const onClose = () => {
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
              size="default"
              bordered
              header={<h3>Motivation</h3>}
              dataSource={props.motivations.motivationItems}
              renderItem={motivationItem => (
                <div>{motivationItem.newsItems.length !== 0 || motivationItem.tag ?
                  <List.Item
                    extra={
                      <Tag style={{backgroundColor: '#65ccff'}}>{motivationItem.timeToRead} minutes to
                        read <Icon
                          type="clock-circle" style={{fontSize: '16px'}}/>
                      </Tag>} style={{backgroundImage: "url(" + motivationItem.image + ")"}}>
                    <Tag style={{backgroundColor: '#9ad0ff'}}>
                      <Icon type="delete"
                            style={{fontSize: '16px'}}
                            onClick={() => {
                              showConfirm(motivationItem)
                            }}/>
                    </Tag>
                    <List.Item.Meta
                      title={<NavLink to={`/motivation/${motivationItem.id}`}>News</NavLink>}
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

      </div>)
  );
};
export default MotivationItem