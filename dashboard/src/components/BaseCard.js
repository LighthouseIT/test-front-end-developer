import React from 'react';
import {Card, CardActions, CardHeader, CardText,CardTitle} from 'material-ui/Card';

export default class BaseCard extends React.Component
{
  render= () => (
  <Card style={{margin:'5vh 0'}}>
    {this.props.title||this.props.subtitle?
      <CardHeader 
      title={this.props.title}
      subtitle={this.props.subtitle}
      actAsExpander={false}
      showExpandableButton={false}
    />:null   
    }
    {this.props.cardTitle?
      <CardTitle style={this.props.titleStyle}>
        {this.props.cardTitle}
      </CardTitle>
    :null}
    {this.props.cardActions?
      <CardActions>
        {this.props.cardActions}
      </CardActions>
    :null}
    {this.props.cardContent?
      <CardText>
        {this.props.cardContent}
      </CardText>
    :null}
  </Card>
)}