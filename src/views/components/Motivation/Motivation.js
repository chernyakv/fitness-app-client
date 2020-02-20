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


const Motivation = (props) => {
  const [visible, setVisible] = useState(false);
  const [visibleButton, setVisibleButton] = useState(false);

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
    props.profile.roles[0].name === "ADMIN" ? setVisibleButton(true) : setVisibleButton(false);
  }, []);
  const modalProps = {
    addMotivationItem: props.addMotivationItem,
    updateMotivationItem: props.updateMotivationItem,
    showModal: props.showModal
  };
  return (

    <div className='motivation-wrapper'>
      <AddNewsModal/>
      <AddAdviceModal/>
      <div>{visibleButton ?
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
                      motivations={motivations} setVisibleButton={setVisibleButton}/>

    </div>
  )
};


const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  motivations: state.motivations.motivations
});

const mapDispatchToProps = {
  addMotivationItem: motivationActions.addMotivationItem,
  updateMotivationItem: motivationActions.updateMotivationItem,
  getMotivation: motivationActions.getMotivationByUserId,
  removeMotivationItem: motivationActions.removeMotivationItem,
  showModal: actions.showModal
};

export default connect(mapStateToProps, mapDispatchToProps)(Motivation)
