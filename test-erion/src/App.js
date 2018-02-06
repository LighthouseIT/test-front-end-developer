import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { Sidebar, Segment, Button, Menu, Image, Icon, Header, Responsive } from 'semantic-ui-react'

import MaterialIcon from './utils/materialIcons.js';
import UserHeader from './user/userHeader.js';
import Search from './search/search.js';
import DashboardPage from './dashboard/dashboardPage.js';
import UnderDevelopment from './underDevelopment.js';

class App extends Component {

  state = { visible: false }
  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {

    const { visible } = this.state

    return (
      <BrowserRouter>
        <div className="App">
          <Sidebar.Pushable as={Segment}>

            <Responsive as='span' maxWidth={768}>

              <Sidebar as={Menu} animation='push' width='wide' visible={visible} icon='labeled' vertical inverted>

                <div className="menu-header clearfix">
                  <span>Menu</span>
                  <Button onClick={this.toggleVisibility}>
                    <MaterialIcon name="close" />
                  </Button>
                </div>

                <UserHeader />

                <Menu.Item name='home'><Link to="/">Home</Link></Menu.Item>
                <Menu.Item name='todo-list'>Lista de Trabalho</Menu.Item>
                <Menu.Item className="inner" name='calendar'><Link to="/under-development">Calendário</Link></Menu.Item>
                <Menu.Item className="inner" name='activities'><Link to="/under-development">Atividades</Link></Menu.Item>
                <Menu.Item name='sales'><Link to="/under-development">Ciclo de Vendas</Link></Menu.Item>
                <Menu.Item name='marketing'><Link to="/under-development">Marketing</Link></Menu.Item>
                <Menu.Item name='create'>Criar</Menu.Item>
                <Menu.Item className="inner" name='task'><Link to="/under-development">Tarefa</Link></Menu.Item>
                <Menu.Item className="inner" name='email'><Link to="/under-development">Email</Link></Menu.Item>
                <Menu.Item className="inner" name='contact'><Link to="/under-development">Contato</Link></Menu.Item>
                <Menu.Item className="inner" name='lead'><Link to="/under-development">Lead</Link></Menu.Item>
                <Menu.Item className="inner" name='question'><Link to="/under-development">Questão</Link></Menu.Item>

              </Sidebar>
              <Sidebar.Pusher>
                <Segment basic>
                  <Header as='h3'>
                    <Button onClick={this.toggleVisibility}>
                      <MaterialIcon name="menu" />
                    </Button>
                    <span className="title">Dashboard</span>

                    <Responsive as='span' maxWidth={576}>
                      <Search />
                    </Responsive>
                  </Header>

                  <div id="App-content">
                    <Route exact path="/" component={DashboardPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/under-development" component={UnderDevelopment} />
                  </div>
                </Segment>
              </Sidebar.Pusher>
            </Responsive>


            <Responsive as='span' minWidth={992}>

              <Sidebar.Pusher>
                <Segment basic>
                  <Header as='h3'>
                    <Button onClick={this.toggleVisibility}>
                      <MaterialIcon name="menu" />
                    </Button>
                    <span className="title">Dashboard</span>
                  </Header>

                  <UserHeader />

                  <Sidebar as={Menu} animation='push' width='wide' visible={visible} icon='labeled' vertical inverted>
                    <Menu.Item name='home'><Link to="/">Home</Link></Menu.Item>
                    <Menu.Item name='todo-list'>Lista de Trabalho</Menu.Item>
                    <Menu.Item className="inner" name='calendar'><Link to="/under-development">Calendário</Link></Menu.Item>
                    <Menu.Item className="inner" name='activities'><Link to="/under-development">Atividades</Link></Menu.Item>
                    <Menu.Item name='sales'><Link to="/under-development">Ciclo de Vendas</Link></Menu.Item>
                    <Menu.Item name='marketing'><Link to="/under-development">Marketing</Link></Menu.Item>
                    <Menu.Item name='create'>Criar</Menu.Item>
                    <Menu.Item className="inner" name='task'><Link to="/under-development">Tarefa</Link></Menu.Item>
                    <Menu.Item className="inner" name='email'><Link to="/under-development">Email</Link></Menu.Item>
                    <Menu.Item className="inner" name='contact'><Link to="/under-development">Contato</Link></Menu.Item>
                    <Menu.Item className="inner" name='lead'><Link to="/under-development">Lead</Link></Menu.Item>
                    <Menu.Item className="inner" name='question'><Link to="/under-development">Questão</Link></Menu.Item>
                  </Sidebar>
                  <div id="App-content">
                    <Route exact path="/" component={DashboardPage} />
                    <Route path="/dashboard" component={DashboardPage} />
                    <Route path="/under-development" component={UnderDevelopment} />
                  </div>
                </Segment>
              </Sidebar.Pusher>
            </Responsive>


          </Sidebar.Pushable>

        </div>
      </BrowserRouter >
    );
  }
}

export default App;
