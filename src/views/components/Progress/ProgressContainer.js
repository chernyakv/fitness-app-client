import React, {useEffect} from 'react'
import 'antd/dist/antd.css';
import './Progress.css'
import 'react-vis/dist/style.css';
import {connect} from "react-redux";
import {actions} from "../../../state/ducks/user";
import Progress from "./Progress";
import moment from "moment";

const ProgressContainerComponent = ({userParameters, profile, getUserParameters}) => {

  useEffect(() => {
    const startOfMonth = moment().startOf('month').format('YYYY-MM-DD');
    const endOfMonth = moment().endOf('month').format('YYYY-MM-DD');
    getUserParameters(profile.id, startOfMonth, endOfMonth);
  }, []);

  if(!userParameters) {
    return <h4>No user parameters</h4>
  }
  return <Progress parameters={userParameters}/>
};

const mapStateToProps = (state) => ({
  error: state.goals.error,
  loading: state.goals.loading,
  userParameters: state.users.userParameters,
  profile: state.auth.profile,
});

const mapDispatchToProps = {
  getUserParameters: actions.getUserParameters,
};

export default connect(mapStateToProps, mapDispatchToProps)(ProgressContainerComponent)
