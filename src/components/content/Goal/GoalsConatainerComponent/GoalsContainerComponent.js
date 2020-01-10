import React, {Component} from 'react'
import {connect} from 'react-redux'
import {goalsActions} from '../../../../actions/goals.actions'
import {usersActions} from '../../../../actions/users.actions'
import {Button, Divider, Progress, Table} from 'antd';
import 'antd/dist/antd.css';

import AddGoalModal from '../../../modals/AddGoalModal';
import EditGoalModal from '../../../modals/EditGoalModal';
import moment from 'moment';


const {Column, ColumnGroup} = Table;

class GoalsContainerComponent extends Component {

  constructor(props) {
    super(props);
    this.handleAddGoal = this.handleAddGoal.bind(this);
    this.handleUpdateGoal = this.handleUpdateGoal.bind(this);
  }

  handleAddGoal(goal) {
    goal.userId = this.props.profile.id;
    this.props.addGoal(goal);
  }

  handleUpdateGoal(goal) {
    this.props.updateGoal(goal.id, goal);
  }


  render() {
    const modalProps = {
      addGoal: this.handleAddGoal,
      updateGoal: this.handleUpdateGoal
    }

    return (
      <div className='goals-content'>
        <AddGoalModal/>
        <EditGoalModal/>
        <div className="goals">
          <Button
            type="primary"
            size="small"
            className="btn"
            onClick={() => {
              this.props.showModal("AddGoalModal", {...modalProps})
            }}>
            Create goal
          </Button>
          <div className="goals-table-wrapper">
            <Table
              dataSource={this.props.goals}
              rowKey={record => record.id}
            >
              <Column title="Description" dataIndex="description" key="description"/>
              <Column
                title="Start Date"
                dataIndex="startDate"
                key="startDate"
                render={(text) => (
                  text ? moment(text).format("MMM Do YY") : null
                )}
              />
              <Column
                title="End Date"
                dataIndex="endDate"
                key="endDate"
                render={(text) => (
                  text ? moment(text).format("MMM Do YY") : null
                )}
              />
              <Column
                title="Progress"
                key="Progress"
                render={(text, record) => {
                  const progress = (5 / (record.measureTo - record.measureFrom)) * 100;
                  const test = progress.toFixed(0);
                  return <Progress percent={test} size="small"/>
                }}
              />
              <Column
                align="right"
                title="Action"
                key="action"
                render={(text, record) => (
                  <span>
                    <Button
                      type="primary"
                      size="small"
                      className="btn"
                      onClick={() => {
                        this.props.showModal("EditGoalModal", {...modalProps, record})
                      }}
                    >
                      Edit
                    </Button>
                    <Divider type="vertical"/>
                    <Button
                      type="danger"
                      size="small"
                      className="btn"
                      onClick={() => {
                        this.props.deleteGoal(record.id)
                      }}
                    >
                      Delete
                    </Button>
                  </span>
                )}
              />
            </Table>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  error: state.goals.error,
  loading: state.goals.loading,
  goals: state.goals.goals,
  profile: state.auth.profile
})

const mapDispatchToProps = {
  setUserGoals: goalsActions.setUserGoals,
  showModal: usersActions.showModal,
  addGoal: goalsActions.addUserGoal,
  updateGoal: goalsActions.updateUserGoal,
  deleteGoal: goalsActions.removeGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainerComponent)
