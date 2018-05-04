import axios from 'axios';
import React from 'react';
import styled from "styled-components";
import BaseCard from '../BaseCard'
const hideConfig = styled.div`
    ${ props => props.no320 ? '@media (max-width: 320px) { display:none }; display:inherit;' : ''}
    ${ props => props.no360 ? '@media (max-width: 360px) { display:none }; display:inherit;' : ''}
    ${ props => props.no480 ? '@media (max-width: 480px) { display:none }; display:inherit;' : ''}
    ${ props => props.no600 ? '@media (max-width: 600px) { display:none }; display:inherit;' : ''}
`
const SectionBase = hideConfig.withComponent('section').extend`
    ${ props => props.inline ? 'display:inline-block;' : 'display:block;'}  ;
    ${props => props.left ? 'margin-right: auto; margin-left: 0;' : ''}
    ${props => props.right ? 'margin-right: 0; margin-left: auto;' : ''}
    ${props => props.center ? 'margin-right: 0; margin-left: 0;' : ''}
`;
const SpanBase = hideConfig.withComponent('span');

const Sp1 = SpanBase.extend`font-size:75%; font-weight:bold; color:#c0cbd5;`;
const P1 = SpanBase.extend`font-size:125%; font-weight:bold; color:#959da5;`;
const Sp2 = SpanBase.extend`font-size:65%; font-weight:bold; color:#c0cbd5;`;
const P2 = SpanBase.extend`font-size:75%; font-weight:bold; color:#959da5;`;


export default class DefaultCard extends React.Component{

    constructor(props) {
        super(props);
    
        this.state = {
            currentDay:null,
            currentMonth:null,
            lastDay:null,
            lastMonth:null,
            total:null
        };
      }
    
    render=() =>{
        //TO-DO:Puxar código do cliente a partir da API?
        var title=(
            <div>
                <SectionBase >
                    <div ><P1>Ganhos Estimados</P1></div>
                </SectionBase>
                <SectionBase no360 >
                    <div ><P2>Código do Cliente:</P2><Sp2>XJGHK-12J1J.SS562S.45-A</Sp2></div>
                </SectionBase>
            </div>
        )

        //TO-DO:Componentes Material-UI?
        return (<BaseCard title={title} subtitle={null}>
                <div style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
                    <section >
                        <div ><Sp1>Total:</Sp1></div>
                        <div ><P1>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.state.total)}</P1></div>
                    </section>
                    <section >
                        <div ><Sp1>Total do dia:</Sp1></div>
                        <div ><P1>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.state.currentDay)}</P1></div>
                    </section>
                    <section >
                        <div ><Sp1>Total do dia anterior:</Sp1></div>
                        <div ><P1>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.state.lastDay)}</P1></div>
                    </section>
                    <section >
                        <div ><Sp1>Total do mês:</Sp1></div>
                        <div ><P1>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.state.currentMonth)}</P1></div>
                    </section>
                    <section >
                        <div ><Sp1>Total do mês anterior:</Sp1></div>
                        <div ><P1>{new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(this.state.lastMonth)}</P1></div>
                    </section>
                </div>
        </BaseCard>
        )
    }

    componentDidMount = () =>{
        axios.get("https://lighthouse-test-front-end.firebaseio.com/estimatedExpenses.json")
        .then( chartData => {this.setState({
                currentDay:chartData.data.currentDay,
                currentMonth:chartData.data.currentMonth,
                lastDay:chartData.data.lastDay,
                lastMonth:chartData.data.lastMonth,
                total:chartData.data.total
            });
            }
        );
    }
}