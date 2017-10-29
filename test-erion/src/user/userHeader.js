import React from 'react';
import { Responsive } from 'semantic-ui-react'

import './user.css';
import Goku from '../assets/goku.jpg';
import Icon from '../utils/materialIcons.js';
import Search from '../search/search.js';

export default class UserHeader extends React.Component {

  render() {
    return (
      <div id="head-user" className="clearfix">
        <img className="user-image" src={Goku} alt="user" />
        <div className="user-info clearfix">
          <div>Usuário...</div>
          <span>Gerente</span>
        </div>
        <div className="user-notifications">
          <Icon name="notifications" />
          <Icon name="chat_bubble_outline" />
          <Responsive as='span' minWidth={992}>
            <Icon name="settings" />
            <Search />
          </Responsive>
        </div>
      </div>
    );
  }

}