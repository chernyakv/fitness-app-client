import React from 'react'
import 'antd/dist/antd.css';
import {Card, Icon, List, Rate} from "antd";

const News = ({onClose,  motivationItem, visibleAddNews}) => {
  return (
    <div>

      <List
        size="large"
        bordered
        header={
          <div>

            <Icon type="close-circle" style={{fontSize: '24px'}} onClick={onClose}/>
            <p align="center"> {motivationItem.description}</p>
          </div>
        }
        dataSource={motivationItem.newsItems}
        renderItem={newsItem => (

          <List.Item>
            {newsItem.itemType === "TEXT" ? (
              <List.Item.Meta
                title={newsItem.itemType}
                description={newsItem.item}
              />

            ) : (
              <List.Item.Meta
                description={<Card
                  style={{width: '50%', height: '30%', marginLeft: '10%'}}
                  cover={<img alt="example" src={newsItem.item}/>}
                />}
              />
            )}</List.Item>)
        }
      />
      <Rate allowHalf defaultValue={motivationItem.score}/>
    </div>
  );
};

export default News;