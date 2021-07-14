import React from 'react'
import '../App.css'
import {XYPlot, XAxis, YAxis, HorizontalGridLines, LineSeries} from 'react-vis';


class HistoryChart extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const history = this.props.history
    const key = this.props.tag
    const keyTable = history.map( e => {
      return { x: e.createdAt,
        y: e.status[key] ? 1 : 0 }
      });
    return (
      <div>
        <label>
          <XYPlot
            width={150}
            height={150}>
            <HorizontalGridLines />
            <LineSeries
              data={keyTable}/>
            <XAxis />
            <YAxis />
          </XYPlot>
          <label >
            {/* JSON.stringify(keyTable) */}
          </label>
        </label>
      </div>
    )
  }
}

export default HistoryChart;