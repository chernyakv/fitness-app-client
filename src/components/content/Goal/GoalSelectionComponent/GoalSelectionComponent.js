import React, {Component} from 'react';
import './GoalSelectionComponent.css'
import 'antd/dist/antd.css';
import {Button, Radio} from 'antd';

class GoalSelectionComponent extends Component {
  state = {
    goalType: '',
  };

  handleSizeChange = e => {
    this.setState({goalType: e.target.value});
  };

  handleSubmit = e => {
    const {profile} = this.props;
    this.props.setUserGaol(profile.id, this.state.goalType);
  }

  render() {
    const {goalType} = this.state;

    return (
      <div className='goal-selection-wrapper'>
        <h3>Какая у вас главная цель?</h3>
        <div className='radio-group-wrapper'>
          <Radio.Group value={goalType} onChange={this.handleSizeChange}>
            <Radio.Button value="GAIN">Набрать вес</Radio.Button>
            <Radio.Button value="HOLD">Держать вес</Radio.Button>
            <Radio.Button value="LOSE">Сбросить вес</Radio.Button>
          </Radio.Group>
        </div>
        <Button type="primary" onClick={this.handleSubmit}>Отправить</Button>
      </div>
    )
  }
}

export default GoalSelectionComponent