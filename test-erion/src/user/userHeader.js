import React from 'react';
import './user.css';
import Goku from '../assets/goku.jpg';
import Icon from '../utils/materialIcons.js';

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
        </div>
      </div>
    );
  }

}