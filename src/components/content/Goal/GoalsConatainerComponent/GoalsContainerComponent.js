import React, { Component } from 'react'
import { connect } from 'react-redux'
import { goalsActions } from '../../../../actions/goals.actions'
import { usersActions } from '../../../../actions/users.actions'
import { Table, Divider, Tag, Button, Pagination, notification } from 'antd';
import 'antd/dist/antd.css';
import './GoalsContainerComponent.css'
import AddGoalModal from '../../../modals/AddGoalModal';
const { Column, ColumnGroup } = Table;

class GoalsContainerComponent extends Component {       
    
    constructor(props) {
        super(props);
        this.handleAddGoal = this.handleAddGoal.bind(this);
    }

    handleAddGoal(goal) {
        debugger;
        goal.userId = "101";
        this.props.addGoal(goal);
    }  

    render() {
        const modalProps = {
            addGoal: this.handleAddGoal
        }

        if(!this.props.goals) {
            return <h4>No goals</h4>
        }

        return (
            <div className='goals-content'>
                <AddGoalModal/>
                <div className="goals">
                    <Button type="primary" onClick={() => { this.props.showModal("AddGoalModal", {...modalProps}) }}>
                        Create goal
                    </Button>
                    <div className="goals-table-wrapper">
                    <Table dataSource={this.props.goals}>
                        <Column title="Description" dataIndex="description" key="description" />                       
                        
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
    goals: state.goals.goals    
})

const mapDispatchToProps = {   
    setUserGoals: goalsActions.setUserGoals,
    showModal: usersActions.showModal,
    addGoal: goalsActions.addUserGoal
}

export default connect(mapStateToProps, mapDispatchToProps)(GoalsContainerComponent)
