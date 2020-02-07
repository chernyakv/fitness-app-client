import React from 'react'
import 'antd/dist/antd.css';
import {List} from 'antd';

const MotivationItem = ({motivationItems}) => {

  return (
    <div>
      {motivationItems? (

        <List
          size="large"
          bordered
          dataSource={motivationItems}
          renderItem={motivationItem => (
            <div>{motivationItem.newsItems.length!==0?
              <List.Item>
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
      ) : (
        (<div>
            {"NOOOOOOOOOOOOOOOOOOOOOODAAAAAAAAAAAAAAAAATAAAAAAAAAAAAAAAAAAAAAAAAAA"}
          </div>
        ))}
    </div>);
};
export default MotivationItem