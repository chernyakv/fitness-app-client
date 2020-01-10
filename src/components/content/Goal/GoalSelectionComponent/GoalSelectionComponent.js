import React, {Component} from 'react';
import './GoalSelectionComponent.css'
import 'antd/dist/antd.css';
import {Button, Radio} from 'antd';

class GoalSelectionComponent extends Component {
  state = {
    goalId: '1',
  };

  handleSizeChange = e => {
    this.setState({goalId: e.target.value});
  };

  handleSubmit = e => {
    this.props.setUserGaol("1", this.state.goalId);
    console.log(this.state.goalId);
  }

  render() {
    const {goalId} = this.state;

    return (
      <div className='goal-selection-wrapper'>
        <h3>Какая у вас главная цель?</h3>
        <div className='radio-group-wrapper'>
          <Radio.Group value={goalId} onChange={this.handleSizeChange}>
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