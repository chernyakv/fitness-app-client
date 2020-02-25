import React, {useEffect, useState} from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import './Motivation.css'
import {actions} from "../../../state/ducks/user";
import {motivationActions} from "../../../state/ducks/motivation";
import MotivationItem from "../MotivationItem/MotivationItem";
import AddNewsModal from "../MotivationItem/AddMotivationItemModal/AddNewsModal";
import AddAdviceModal from "../MotivationItem/AddMotivationItemModal/AddAdviceModal";
import {Button, Modal} from "antd";
import {motivationItemActions} from "../../../state/ducks/motivation_item";
import {BrowserRouter, Redirect, Route, Router, Switch} from 'react-router-dom'
import News from "../News/News";
import {history} from "../../../helpers/History";
import { withRouter } from "react-router";


const Motivation = (props) => {
  const [visible, setVisible] = useState(false);


  const ButtonGroup = Button.Group;
  const {motivations} = props;

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const Advice = () => {
    props.showModal("AddAdviceModal", {
      ...modalProps, motivations
    })
  };
  const News = () => {
    props.showModal("AddNewsModal", {
      ...modalProps, motivations
    })
  };

  useEffect(() => {
    props.getMotivation(props.profile.id);
  }, []);
  const modalProps = {
    addMotivationItem: props.addMotivationItem,
    updateMotivationNewsItem: props.updateMotivationNewsItem,
    showModal: props.showModal
  };
  return (

    <div className='motivation-wrapper'>
      <AddNewsModal/>
      <AddAdviceModal/>
      <div>{props.profile.roles[0].name === "ADMIN" ?
        <Button type="primary" onClick={showModal}>
          Add news or advice
        </Button> : <div></div>
      }</div>
      <Modal
        title="Add motivation news or advice"
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <ButtonGroup align="center">
          <Button onClick={Advice}>Advice</Button>
          <Button onClick={News}>News</Button>
        </ButtonGroup>

      </Modal>
      <MotivationItem props={props}
                      motivations={motivations} />

    </div>
  )
};


const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  motivations: state.motivations.motivations,
  motivationItem: state.motivationItem.motivationItem
});

const mapDispatchToProps = {
  getMotivationItem: motivationItemActions.getMotivationItem,
  addMotivationItem: motivationActions.addMotivationItem,
  addNewsItem: motivationItemActions.addNewsItem,
  getMotivation: motivationActions.getMotivationByUserId,
  removeMotivationItem: motivationActions.removeMotivationItem,
  showModal: actions.showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Motivation)
