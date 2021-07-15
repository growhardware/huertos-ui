import React from 'react'
import '../App.css'
import {XYPlot, XAxis, YAxis, AreaSeries} from 'react-vis';


class HistoryChart extends React.Component {
  constructor(props) {
    super(props)
    this.formatTable = this.formatTable.bind(this)
  }
  formatTable(h) {
    const key = this.props.tag
    var table = []
    for (let i = 0; i<h.length-1; i++ ){
        const status = h[i].status[key] ? 1 : 0
        table.push( { x: h[i].createdAt, y: status } )
        table.push( { x: h[i].createdAt, y: -1*(status-1) } )
    }
    return table
  }
  render() {
    const history = this.props.history
    const keyTable = this.formatTable(history)
    return (
      <div>
        <label>
          <XYPlot
            width={150}
            height={100}
            >
            <AreaSeries
              data={keyTable}
              xType={'time'}/>
            <XAxis />
            <YAxis
              hideTicks={true}/>
          </XYPlot>
        </label>
      </div>
    )
  }
}

export default HistoryChart;