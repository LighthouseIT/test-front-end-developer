import axios from 'axios';
import Chart from 'chart.js';
import React from 'react';
import styled from "styled-components";
import BaseCard from '../BaseCard';
import ButtonMenu from'../ButtonMenu'
import MenuItem from 'material-ui/MenuItem';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import uniqid from 'uniqid';

const FlexBox = styled.div`
    display:flex;
    justify-content:space-between;
    align-items: center;

`;
const FlexSection = styled.section`
    display:inline-flex;
    flex:1
    ${props => props.left ? 'justify-content: flex-start;' : ''}
    ${props => props.right ? 'justify-content: flex-end;;' : ''}
    ${props => props.center ? 'justify-content: flex-center;' : ''}
`;

const StyledFontIcon = styled(FontIcon)`
    color:black !important;
    ${ props => props.no320 ? '@media (max-width: 320px) { display:none !important; margin:0px;};' : ''}
    ${ props => props.no360 ? '@media (max-width: 360px) { display:none !important; margin:0px; }; ' : ''}
    ${ props => props.no480 ? '@media (max-width: 480px) { display:none !important; margin:0px; }; ' : ''}
    ${ props => props.no600 ? '@media (max-width: 600px) { display:none !important; margin:0px; }; ' : ''}
    ${ props => props.on320 ? '@media (min-width: 320px) {  display:none !important; }; ' : ''}
    ${ props => props.on360 ? '@media (min-width: 361px) { display:none !important;  }; ' : ''}
`;
const StyledIconButton = StyledFontIcon.withComponent(IconButton);

export default class ChartCard extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          chartType: 'bar',
          canvasId:uniqid.time(),
          chartData:{days:[], values:[]}
        };
      }
    render = () =>(
        <BaseCard 
        titleStyle={{borderBottom:'solid lightgrey 2px', padding:'10px'}}
            cardTitle={
                <FlexBox >
                    <FlexSection >
                        <ButtonMenu>
                            <MenuItem primaryText="Colunas" onClick={(e)=>{this.setChartType(e,'bar')}} />
                            <MenuItem primaryText="Torta" onClick={(e)=>{this.setChartType(e,'pie')}} />
                            <MenuItem primaryText="Linhas" onClick={(e)=>{this.setChartType(e,'line')}} />
                            <MenuItem primaryText="Doughnut" onClick={(e)=>{this.setChartType(e,'doughnut')}} />
                            <MenuItem primaryText="Polar" onClick={(e)=>{this.setChartType(e,'polarArea')}} />
                        </ButtonMenu>
                    </FlexSection>
                    <FlexSection right >
                    <StyledIconButton>
                        <StyledFontIcon className="material-icons">more_horiz</StyledFontIcon>
                    </StyledIconButton>
                    <StyledIconButton>
                        <StyledFontIcon className="material-icons" onClick={(e)=>{this.props.deleteFunc(e, this.props.id)}}>close</StyledFontIcon>
                    </StyledIconButton>
                    </FlexSection>
                </FlexBox>
            }
            //TO-DO: Arrumar o tamanho do gráfico para desktop, style funciona bem para mobile
            cardContent={
                <section style={{ maxHeight: '75vh' }} >
                    <canvas id={this.state.canvasId} ></canvas>
                </section>
            }
        />
    )

    setChartType = (e, tp) =>{
        e.preventDefault();
        this.setState({chartType:tp});
    }

    getChartData = () =>{
        axios.get('https://lighthouse-test-front-end.firebaseio.com/amount.json').then(
            response => this.setState({chartData:response.data}));
    }
    componentDidMount = () => {
        this.getChartData();
        this.BuildChart(null, null, null);
    };

    componentDidUpdate =()=>{
        this.BuildChart(null, null, null);
    }
    BuildChart = (data, canvas, type) => {
        //TO-DO: Usar argumentos?
        var chartLabel = this.state.chartData.days;
        var chartData = this.state.chartData.values;

        var ctx = document.getElementById(this.state.canvasId);
        var myChart = new Chart(ctx, {
            options:{
                responsive:true,
                onResize:(a,e)=>this.BuildChart()
            },
          type: this.state.chartType,
          data: {
            labels: chartLabel,
            datasets: [{
              label: 'Resultado',
              data: chartData,
              backgroundColor: [
                'rgba(255, 99, 132, 0.85)',
                'rgba(54, 162, 235, 0.85)',
                'rgba(255, 206, 86, 0.85)',
                'rgba(75, 192, 192, 0.85)',
                'rgba(153, 102, 255, 0.85)',
                'rgba(255, 159, 64, 0.85)',
                'rgba(132, 255, 99, 0.85)',
                'rgba(235, 54, 162, 0.85)',
                'rgba(86, 255, 206, 0.85)',
                'rgba(192, 75, 192, 0.85)',
                'rgba(255, 153, 102, 0.85)',
                'rgba(64, 255, 159, 0.85)'

              ],
              borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
                'rgba(132, 255, 99, 1)',
                'rgba(235, 54, 162, 1)',
                'rgba(86, 255, 206, 1)',
                'rgba(192, 75, 192, 1)',
                'rgba(255, 153, 102, 1)',
                'rgba(64, 255, 159, 1)'
              ],
              borderWidth: 1
            }]
          }
        });
      }
}    