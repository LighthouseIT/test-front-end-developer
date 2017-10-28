import React from 'react';

export default class MaterialIcon extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {

    let className = "material-icons ";
    className += this.props.className ? this.props.className : '';

    return (
      <i className={className}>{this.props.name}</i>
    );
  }

}