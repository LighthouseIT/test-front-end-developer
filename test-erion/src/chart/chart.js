import React from 'react';

import {
  Chart, LineChart, BarChart, PieChart,
  Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  Bar, Pie
} from 'recharts';
import { Dropdown, Responsive, Grid, GridRow, GridColumn } from 'semantic-ui-react';

import './chart.css';
import Icon from '../utils/materialIcons.js';


export default class Charts extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      chartData: [],
      chartSelected: 'linha',
      zoom: 100,
      device: null
    }

    this.handleChartChange = this.handleChartChange.bind(this);
  }

  componentWillMount() {
    let device;
    if (window.screen.width <= 576) {
      device = 'smartphone';
    } else if (window.screen.width <= 768) {
      device = 'tablet';
    } else {
      device = 'desktop';
    }
    this.setState({ device: device });
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
      'smartphone': { width: 600, height: 400, pieRadius: 150, pieCx: 190 },
      'tablet': { width: 1280, height: 720, pieRadius: 300, pieCx: '50%' }, //TODO: temp, fix
      'desktop': { width: 1280, height: 720, pieRadius: 300, pieCx: '50%' }
    }

    //controle de zoom dos gráficos
    let chartWidth = defaultZoom[this.state.device].width * this.state.zoom / 100,
      chartHeight = defaultZoom[this.state.device].height * this.state.zoom / 100,
      pieRadius = defaultZoom[this.state.device].pieRadius * this.state.zoom / 100,
      pieCx = defaultZoom[this.state.device].pieCx;

    const pieChart =
      <PieChart width={chartWidth} height={chartHeight} >
        <Pie data={this.state.chartData} cx={pieCx} outerRadius={pieRadius} fill={aquaBlue} dataKey="valor" />
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

        <Responsive as='span' maxWidth={576}>
          <div className="separator">
            <span>Minhas Contas</span>
          </div>
        </Responsive>

        <Grid>
          <GridRow className="chart-options no-space">
            <GridColumn width={2} textAlign="left">
              <Icon name="equalizer" />
            </GridColumn>

            <GridColumn width={2} textAlign="right" verticalAlign="center">
              <Responsive as='span' maxWidth={576}>
                <Dropdown
                  selectOnBlur={false}
                  compact
                  onChange={this.handleChartChange}
                  icon={<Icon name="timeline" />}
                  options={dropDownChartOptions}
                />
              </Responsive>
              <Responsive as='span' minWidth={992}>
                <Icon name="timeline" />
                <Dropdown
                  selectOnBlur={false}
                  compact
                  text="Tipo"
                  icon={<Icon name="expand_more" />}
                  onChange={this.handleChartChange}
                  options={dropDownChartOptions}
                />
              </Responsive>
            </GridColumn>

            <GridColumn width={2} textAlign="right" verticalAlign="center">
              <Icon name="swap_vert" /><label>Trocar sequência</label>
            </GridColumn>

            <GridColumn width={2} mobile={4} textAlign="left">
              <span className="zoom">
                <span>
                  <input min="10" max="200" step="10" type="number" value={this.state.zoom}
                    onChange={(e) => { this.setState({ zoom: e.target.value }) }} />%
                </span>
              </span>
            </GridColumn>

            <GridColumn width={4} mobile={3} textAlign="left">
              <Icon className="csv-icon" name="insert_drive_file" /><label>Exportar para Excel CSV</label>
            </GridColumn>

            <GridColumn width={1} textAlign="right" verticalAlign="center">
              <Icon className="close-icon" name="close" />
            </GridColumn>
          </GridRow>
        </Grid>

        {chartToRender}

        <Icon className="save-icon" name="save" />

      </div>
    );
  }

}