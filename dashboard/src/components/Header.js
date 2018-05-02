import React from 'react';
import styled from "styled-components";
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';

const StyledFontIcon = styled(FontIcon)`
    color:white !important;
    ${ props => props.no320 ? '@media (max-width: 320px) { display:none !important; margin:0px;};' : ''}
    ${ props => props.no360 ? '@media (max-width: 360px) { display:none !important; margin:0px; }; ' : ''}
    ${ props => props.no480 ? '@media (max-width: 480px) { display:none !important; margin:0px; }; ' : ''}
    ${ props => props.no600 ? '@media (max-width: 600px) { display:none !important; margin:0px; }; ' : ''}
    ${ props => props.on320 ? '@media (min-width: 320px) {  display:none !important; }; ' : ''}
    ${ props => props.on360 ? '@media (min-width: 361px) { display:none !important;  }; ' : ''}
`;
const StyledIconButton = StyledFontIcon.withComponent(IconButton);
const flexBox = {
    display:'flex',
    justifyContent:'space-between',
    alignContent:'space-between',
    flexWarp:'wrap'
}
const iBtn = {
    color:'white',
}
export default class Header extends React.Component{
    render = () => (
    <AppBar
    title={<span style={{margin:'15px'}} >DashBoard</span>}
    onTitleClick={null}
    iconElementLeft={<StyledIconButton><StyledFontIcon className="material-icons">dashboard</StyledFontIcon></StyledIconButton>}
    iconElementRight={
        <section style={flexBox} >
            <StyledIconButton no360 iconStyle={iBtn}>
                <StyledFontIcon no360 className="material-icons" >notifications</StyledFontIcon>
            </StyledIconButton>
            <StyledIconButton no360 iconStyle={iBtn}>
                <StyledFontIcon no360 className="material-icons" >chat_bubble_outline</StyledFontIcon>
            </StyledIconButton>
            <StyledIconButton no360 iconStyle={iBtn}>
                <StyledFontIcon no360 className="material-icons" >settings</StyledFontIcon>
            </StyledIconButton>
            <StyledIconButton no360 iconStyle={iBtn}>
                <StyledFontIcon no360 className="material-icons" >search</StyledFontIcon>
            </StyledIconButton>
            <StyledIconButton on360 iconStyle={iBtn}>
                <StyledFontIcon on360 className="material-icons" >more_vert</StyledFontIcon>
            </StyledIconButton>
          </section>}
    >

        </AppBar>
    );
}