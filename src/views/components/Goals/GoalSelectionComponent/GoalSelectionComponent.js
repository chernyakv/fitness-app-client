import React, {Component} from 'react';
import './GoalSelectionComponent.css'
import 'antd/dist/antd.css';
import {Button, Radio} from 'antd';
import {goalTypes} from "../../../utils/constants";

class GoalSelectionComponent extends Component {
  state = {
    goalType: '',
  };

  handleSizeChange = e => {
    this.setState({goalType: e.target.value});
  };

  handleSubmit = e => {
    const {profile} = this.props;
    this.props.setUserGoal(profile.id, this.state.goalType);
  }

  render() {
    const {goalType} = this.state;

    return (
      <div className='goal-selection-wrapper'>
        <h3>Какая у вас главная цель?</h3>
        <div className='radio-group-wrapper'>
          <Radio.Group value={goalType} onChange={this.handleSizeChange}>
            {goalTypes.map((elem) =>
              <Radio.Button
                value={elem.type}
                key={elem.type}>
                {elem.view}
              </Radio.Button>)}
          </Radio.Group>
        </div>
        <Button type="primary" onClick={this.handleSubmit}>Отправить</Button>
      </div>
    )
  }
}

export default GoalSelectionComponent