import React from 'react';
import styled from "styled-components";
import uniqid from 'uniqid';
import Header from './components/Header'
import DefaultCard from './components/cards/DefaultCard'
import ChartCard from './components/cards/ChartCard'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
import FontIcon from 'material-ui/FontIcon';

const ContentBox = styled.div`padding: 0 ${1 / 12 * 100 / 2}vw ${1 / 12 * 100 / 2}vw ${1 / 12 * 100 / 2}vw; height:100%;`;

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content:[]
    };
  } 
  render() {
    return (
        <MuiThemeProvider className="App">

          <Header />

          <ContentBox className="content">

            {this.state.content}

            {/* TO-DO:Escolher o tipo de gráfico? */}
            <FlatButton
              labelPosition='after'
              label='Novo Gráfico'
              primary={true}
              fullWidth={true}
              icon={<FontIcon className="material-icons" >insert_chart</FontIcon>}
              onClick={(e)=>this.AddCard(e,'chart')}
            />

          </ContentBox>
        </MuiThemeProvider>
    );
  }

  componentDidMount =() =>{
    this.BuildDefaultContent();
  }

  BuildDefaultContent = () =>{
    var defCards = [];
    var defK = [uniqid.time(),uniqid.time()];
    
    defCards.push(<DefaultCard key={defK[0]} id={defK[0]} deleteFunc={this.RemoveFromCardList} />);
    defCards.push(<ChartCard key={defK[1]} id={defK[1]} deleteFunc={this.RemoveFromCardList}/>);
    this.setState({content:defCards})
  }

  RemoveFromCardList = (e, key) =>{
    e.preventDefault();
    var newContent = this.state.content.filter(item => item.key !== key);
    this.setState({content:newContent});
  }

  AddCard = (e, type) => {
    e.preventDefault();
    var uniqKey = uniqid.time();
    var newContent = this.state.content.filter(e => true);
    switch (type) {
      case 'chart':
        newContent.push(<ChartCard key={uniqKey} id={uniqKey} deleteFunc={this.RemoveFromCardList} />);
        break;
      case 'def':
        newContent.push(<DefaultCard key={uniqKey} id={uniqKey} deleteFunc={this.RemoveFromCardList} />);
        break;
      default:
        break;
    }
    this.setState({ content: newContent });
  }
}



export default App;
