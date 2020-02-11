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
  const ButtonGroup = Button.Group;

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
      ...modalProps, props
    })
  };
  const News = () => {
    props.showModal("AddNewsModal", {
      ...modalProps, props
    })
  };
  useEffect(() => {
    props.getMotivation(props.profile.id);
  }, []);
  const modalProps = {
    addMotivationItem: props.addMotivationItem
  };
  return (

    <div className='motivation-wrapper'>
      <AddNewsModal/>
      <AddAdviceModal/>
      <Button type="primary" onClick={showModal}>
        Add news or advice
      </Button>
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
      <MotivationItem motivationItems={props.motivationItems}/>

    </div>
  )
}


const mapStateToProps = (state) => ({
  addMotivationItem: state.motivations.addMotivationItem,
  motivationItems: state.motivations.motivations.motivationItems,
  profile: state.auth.profile,
  motivations: state.motivations.motivations
})

const mapDispatchToProps = {
  getMotivation: motivationActions.getMotivationByUserId,
  showModal: actions.showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Motivation)
