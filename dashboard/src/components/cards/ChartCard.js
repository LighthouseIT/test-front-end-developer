import Chart from 'chart.js';
import React from 'react';
import styled from "styled-components";
import BaseCard from '../BaseCard';
import ButtonMenu from'../ButtonMenu'
import MenuItem from 'material-ui/MenuItem';

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
const Icon = styled.i`
    margin:15px;
    ${ props => props.block ? 'display:block !important;' : ''}
    ${ props => props.inline ? 'display:inline-block !important;' : ''}

    ${ props => props.no320 ? '@media (max-width: 320px) { display:none };' : ''}
    ${ props => props.no360 ? '@media (max-width: 360px) { display:none }; ' : ''}
    ${ props => props.no480 ? '@media (max-width: 480px) { display:none }; ' : ''}
    ${ props => props.no600 ? '@media (max-width: 600px) { display:none }; ' : ''}
    ${ props => props.on320 ? '@media (max-width: 320px) { display:initial }; display:none;' : ''}
    ${ props => props.on360 ? '@media (max-width: 360px) { display:initial }; display:none;' : ''}

    ${props => props.left ? 'margin-right: auto; margin-left: 0;' : ''}
    ${props => props.right ? 'margin-right: 0; margin-left: auto;' : ''}
    ${props => props.center ? 'margin-right: 0; margin-left: 0;' : ''}

    ${ props => props.marginLarge ? 'margin:25px;' : ''}
    ${ props => props.marginSmall ? 'margin:5px;' : ''}


`;

export default class ChartCard extends React.Component{
    constructor(props) {
        super(props);
    
        this.state = {
          chartType: 'bar',
        };
      }
    render = () =>(
        <BaseCard 
        style={{maxHeight:'75vh'}}
        titleStyle={{borderBottom:'solid lightgrey 2px', padding:'10px'}}
            cardTitle={
                <FlexBox >
                    <FlexSection >
                        <ButtonMenu>
                            <MenuItem primaryText="Colunas" onClick={(e)=>{this.setChartType(e,'bar')}} />
                            <MenuItem primaryText="Torta" onClick={(e)=>{this.setChartType(e,'pie')}} />
                            <MenuItem primaryText="Linhas" onClick={(e)=>{this.setChartType(e,'line')}} />
                            <MenuItem primaryText="Colunas Agrupadas" onClick={(e)=>{this.setChartType(e,'bar')}} />
                        </ButtonMenu>
                    </FlexSection>
                    <FlexSection right >
                        <Icon marginSmall inline on360 className="material-icons">more_horiz</Icon>
                        <Icon right marginSmall inline on360 className="material-icons">close</Icon>
                    </FlexSection>
                </FlexBox>
            }
            cardContent={
                <section >
                    <canvas id="myChart" style={{ maxHeight: '75vh' }}></canvas>
                </section>
            }
        />
    )

    setChartType = (e, tp) =>{
        e.preventDefault();
        this.setState({chartType:tp});
    }
    componentDidMount = () => {
        this.BuildChart(null, null, null);
    };

    componentDidUpdate =()=>{
    this.BuildChart(null, null, null);
    }
    BuildChart = (data, canvas, type) => {
        //TO-DO: Use canvas passed as argument.
        //TO-DO: Use data passed as argument.
        //TO-DO: Multiple types.
        var ctx = document.getElementById("myChart");
        var myChart = new Chart(ctx, {
          type: this.state.chartType,
          data: {
            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
            datasets: [{
              label: '# of Votes',
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
              ],
              borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
              ],
              borderWidth: 1
            }]
          },
          options: {
            scales: {
              yAxes: [{
                ticks: {
                  beginAtZero: true
                }
              }]
            }
          }
        });
      }
}    