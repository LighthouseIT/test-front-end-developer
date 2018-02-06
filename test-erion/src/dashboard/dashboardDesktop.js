import React from 'react';

import { Card, Grid, GridRow, GridColumn } from 'semantic-ui-react'

import './dashboard.css';
import Icon from '../utils/materialIcons.js';


export default class DashboardDesktop extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <Card id="dashboard" className="dashboard-desktop">

        <Grid>
          <GridRow>
            <GridColumn className="earnings-title" width={8} textAlign="left">
              Ganhos estimados
            </GridColumn>
            <GridColumn width={8} textAlign="right" verticalAlign="bottom">
              Código do Cliente EGRH Y45HY D2GHY 56VH
            </GridColumn>
          </GridRow>
          <GridRow>
            <GridColumn width={4} textAlign="left">
              <ul className="earnings current-day">
                <li className="label"><span>Para o dia atual</span></li>
                <li className="value color"><span>R$ {this.props.expenses.total}</span></li>
              </ul>
            </GridColumn>
            <GridColumn width={3}>
              <ul className="earnings">
                <li className="label"><span>Para o dia atual</span></li>
                <li className="value"><span>R$ {this.props.expenses.currentDay}</span></li>
              </ul>
            </GridColumn>
            <GridColumn width={3}>
              <ul className="earnings">
                <li className="label"><span>Durante o dia anterior</span></li>
                <li className="value"><span>R$ {this.props.expenses.lastDay}</span></li>
              </ul>
            </GridColumn>
            <GridColumn width={3}>
              <ul className="earnings">
                <li className="label"><span>Para o mês atual</span></li>
                <li className="value"><span>R$ {this.props.expenses.currentMonth}</span></li>
              </ul>
            </GridColumn>
            <GridColumn width={3}>
              <ul className="earnings">
                <li className="label"><span>Mês passado</span></li>
                <li className="value"><span>R$ {this.props.expenses.lastMonth}</span></li>
              </ul>
            </GridColumn>
          </GridRow>
          <GridRow className="no-space">
            <GridColumn className="earnings-title no-space" stretched={true}
              width={14} textAlign="left" verticalAlign="center">
              <button className="filter">
                <Icon className="align-middle" name="event" />
                <span>Comparação de hoje com o mesmo dia da semana passada</span>
                <Icon className="align-middle" name="keyboard_arrow_down" />
              </button>
            </GridColumn>
            <GridColumn className="no-space" width={2} verticalAlign="bottom" stretched={true}>
              <button className="my-account">
                Minhas Contas
              </button>
            </GridColumn>
          </GridRow>
        </Grid>

      </Card>
    );
  }

}