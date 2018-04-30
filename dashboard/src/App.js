import React from 'react';
import { h, Component } from 'preact';
import styled from "styled-components";
import Toolbar from 'preact-material-components/Toolbar';
import Drawer from 'preact-material-components/Drawer';
import 'preact-material-components/style.css';

const SectionSegmented = styled.section`padding-top: 0; padding-bottom: 0;`;
const SectionMain = SectionSegmented.extend`flex: 0 0 auto; background-color:#32c0cc !important;`;
const SectionSec = SectionSegmented.extend`flex: 0 0 auto; padding: 0 10px; background-color:#4fe0e3 !important;`;
const SectionTerc = SectionSegmented.extend`color:grey; padding: 0 0 0 10px;`;

const SpanBox = styled.div`padding:5px;`;
const TopSpan = styled.p`margin: 0 0 10px; font-weight:bold;`;
const BottomSpan = styled.p`margin: 0px;`;

const ProfilePic = styled.i`font-size:64px; background: whitesmoke;`;
const Icon = styled.i`margin:10px;`;
const IconSmall = styled.i`margin:10px; font-size:75%;`;

const ContentBox = styled.div`padding: ${1 / 12 * 100 / 2}vw ${1 / 12 * 100 / 2}vw 0 ${1 / 12 * 100 / 2}vw; height:100%; background-color:#e8fafa;`;
const CardPermanent = styled.div`min-height: ${3 / 12 * 100 / 2}vw; margin-bottom:${1 + 1 / 12 * 100 / 2}vw; padding:10px;`;
const Card = CardPermanent.extend`min-height: ${3 / 12 * 100 / 2}vw; margin-bottom:${1 + 1 / 12 * 100 / 2}vw;`;

const Row = styled.div`min-height: ${3 / 12 * 100 / 2/3}vw;`;
const FlexRow = Row.extend`display: flex; justify-content: space-between;`;
const FlexSectionLeft = styled.section`justify-content: flex-start; order: -1;`
const FlexSectionRight = styled.section`justify-content: flex-end; order: 1;`



const T1 = styled.span`font-size:125%; font-weight:bold;`
const T2= styled.span`font-weight:bold;`
const T3 = styled.span`font-size:75%;`


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <header className="mdc-top-app-bar mdc-top-app-bar--fixed mdc-elevation--z4">
          <div className="mdc-top-app-bar__row">
            <SectionMain className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start mdc-theme--primary-bg">
              <a href="#" className="material-icons mdc-top-app-bar__navigation-icon">menu</a>
            </SectionMain>
            <SectionSec className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start mdc-theme--secondary-bg">
              <span>DashBoard</span>
            </SectionSec>
            <SectionTerc className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start mdc-theme--background">
              <Icon className="material-icons">notifications</Icon>
              <Icon className="material-icons">chat_bubble_outline</Icon>
              <Icon className="material-icons">settings</Icon>
              <Icon className="material-icons">search</Icon>
            </SectionTerc>
            <SectionTerc className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end mdc-theme--background">
              <SpanBox>
                <TopSpan>Usuário</TopSpan>
                <BottomSpan>Gerente</BottomSpan>
              </SpanBox>
              <ProfilePic className="material-icons">face</ProfilePic>
            </SectionTerc>
          </div>
        </header>

        {/* Drawer */}
        <div style={{ display: 'none' }}>
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
                <IconSmall className="material-icons">add_circle_outline</IconSmall>Tarefas</li>
              <li className="mdc-list-item">
                <IconSmall className="material-icons">add_circle_outline</IconSmall>Email</li>
              <li className="mdc-list-item">
                <IconSmall className="material-icons">add_circle_outline</IconSmall>Contato</li>
              <li className="mdc-list-item">
                <IconSmall className="material-icons">add_circle_outline</IconSmall>Lead</li>
              <li className="mdc-list-item">
                <IconSmall className="material-icons">add_circle_outline</IconSmall>Questão</li>
            </ul>
          </ul>
        </div>

        {/* content */}
        <ContentBox className="content">
          <CardPermanent className="mdc-card">
            <FlexRow>
              <FlexSectionLeft><T1>Ganhos Estimados</T1> </FlexSectionLeft>
              <FlexSectionRight><T2>Código do Cliente:</T2><T3>XJGHK-12J1J.SS562S.45-A</T3></FlexSectionRight>            
            </FlexRow>
            <FlexRow>
              <FlexSectionLeft><SpanBox><TopSpan>Text</TopSpan><BottomSpan>Txet</BottomSpan></SpanBox></FlexSectionLeft>
              <FlexSectionLeft><SpanBox><TopSpan>Text</TopSpan><BottomSpan>Txet</BottomSpan></SpanBox></FlexSectionLeft>
              <FlexSectionLeft><SpanBox><TopSpan>Text</TopSpan><BottomSpan>Txet</BottomSpan></SpanBox></FlexSectionLeft>
              <FlexSectionLeft><SpanBox><TopSpan>Text</TopSpan><BottomSpan>Txet</BottomSpan></SpanBox></FlexSectionLeft>
              <FlexSectionLeft><SpanBox><TopSpan>Text</TopSpan><BottomSpan>Txet</BottomSpan></SpanBox></FlexSectionLeft>
            </FlexRow>
            <Row><hr/></Row>
            <FlexRow>
              <FlexSectionLeft>DropDown Here!</FlexSectionLeft>
              <FlexSectionRight>BUTTON</FlexSectionRight>            
            </FlexRow>
          </CardPermanent>
          
          <Card className="mdc-card">
            <Row>1</Row>
            <Row>2</Row>
            <Row>3</Row>
            <Row>4</Row>
            <Row>3</Row>
          </Card>
          <Card className="mdc-card">
            <Row>1</Row>
            <Row>2</Row>
            <Row>3</Row>
          </Card>
          <Card className="mdc-card">
            <Row>1</Row>
            <Row>2</Row>
            <Row>3</Row>
          </Card>
          <Card className="mdc-card">
            <Row>1</Row>
            <Row>2</Row>
            <Row>3</Row>
          </Card>
        </ContentBox>
      </div>
    );
  }
}



export default App;
