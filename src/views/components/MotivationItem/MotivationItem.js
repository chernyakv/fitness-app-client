import React, {useState} from 'react'
import 'antd/dist/antd.css';
import {Icon, List, Tag} from 'antd';
import News from "../News/News";

const MotivationItem = ({motivationItems}) => {
  const [visible, setVisible] = useState(true);
  const [newsItems, setNewsItems] = useState(null);
  const showNews = () => {
    setVisible(false);
  };
  const onClose = () => {
    setVisible(true);
  };
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
                  }} extra={
                    <Tag style={{backgroundColor: 'gold'}}>{motivationItem.timeToRead} minutes to read <Icon
                      type="clock-circle" style={{fontSize: '16px'}}/>
                    </Tag>}>

                    <List.Item.Meta
                      title={"NEWS"}
                      description={motivationItem.description}
                    />

                  </List.Item> :
                  <List.Item>
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