import React from 'react'
import 'antd/dist/antd.css';
import {Card, Icon, List, Rate} from "antd";

const News = ({onClose, newsItems}) => {
  return (
    <div>

      <List
        size="large"
        bordered
        header={
          <div>

            <Icon type="close-circle" style={{fontSize: '24px'}} onClick={onClose}/>
            <p align="center"> {newsItems.description}</p>
          </div>
        }
        dataSource={newsItems.newsItems}
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
                  cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"/>}
                />}
              />
            )}</List.Item>)
        }
      />
      <Rate allowHalf defaultValue={newsItems.score}/>
    </div>
  );
};

export default News;