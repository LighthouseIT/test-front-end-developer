import React from 'react';
import {
  MDCMenu,
  MDCMenuFoundation
} from '@material/menu';

export default class MenuPage extends React.Component {
  
  mdcComponent = null;

  render() {
    return (
      <div className="mdc-menu" tabIndex="-1">
        <ul className="mdc-menu__items mdc-list" role="menu" aria-hidden="true">
          <li className="mdc-list-item" role="menuitem" tabIndex="0">
            A Menu Item
          </li>
          <li className="mdc-list-item" role="menuitem" tabIndex="-1" aria-disabled="true">
            Disabled Menu Item
          </li>
        </ul>
      </div>
    );
  };

  OnComponentDidMount (){
    this.mdcComponent = new MDCMenu(this);
  }
}