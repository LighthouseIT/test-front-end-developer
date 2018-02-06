import React from 'react';
import Icon from '../utils/materialIcons.js';
import './search.css';

export default class Search extends React.Component {

  render() {
    return (
      <span id="search">
        <Icon name="search" />
      </span>
    );
  }

}