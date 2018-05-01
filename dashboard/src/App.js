import React from 'react';
import styled from "styled-components";
import Chart from 'chart.js';
import 'preact-material-components/style.css';
import MenuPage from './components/MenuPage'

const ProfilePic = styled.i`font-size:64px; background: whitesmoke;`;

const ContentBox = styled.div`padding: ${1 / 12 * 100 / 2}vw ${1 / 12 * 100 / 2}vw 0 ${1 / 12 * 100 / 2}vw; height:100%; background-color:#e8fafa;`;
const CardPermanent = styled.div`min-height: ${3 / 12 * 100 / 2}vw; margin-bottom:${1 + 1 / 12 * 100 / 2}vw; padding:10px;`;
const Card = CardPermanent.extend`min-height: ${3 / 12 * 100 / 2}vw; margin-bottom:${1 + 1 / 12 * 100 / 2}vw;`;

const Icon = styled.i`
  margin:15px;
  ${ props => props.block ? 'display:block !important;' : ''}
  ${ props => props.inline ? 'display:inline-block !important;' : ''}

  ${ props => props.no320 ? '@media (max-width: 320px) { display:none };' : ''}
  ${ props => props.no360 ? '@media (max-width: 360px) { display:none }; ' : ''}
  ${ props => props.no480 ? '@media (max-width: 480px) { display:none }; ' : ''}
  ${ props => props.no600 ? '@media (max-width: 600px) { display:none }; ' : ''}
  ${ props => props.on320 ? '@media (max-width: 320px) { display:initial }; display:none;' : ''}
  ${ props => props.on360 ? '@media (max-width: 360px) { display:initial }; display:none;' : ''}

  ${props => props.left ? 'margin-right: auto; margin-left: 0;' : ''}
  ${props => props.right ? 'margin-right: 0; margin-left: auto;' : ''}
  ${props => props.center ? 'margin-right: 0; margin-left: 0;' : ''}

  ${ props => props.marginLarge ? 'margin:25px;' : ''}
  ${ props => props.marginSmall ? 'margin:5px;' : ''}


`;
const SpanBase = styled.span`
  ${ props => props.no320 ? '@media (max-width: 320px) { display:none }; display:inherit;' : ''}
  ${ props => props.no360 ? '@media (max-width: 360px) { display:none }; display:inherit;' : ''}
  ${ props => props.no480 ? '@media (max-width: 480px) { display:none }; display:inherit;' : ''}
  ${ props => props.no600 ? '@media (max-width: 600px) { display:none }; display:inherit;' : ''}
`;
const SectionBase = styled.section`
  ${ props => props.no320 ? '@media (max-width: 320px) { display:none }; display:inherit;' : ''}
  ${ props => props.no360 ? '@media (max-width: 360px) { display:none }; display:inherit;' : ''}
  ${ props => props.no480 ? '@media (max-width: 480px) { display:none }; display:inherit;' : ''}
  ${ props => props.no600 ? '@media (max-width: 600px) { display:none }; display:inherit;' : ''}

  ${ props => props.inline ? 'display:inline-block;' : 'display:block;'}  ;

  ${props => props.left ? 'margin-right: auto; margin-left: 0;' : ''}
  ${props => props.right ? 'margin-right: 0; margin-left: auto;' : ''}
  ${props => props.center ? 'margin-right: 0; margin-left: 0;' : ''}

  
`;

const FlexBox = styled.div`
display:flex;
justify-content:space-between;
align-items: center;

`;
const FlexSection = styled.section`
display:inline-flex;
flex:1
${props => props.left ? 'justify-content: flex-start;' : ''}
${props => props.right ? 'justify-content: flex-end;;' : ''}
${props => props.center ? 'justify-content: flex-center;' : ''}
`;

const Sp1 = SpanBase.extend`font-size:75%; font-weight:bold; color:#c0cbd5;`;
const P1 = SpanBase.extend`font-size:125%; font-weight:bold; color:#959da5;`;
const Sp2 = SpanBase.extend`font-size:65%; font-weight:bold; color:#c0cbd5;`;
const P2 = SpanBase.extend`font-size:75%; font-weight:bold; color:#959da5;`;

