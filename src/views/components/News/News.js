import React, {useEffect} from 'react'
import 'antd/dist/antd.css';
import {Button, Card, List, Rate} from "antd";
import {motivationItemActions} from "../../../state/ducks/motivation_item";
import {actions} from "../../../state/ducks/user";
import {connect} from "react-redux";
import AddNewsItemModal from "../MotivationItem/AddMotivationItemModal/AddNewsItemModal/AddNewsItemModal";

const News = (props) => {
  const {motivationItem} = props;
  useEffect(() => {

    props.getMotivationItem(props.match.params.id);
    console.log(props)
  }, []);
  const modalProps = {
    addNewsItem: props.addNewsItem
  };
  return (
    <div>
      {console.log(motivationItem)}
      <AddNewsItemModal/>
      <List
        footer={
          <Button onClick={() => {
            props.showModal("AddNewsItemModal", {
              ...modalProps, motivationItem
            });
          }} style={{backgroundColor: '#9ad0ff', fontSize: '16px'}}>Add news
          </Button>
        }
        pagination={

          {
            onChange: page => {
              console.log(page);
            },
            pageSize: 7,
          }}
        size="large"
        bordered
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

const mapStateToProps = (state) => ({
  motivationItem: state.motivationItem.motivationItem,
  motivations: state.motivations.motivations
});

const mapDispatchToProps = {

  getMotivationItem: motivationItemActions.getMotivationItem,
  addNewsItem: motivationItemActions.addNewsItem,
  showModal: actions.showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(News)
