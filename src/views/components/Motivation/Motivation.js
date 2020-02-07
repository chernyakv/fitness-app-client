import React, {useEffect} from 'react'
import {connect} from 'react-redux'
import 'antd/dist/antd.css';
import './Motivation.css'
import {actions} from "../../../state/ducks/user";
import {motivationActions} from "../../../state/ducks/motivation";
import MotivationItem from "../MotivationItem/MotivationItem";


const Motivation = (props) => {


  useEffect(() => {
    props.getMotivation(props.profile.id);
  }, []);

  return (

    <div className='motivation-wrapper'>
      <MotivationItem motivationItems={props.motivationItems}/>

    </div>
  )
}


const mapStateToProps = (state) => ({
  motivationItems: state.motivations.motivations.motivationItems,
  profile: state.auth.profile,
  motivations: state.motivations.motivations
})

const mapDispatchToProps = {
  getMotivation: motivationActions.getMotivationByUserId,
  showModal: actions.showModal
}

export default connect(mapStateToProps, mapDispatchToProps)(Motivation)
