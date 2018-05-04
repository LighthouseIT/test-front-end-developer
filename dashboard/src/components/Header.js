import React from 'react';
import styled from "styled-components";
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import FontIcon from 'material-ui/FontIcon';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import Popover from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import {List, ListItem} from 'material-ui/List';
import uniqid from 'uniqid';

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
    constructor(props) {
        super(props);
        this.state = {
            drawerOpen: false,
            moreOpen:false
        };
        
      }
    render = () => (
    <AppBar
    title={<span style={{margin:'15px'}} >DashBoard</span>}
    onTitleClick={this.drawerHandleToggle}
    onLeftIconButtonClick={this.drawerHandleToggle}
    iconElementLeft={<StyledIconButton><StyledFontIcon className="material-icons">dashboard</StyledFontIcon></StyledIconButton>}
    //TO-DO:Supress warning de event-handler/property para no/on360
    iconElementRight={
        <section style={flexBox} >
            <StyledIconButton no360 iconStyle={iBtn} tooltip="Sem notificações" tooltipPosition="bottom-right">
                <StyledFontIcon no360 className="material-icons" >notifications</StyledFontIcon>
            </StyledIconButton>
            <StyledIconButton no360 iconStyle={iBtn} tooltip="Nenhuma mensagem" tooltipPosition="bottom-right">
                <StyledFontIcon no360 className="material-icons" >chat_bubble_outline</StyledFontIcon>
            </StyledIconButton>
            <StyledIconButton no360 iconStyle={iBtn}>
                <StyledFontIcon no360 className="material-icons" >settings</StyledFontIcon>
            </StyledIconButton>
            <StyledIconButton no360 iconStyle={iBtn}>
                <StyledFontIcon no360 className="material-icons" >search</StyledFontIcon>
            </StyledIconButton>
            <StyledIconButton on360 iconStyle={iBtn} onClick={this.moreHandleClick}>
                <StyledFontIcon on360 className="material-icons" >more_vert</StyledFontIcon>
                <Popover
                    open={this.state.moreOpen}
                    anchorEl={this.state.anchorEl}
                    anchorOrigin={{ horizontal: 'left', vertical: 'bottom' }}
                    targetOrigin={{ horizontal: 'left', vertical: 'top' }}
                    onRequestClose={this.moreHandleRequestClose}
                    >
                    <Menu>
                        <MenuItem primaryText="Notificações"/>
                        <MenuItem primaryText="Chat"/>
                        <MenuItem primaryText="Opções"/>
                        <MenuItem primaryText="Buscar"/>
                    </Menu>
                </Popover>
            </StyledIconButton>
        </section>}
        >
            <Drawer
            docked={false}
            width={200}
            open={this.state.drawerOpen}
            onRequestChange={(drawerOpen) => this.setState({drawerOpen})}
            >
            <List>
                <ListItem nestedItems={[
                    <ListItem key={uniqid.time()} onClick={this.drawerHandleClose}>Calendário</ListItem>,
                    <ListItem key={uniqid.time()} onClick={this.drawerHandleClose}>Atividades</ListItem>]}
                >Lista de Trabalho</ListItem>
            </List>
            <List>
                <ListItem onClick={this.drawerHandleClose}>Ciclo de Vendas</ListItem>
                <ListItem onClick={this.drawerHandleClose}>Marketing</ListItem>
            </List>
            <List>
                <ListItem nestedItems = {[
                    <ListItem key={uniqid.time()} onClick={this.drawerHandleClose} leftIcon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}>Tarefas</ListItem>,
                    <ListItem key={uniqid.time()} onClick={this.drawerHandleClose} leftIcon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}>Email</ListItem>,
                    <ListItem key={uniqid.time()} onClick={this.drawerHandleClose} leftIcon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}>Contato</ListItem>,
                    <ListItem key={uniqid.time()} onClick={this.drawerHandleClose} leftIcon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}>Lead</ListItem>,
                    <ListItem key={uniqid.time()} onClick={this.drawerHandleClose} leftIcon={<FontIcon className="material-icons">add_circle_outline</FontIcon>}>Questão</ListItem> ]}
                >Criar</ListItem>
            </List>
            </Drawer>
        </AppBar>
    );

    drawerHandleToggle = () => this.setState({drawerOpen: !this.state.drawerOpen});
    
    drawerHandleClose = () => this.setState({drawerOpen: false});

    moreHandleClick = (event) => {
        event.preventDefault();
        this.setState({moreOpen: true, anchorEl: event.currentTarget});
    };

    moreHandleRequestClose = () => {
        this.setState({moreOpen: false});
    };
}