import React, {useEffect} from 'react'
import {Card, Col, Row} from 'antd';
import 'antd/dist/antd.css';
import './MayDay.css'
import {connect} from "react-redux";
import {exerciseActions} from "../../../state/ducks/exercise/actions";

const MayDay = ({profile, exercise, getExerciseForToday}) => {

  useEffect(() => {
    getExerciseForToday(profile.id);
  }, []);

  if (!exercise) {
    return <h4>No exercise</h4>
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
};


const mapStateToProps = (state) => ({
  profile: state.auth.profile,
  exercise: state.exercises.todayExercise,
});

const mapDispatchToProps = {
  getExerciseForToday: exerciseActions.getExerciseForToday,
};

export default connect(mapStateToProps, mapDispatchToProps)(MayDay)
