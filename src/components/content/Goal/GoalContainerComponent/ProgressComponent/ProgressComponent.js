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
