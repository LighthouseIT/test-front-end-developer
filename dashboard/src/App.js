import React, { Component } from 'react';
import {h, Component} from 'preact';
import Toolbar from 'preact-material-components/Toolbar';
import 'preact-material-components/Toolbar/style.css';
import './App.css';

class App extends Component {
  
  render() {
    
    return (
      <div className="App">
        <header className="mdc-top-app-bar mdc-top-app-bar--fixed">
          <div className="mdc-top-app-bar__row">
            <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
              <a href="#" className="material-icons mdc-top-app-bar__navigation-icon">menu</a>
              <i className="material-icons">notifications</i>
              <i className="material-icons">chat_bubble_outline</i>
              <i className="material-icons">settings</i>
              <i className="material-icons">search</i>
            </section>
          </div>
        </header>
        <div className=".mdc-drawer--temporary">

        </div>
        <div className="content">
        </div>

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}



export default App;
