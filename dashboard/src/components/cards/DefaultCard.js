import React from 'react';
import styled from "styled-components";
import BaseCard from '../BaseCard'
const SectionBase = styled.section`
${ props => props.no320 ? '@media (max-width: 320px) { display:none }; display:inherit;' : ''}
${ props => props.no360 ? '@media (max-width: 360px) { display:none }; display:inherit;' : ''}
${ props => props.no480 ? '@media (max-width: 480px) { display:none }; display:inherit;' : ''}
${ props => props.no600 ? '@media (max-width: 600px) { display:none }; display:inherit;' : ''}

${ props => props.inline ? 'display:inline-block;' : 'display:block;'}  ;

${props => props.left ? 'margin-right: auto; margin-left: 0;' : ''}
${props => props.right ? 'margin-right: 0; margin-left: auto;' : ''}
${props => props.center ? 'margin-right: 0; margin-left: 0;' : ''}


`;
const SpanBase = styled.span`
${ props => props.no320 ? '@media (max-width: 320px) { display:none }; display:inherit;' : ''}
${ props => props.no360 ? '@media (max-width: 360px) { display:none }; display:inherit;' : ''}
${ props => props.no480 ? '@media (max-width: 480px) { display:none }; display:inherit;' : ''}
${ props => props.no600 ? '@media (max-width: 600px) { display:none }; display:inherit;' : ''}
`;

const Sp1 = SpanBase.extend`font-size:75%; font-weight:bold; color:#c0cbd5;`;
const P1 = SpanBase.extend`font-size:125%; font-weight:bold; color:#959da5;`;
const Sp2 = SpanBase.extend`font-size:65%; font-weight:bold; color:#c0cbd5;`;
const P2 = SpanBase.extend`font-size:75%; font-weight:bold; color:#959da5;`;


export default class DefaultCard extends React.Component{
    title=(
    <div>
        <SectionBase className="">
            <div className=""><P1>Ganhos Estimados</P1></div>
        </SectionBase>
        <SectionBase no360 className="">
            <div className=""><P2>Código do Cliente:</P2><Sp2>XJGHK-12J1J.SS562S.45-A</Sp2></div>
        </SectionBase>
    </div>
  )
  content = (
    <div className=" " >
        <div className=" "style={{ display:'flex', justifyContent:'space-between', flexWrap:'wrap'}}>
            <section className="">
                <div className=""><Sp1>Total do dia:</Sp1></div>
                <div className=""><P1>R$5.004,12</P1></div>
            </section>
            <section className="">
                <div className=""><Sp1>Total do dia:</Sp1></div>
                <div className=""><P1>R$25,12</P1></div>
            </section>
            <section className="">
                <div className=""><Sp1>Total do dia anterior:</Sp1></div>
                <div className=""><P1>R$50,12</P1></div>
            </section>
            <section className="">
                <div className=""><Sp1>Total do mês:</Sp1></div>
                <div className=""><P1>R$204,12</P1></div>
            </section>
            <section className="">
                <div className=""><Sp1>Total do mês anterior:</Sp1></div>
                <div className=""><P1>R$2.504,12</P1></div>
            </section>
        </div>
    </div>
  )
        
    
    render=() =>(
        <BaseCard 
        title={this.title} 
        subtitle={null}
        cardContent={this.content}
        />
    )
}