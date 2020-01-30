import React, {Component} from 'react'
import {Card, Col, Row} from 'antd';
import 'antd/dist/antd.css';
import './MayDayComponent.css'

class MayDayComponent extends Component {

  render() {
    const {exercise} = this.props;

    if (!exercise) {
      return <h4>No goal</h4>
    }


    return (
      <div className='goals-content'>
        <h4>Ближайшее</h4>

        <h4>План на сегодня</h4>
        <Row gutter={16}>
          <Col span={6}>
            <Card size={"small"} title="Калории">
              {exercise.calories}
            </Card>
          </Col>
          <Col span={6}>
            <Card size={"small"} title="Вода">
              {exercise.water}
            </Card>
          </Col>
          <Col span={6}>
            <Card size={"small"} title="Сон">
              {exercise.sleep}
            </Card>
          </Col>
          <Col span={6}>
            <Card size={"small"} title="Активность">
              {exercise.activity}
            </Card>
          </Col>
        </Row>
        <h4>Как Ваше самочувствие?</h4>
      </div>
    )
  }
}

export default MayDayComponent
