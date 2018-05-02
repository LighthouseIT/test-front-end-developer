import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';

export default class ButtonMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };
  }

  handleClick = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  render() {
    return (
      <div>
        <FlatButton onClick={this.handleClick} >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <span className="material-icons" style={{ marginRight: '8px' }}>insert_chart</span>
            <span>Tipo</span>
            <span className="material-icons" style={{ marginLeft: '16px' }}>expand_more</span>
          </div>
        </FlatButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
          targetOrigin={{ horizontal: 'left', vertical: 'top' }}
          onRequestClose={this.handleRequestClose}
        >
          <Menu>
            {this.props.children}

          </Menu>
        </Popover>
      </div>
    );
  }
}