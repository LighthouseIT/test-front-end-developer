import React from 'react';
import { Card, Responsive } from 'semantic-ui-react'

import DashboardMobile from './dashboardMobile.js';
import DashboardDesktop from './dashboardDesktop.js';
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
        <Responsive as='span' maxWidth={576}>
          <DashboardMobile expenses={this.state.expenses} />
        </Responsive>
        <Responsive as='div' minWidth={992}>
          <DashboardDesktop expenses={this.state.expenses} />
        </Responsive>

        <Responsive as='span' maxWidth={576}>
          <Charts data={this.state.chartData} />
        </Responsive>
        <Responsive as='div' minWidth={992}>
          <Card>
            <Charts data={this.state.chartData} />
          </Card>
        </Responsive>

      </div>
    );
  }

}