import React from 'react';

import DashboardMobile from './dashboardMobile.js';
import Charts from '../chart/chart.js';

export default class DashboardPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      expenses: [],
      chartData: []
    }
  }

  componentDidMount() {
    let self = this;
    fetch('https://lighthouse-test-front-end.firebaseio.com/estimatedExpenses.json')
      .then(res => res.json())
      .then(exp => {
        self.setState({ expenses: exp });
      });

    fetch('https://lighthouse-test-front-end.firebaseio.com/amount.json')
      .then(res => res.json())
      .then(chartData => {
        self.setState({ chartData: chartData });
      });
  }

  render() {
    return (
      <div id="dashboard-page">
        <DashboardMobile expenses={this.state.expenses} />
        <Charts data={this.state.chartData} />
      </div>
    );
  }

}