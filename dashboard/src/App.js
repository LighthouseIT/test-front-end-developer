import React from 'react';
import styled from "styled-components";
import Header from './components/Header'
import DefaultCard from './components/cards/DefaultCard'
import ChartCard from './components/cards/ChartCard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

const ContentBox = styled.div`padding: ${1 / 12 * 100 / 2}vw ${1 / 12 * 100 / 2}vw 0 ${1 / 12 * 100 / 2}vw; height:100%;`;

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

class App extends React.Component {

  render() {
    return (
        <MuiThemeProvider className="App">

          {/* Header/AppBar */}
          <Header />

          {/* Drawer */}
          <div style={{ display: 'none', position: 'absolute', left: '-100' }}>
            <div>

            </div>
            <div>
              <ul>
                <ul className="">
                  <h>Lista de Trabalho</h>
                  <li className="">Calendário</li>
                  <li className="">Atividades</li>
                </ul>
                <ul className="">
                  <h>Ciclo de Vendas</h>
                </ul>
                <ul className="">
                  <h>Marketing</h>
                </ul>
                <ul className="">
                  <h>Criar</h>
                  <li className="">
                    <Icon className="material-icons">add_circle_outline</Icon>Tarefas</li>
                  <li className="">
                    <Icon className="material-icons">add_circle_outline</Icon>Email</li>
                  <li className="">
                    <Icon className="material-icons">add_circle_outline</Icon>Contato</li>
                  <li className="">
                    <Icon className="material-icons">add_circle_outline</Icon>Lead</li>
                  <li className="">
                    <Icon className="material-icons">add_circle_outline</Icon>Questão</li>
                </ul>
              </ul>
            </div>

          </div>

          {/* content */}
          <ContentBox className="content">

            <DefaultCard />

            <ChartCard />

          </ContentBox>
        </MuiThemeProvider>
    );
  }
}



export default App;
