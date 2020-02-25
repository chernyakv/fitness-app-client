import React from 'react'
import 'antd/dist/antd.css';
import {Card, Icon, List, Rate} from "antd";
import {motivationItemActions} from "../../../state/ducks/motivation_item";
import {actions} from "../../../state/ducks/user";
import {connect} from "react-redux";

const News = (props) => {
  return (
    <div>
      {console.log(props)}
      {/*<List*/}
      {/*  pagination={{*/}
      {/*    onChange: page => {*/}
      {/*      console.log(page);*/}
      {/*    },*/}
      {/*    pageSize: 7,*/}
      {/*  }}*/}
      {/*  size="large"*/}
      {/*  bordered*/}
      {/*  header={*/}

      {/*    <div>*/}
      {/*      /!*<Icon type="close-circle" style={{fontSize: '24px'}} onClick={onClose}/>*!/*/}
      {/*      /!*<p align="center"> {motivationItem.description}</p>*!/*/}
      {/*    </div>*/}
      {/*  }*/}
      {/*  dataSource={motivationItem.newsItems}*/}
      {/*  renderItem={newsItem => (*/}

      {/*    <List.Item>*/}
      {/*      {newsItem.itemType === "TEXT" ? (*/}
      {/*        <List.Item.Meta*/}
      {/*          title={newsItem.itemType}*/}
      {/*          description={newsItem.item}*/}
      {/*        />*/}

      {/*      ) : (*/}
      {/*        <List.Item.Meta*/}
      {/*          description={<Card*/}
      {/*            style={{width: '50%', height: '30%', marginLeft: '10%'}}*/}
      {/*            cover={<img alt="example" src={newsItem.item}/>}*/}
      {/*          />}*/}
      {/*        />*/}
      {/*      )}</List.Item>)*/}
      {/*  }*/}
      {/*/>*/}
      {/*<Rate allowHalf defaultValue={motivationItem.score}/>*/}
    </div>
  );
};

const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  motivations: state.motivations.motivations
});

const mapDispatchToProps = {
  addNewsItem: motivationItemActions.addNewsItem,
  showModal: actions.showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(News)