class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="mdc-top-app-bar mdc-top-app-bar--fixed">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start mdc-theme--primary-bg">
              <Icon className="material-icons">dashboard</Icon>
              <span>DashBoard</span>
            </section>
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
              <Icon no360 className="material-icons">notifications</Icon>
              <Icon no360 className="material-icons">chat_bubble_outline</Icon>
              <Icon no360 className="material-icons">settings</Icon>
              <Icon no360 className="material-icons">search</Icon>
              <Icon on360 className="material-icons">more</Icon>

            </section>
          </div>
        </header>

        {/* Drawer */}
        <div style={{ display: 'initial', position: 'absolute', left: '-100' }}>
          <div>

          </div>
          <div>
            <ul>
              <ul className="mdc-list">
                <h>Lista de Trabalho</h>
                <li className="mdc-list-item">Calendário</li>
                <li className="mdc-list-item">Atividades</li>
              </ul>
              <ul className="mdc-list">
                <h>Ciclo de Vendas</h>
              </ul>
              <ul className="mdc-list">
                <h>Marketing</h>
              </ul>
              <ul className="mdc-list">
                <h>Criar</h>
                <li className="mdc-list-item">
                  <Icon className="material-icons">add_circle_outline</Icon>Tarefas</li>
                <li className="mdc-list-item">
                  <Icon className="material-icons">add_circle_outline</Icon>Email</li>
                <li className="mdc-list-item">
                  <Icon className="material-icons">add_circle_outline</Icon>Contato</li>
                <li className="mdc-list-item">
                  <Icon className="material-icons">add_circle_outline</Icon>Lead</li>
                <li className="mdc-list-item">
                  <Icon className="material-icons">add_circle_outline</Icon>Questão</li>
              </ul>
            </ul>
          </div>

        </div>

        {/* content */}
        <ContentBox className="content">
          <Card className="mdc-card ">
            <section className="layout-grid-in-fluid-container">
              <div className=" mdc-layout-grid " style={{ padding: '10px' }}>
                <div className="mdc-layout-grid__inner ">
                  <SectionBase className="mdc-layout-grid__cell ">
                    <div className="mdc-typography--body1"><P1>Ganhos Estimados</P1></div>
                  </SectionBase>
                  <SectionBase no360 className="mdc-layout-grid__cell ">
                    <div className="mdc-typography--body1"><P2>Código do Cliente:</P2><Sp2>XJGHK-12J1J.SS562S.45-A</Sp2></div>
                  </SectionBase>
                </div>
              </div>
              <div className=" mdc-layout-grid " style={{ padding: '10px' }}>
                <div className="mdc-layout-grid__inner ">
                  <section className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
                    <div className="mdc-typography--body1"><Sp1>Total do dia:</Sp1></div>
                    <div className="mdc-typography--body2"><P1>R$5.004,12</P1></div>
                  </section>
                  <section className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
                    <div className="mdc-typography--body1"><Sp1>Total do dia:</Sp1></div>
                    <div className="mdc-typography--body2"><P1>R$25,12</P1></div>
                  </section>
                  <section className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
                    <div className="mdc-typography--body1"><Sp1>Total do dia anterior:</Sp1></div>
                    <div className="mdc-typography--body2"><P1>R$50,12</P1></div>
                  </section>
                  <section className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
                    <div className="mdc-typography--body1"><Sp1>Total do mês:</Sp1></div>
                    <div className="mdc-typography--body2"><P1>R$204,12</P1></div>
                  </section>
                  <section className="mdc-layout-grid__cell mdc-layout-grid__cell--span-2">
                    <div className="mdc-typography--body1"><Sp1>Total do mês anterior:</Sp1></div>
                    <div className="mdc-typography--body2"><P1>R$2.504,12</P1></div>
                  </section>
                </div>

              </div>
            </section>
          </Card>

          <Card className="mdc-card ">
            <FlexBox>
              <FlexSection >
                <button className="mdc-button mdc-button--raised mdc-ripple-upgraded" style={{ padding: '1px 4px' }}><i className="material-icons" style={{ marginRight: '8px' }}>insert_chart</i> Tipo <i class="material-icons" style={{ marginLeft: '16px' }}>expand_more</i></button>
              </FlexSection>
              <FlexSection right >
                <Icon marginSmall inline on360 className="material-icons">more_horiz</Icon>
                <Icon right marginSmall inline on360 className="material-icons">close</Icon></FlexSection>
            </FlexBox>
            <MenuPage>
            </MenuPage>
            <div>
              <hr />
            </div>
            <section >
              <canvas id="myChart" style={{ maxHeight: '75vh' }}></canvas>
            </section>
          </Card>
        </ContentBox>
      </div>
    );
  }

  componentDidMount = () => {
    this.BuildChart(null, null, null);
  };

  BuildChart = (data, canvas, type) => {
    //TO-DO: Use canvas passed as argument.
    //TO-DO: Use data passed as argument.
    //TO-DO: Multiple types.
    var ctx = document.getElementById("myChart");
    var myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
}



export default App;
