import React from 'react';

import {
  Chart, LineChart, BarChart, PieChart,
  Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  Bar, Pie
} from 'recharts';
import { Dropdown } from 'semantic-ui-react';

import './chart.css';
import Icon from '../utils/materialIcons.js';


export default class Charts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartSelected: 'linha',
      zoom: 100
    }

    this.handleChartChange = this.handleChartChange.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    let chartData = [],
      propsData = nextProps.data;

    //format data for chart component
    if (propsData['days'] && this.state.chartData.length === 0) {
      for (let i = 0; i <= propsData['days'].length - 1; i++) {
        chartData.push({
          name: propsData['days'][i],
          valor: propsData['values'][i]
        });
      }
      this.setState({ chartData: chartData });
    }
  }

  handleChartChange(event, data) {
    this.setState({ chartSelected: data.value });
  }

  render() {

    const aquaBlue = "#05E5E5";
    const dropDownChartOptions = [
      { key: 0, text: 'Coluna', value: 'coluna' },
      { key: 1, text: 'Linha', value: 'linha' },
      { key: 2, text: 'Torta', value: 'torta' },
      { key: 3, text: 'Coluna Agrupada', value: 'coluna_agrupada' }
    ];
    const defaultZoom = {
      'mobile': { width: 600, height: 300, pieRadius: 200 }
    }

    let chartWidth = defaultZoom.mobile.width * this.state.zoom / 100,
      chartHeight = defaultZoom.mobile.height * this.state.zoom / 100,
      pieRadius = defaultZoom.mobile.pieRadius * this.state.zoom / 100;

    const pieChart =
      <PieChart width={chartWidth * 1.5} height={chartHeight * 1.5} >
        <Pie data={this.state.chartData} cx={200} cy={200} outerRadius={pieRadius} fill={aquaBlue} dataKey="valor" />
        <Tooltip />
      </PieChart>;

    const barChart =
      <BarChart width={chartWidth} height={chartHeight} data={this.state.chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Bar dataKey="valor" fill={aquaBlue} />
      </BarChart>;

    const lineChart =
      <LineChart width={chartWidth} height={chartHeight} data={this.state.chartData}>
        <XAxis dataKey="name" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Line type="monotone" stroke={aquaBlue} dataKey="valor" />
      </LineChart>;

    //ou faltam informações para montar este gráfico, ou estou com o errado em mente
    const groupedBarChart = barChart;

    let chartToRender;
    switch (this.state.chartSelected) {
      case 'coluna': chartToRender = barChart; break;
      case 'linha': chartToRender = lineChart; break;
      case 'torta': chartToRender = pieChart; break;
      case 'coluna_agrupada': chartToRender = groupedBarChart; break;
    }

    return (
      <div id="charts">

        <div className="separator">
          <span>Minhas Contas</span>
        </div>

        <div className="chart-options">
          <Icon name="equalizer" />

          <Dropdown
            selectOnBlur={false}
            compact
            onChange={this.handleChartChange}
            icon={<Icon name="timeline" />}
            options={dropDownChartOptions}
          />


          <Icon name="swap_vert" />
          <span className="zoom">
            <span>
              <input min="10" max="100" step="10" type="number" value={this.state.zoom}
                onChange={(e) => { this.setState({ zoom: e.target.value }) }} />%
            </span>
          </span>
          <Icon className="csv-icon" name="insert_drive_file" />
          <Icon className="close-icon" name="close" />
        </div>

        {chartToRender}

        <Icon className="save-icon" name="save" />

      </div>
    );
  }

}