import React from 'react';

export default class MaterialIcon extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <i className="material-icons">{this.props.name}</i>
    );
  }

}