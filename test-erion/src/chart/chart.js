import React from 'react';

import {
  Chart, LineChart, BarChart, PieChart,
  Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  Bar, Pie
} from 'recharts';

import './chart.css';
import Icon from '../utils/materialIcons.js';


export default class Charts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      chartData: []
    }
  }

  componentWillReceiveProps(nextProps) {
    let chartData = [],
      propsData = nextProps.data;

    //format data for chart component
    if (propsData['days'] && this.state.chartData.length === 0) {
      for (let i = 0; i <= propsData['days'].length - 1; i++) {
        chartData.push({
          name: propsData['days'][i],
          valor: propsData['values'][i],
          value: propsData['values'][i]
        });
      }
      this.setState({ chartData: chartData });
    }
  }

  render() {

    const aquaBlue = "#05E5E5";

    return (
      <div id="charts">
        <LineChart width={600} height={300} data={this.state.chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Line type="monotone" stroke={aquaBlue} dataKey="valor" />
        </LineChart>

        <BarChart width={600} height={300} data={this.state.chartData}>
          <XAxis dataKey="name" />
          <YAxis />
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip />
          <Bar dataKey="valor" fill={aquaBlue} />
        </BarChart>

        <PieChart width={600} height={300} >
          <Pie data={this.state.chartData} cx={200} cy={200} outerRadius={200} fill={aquaBlue} />
          <Tooltip />
        </PieChart>
      </div>
    );
  }

}