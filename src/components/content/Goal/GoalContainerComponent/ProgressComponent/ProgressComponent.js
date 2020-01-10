import React, {Component} from 'react'
import 'antd/dist/antd.css';
import './ProgressComponent.css'
import 'react-vis/dist/style.css';
import {VerticalBarSeries, VerticalBarSeriesCanvas, XAxis, XYPlot, YAxis} from 'react-vis';

class ProgressComponent extends Component {
  state = {
    useCanvas: true
  };

  render() {
    const myDATA1 = this.props.parameters.map((param) => {
      return {
        y: param.weight,
        x: new Date(param.date).getTime()
      }
    });

    console.log(myDATA1);

    const myDATA = [
      {id: '00036', y: 82, x: 1},
      {id: '00036', y: 82, x: 2},
      {id: '00036', y: 83, x: 3},
      {id: '00036', y: 84, x: 4},
      {id: '00036', y: 85, x: 5},
      {id: '00036', y: 86, x: 6},
      {id: '00036', y: 87, x: 7},
      {id: '00036', y: 88, x: 8},
      {id: '00036', y: 85, x: 9},
      {id: '00036', y: 84, x: 10},
      {id: '00036', y: 88, x: 11},
      {id: '00036', y: 89, x: 12},
      {id: '00036', y: 88, x: 13},
      {id: '00036', y: 86, x: 14},
      {id: '00036', y: 84, x: 15},
      {id: '00036', y: 84, x: 16},
      {id: '00036', y: 84, x: 17},
      {id: '00036', y: 85.5, x: 18},
      {id: '00036', y: 86, x: 19},
      {id: '00036', y: 87, x: 20},
      {id: '00036', y: 87.2, x: 21},
      {id: '00036', y: 84, x: 22}
    ];

    const yDomain = myDATA1.reduce(
      (res, row) => {
        return {
          max: Math.max(res.max, row.y),
          min: Math.min(res.min, row.y)
        };
      },
      {max: -Infinity, min: Infinity}
    );

    console.log(yDomain);

    const {useCanvas} = this.state;
    const BarSeries = useCanvas ? VerticalBarSeriesCanvas : VerticalBarSeries;
    return (
      <div>
        <XYPlot
          xType="time"
          width={800}
          height={550}
          yDomain={[yDomain.min, yDomain.max]}
        >
          <BarSeries className="vertical-bar-series-example" data={myDATA1} />
          <XAxis />
          <YAxis />
        </XYPlot>
      </div>
    );
  }
}

export default ProgressComponent
