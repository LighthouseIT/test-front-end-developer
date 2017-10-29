import React from 'react';

import { CarouselProvider, Slider, Slide, DotGroup } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import './dashboard.css';
import Icon from '../utils/materialIcons.js';


export default class DashboardMobile extends React.Component {

  constructor(props) {
    super(props)
  }

  render() {

    return (
      <div id="dashboard">

        <button className="filter">
          <Icon name="event" />
          <span>Comparação de hoje com...</span>
          <Icon className="align-middle" name="keyboard_arrow_down" />
        </button>

        <h1>Ganhos estimados</h1>

        <CarouselProvider
          naturalSlideWidth={100}
          naturalSlideHeight={50}
          totalSlides={3}
        >
          <Slider>
            <Slide index={0}>
              <ul className="earnings">
                <li className="label"><span>Para o dia atual</span></li>
                <li className="value color"><span>R$ {this.props.expenses.total}</span></li>
                <li className="label"><span>Para o dia atual</span></li>
                <li className="value"><span>R$ {this.props.expenses.currentDay}</span></li>
              </ul>
            </Slide>
            <Slide index={1}>
              <ul className="earnings">
                <li className="label"><span>Durante o dia anterior</span></li>
                <li className="value"><span>R$ {this.props.expenses.lastDay}</span></li>
                <li className="label"><span>Para o mês atual</span></li>
                <li className="value"><span>R$ {this.props.expenses.currentMonth}</span></li>
              </ul>
            </Slide>
            <Slide index={2}>
              <ul className="earnings">
                <li className="label"><span>Mês passado</span></li>
                <li className="value"><span>R$ {this.props.expenses.lastMonth}</span></li>
              </ul>
            </Slide>
          </Slider>

          <DotGroup />

        </CarouselProvider>

      </div>
    );
  }

}