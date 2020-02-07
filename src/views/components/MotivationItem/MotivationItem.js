import React from 'react'
import 'antd/dist/antd.css';
import {List} from 'antd';

const MotivationItem = ({motivations}) => {
    const {data} = motivations.motivationItems;

    return (
        <List
            size="large"
            bordered
            dataSource={data}
            renderItem={motivationItem => (
                <div>{motivationItem.motivationItemType === "NEWS" ?
                    <List.Item>
                        <List.Item.Meta
                            title={"NEWS"}
                            description={"motivationItem.motivationItemType.toString()"}
                        />
                    </List.Item> :
                    <List.Item>
                        <List.Item.Meta
                            title={"ADVICE"}
                            description={"motivationItem.motivationItemType.toString()"}
                        />
                    </List.Item>
                }</div>
            )}/>
    );
};
export default MotivationItem