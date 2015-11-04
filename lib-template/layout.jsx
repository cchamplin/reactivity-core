import React from 'react'
import { AppBar, LeftNav, IconButton, Avatar, MenuItem as MenuItemOld } from 'material-ui'
import { MessageNav, Nav, NavMenuItem, NavBlock } from 'reactivity'
import Radium from 'radium'
import NavigationClose from 'material-ui/lib/svg-icons/navigation/close'
import Menu from 'material-ui/lib/svg-icons/navigation/menu'
import MenuItem from 'material-ui/lib/menus/menu-item'
import IconMenu from 'material-ui/lib/menus/icon-menu'
import MoreVertIcon from 'material-ui/lib/svg-icons/navigation/more-vert';
import Message from 'material-ui/lib/svg-icons/communication/message';

let menuItems = [
    { route: '/', text: 'Dashboard' },
    { route: '/chartjs', text: 'Chart.js' },
    { route: '/forms', text: 'Forms' },
	{ type: MenuItemOld.Types.SUBHEADER, text: 'Pages' },
	{ route: '/logins', text: 'Logins' }
  ];

class Layout extends React.Component {
	constructor() {
		super();
		this.styles = {
			appBar: {
				position: 'fixed',
				top: '0'
			},
			navBar: {
				marginTop: '65px'
			},
			workZone: {
				default: {
			    	marginTop: '88px',
    				marginLeft: '300px',
					marginRight: '35px'
				},
				wide: {
					marginLeft: '20px'
				}
			},
			rightBlock: {
				avatarWrapper: {
					display: 'inline-block',
					verticalAlign: 'top',
					paddingTop: '5px',
					paddingRight: '12px'
				},
				iconMenu: {
					verticalAlign: 'top'
				},
				icon: {
					fill: '#FFFFFF'
				}
			}
		};
		this._toggleNav = this._toggleNav.bind(this);
		this._changeLocation = this._changeLocation.bind(this);
		this._currentNavIndex = this._currentNavIndex.bind(this);
		this._toggleMessageNav = this._toggleMessageNav.bind(this);
		this.state = { menuOpen: true };
	}

	render() {
		return (
		<div>
			<AppBar ref='appBar' 
				title='Reactivity' 
				onLeftIconButtonTouchTap={this._toggleNav} 
				iconElementLeft={<IconButton onTouchTap={this._toggleNav}>{this.state.menuOpen ? <NavigationClose /> : <Menu />}</IconButton>} 
				iconElementRight={
						<div>
							<div style={this.styles.rightBlock.avatarWrapper}>
								<Avatar src='lib-template/content/avatar.jpg' />
							</div>
							<IconButton onTouchTap={this._toggleMessageNav}> <Message style={this.styles.rightBlock.icon}  /></IconButton>
							<IconMenu style={this.styles.rightBlock.iconMenu} iconButtonElement={
								<IconButton > <MoreVertIcon style={this.styles.rightBlock.icon}  /></IconButton>
								}>
								<MenuItem primaryText="Settings" />
								<MenuItem primaryText="Sign out" />
							</IconMenu>
						</div>
					}
				style={this.styles.appBar}
				/>
			<Nav ref='nav'
				docked={true}
				style={this.styles.navBar}>
				<NavMenuItem route='/'>Dashboard</NavMenuItem>
				<NavBlock text='Charts'>
					<NavMenuItem route='/chartjs'>Chart.js</NavMenuItem>
				</NavBlock>
				<NavMenuItem route='/forms'>Forms</NavMenuItem>
				<NavMenuItem route='/logins'>Login</NavMenuItem>
			</Nav>
			<MessageNav 
				ref={'messageNav'}
				openRight={true} 
				menuItems={[]} 
				style={this.styles.navBar} />
			<div style={Object.assign({}, this.styles.workZone.default, !this.state.menuOpen && this.styles.workZone.wide)}>{this.props.children}</div>
		</div>);
	}
	
	componentDidMount() {
		//this.refs.appBar.onLeftIconButtonTouchTap(() => this.refs.leftNav.toggle());
	}
	
	_toggleNav() {
		this.refs.nav.toggle();
		this.setState({menuOpen: !this.state.menuOpen});
		window.dispatchEvent(new Event('resize'));
	}
	
	_changeLocation(e, i, item) {
		this.props.history.replaceState({}, item.route)
	}
	
	_currentNavIndex() {
		let currentPath = this.props.location.pathname;
		return menuItems.findIndex((item) => currentPath === item.route);
	}
	
	_toggleMessageNav() {
		this.refs.messageNav.toggle();
	}
	
	static childContextTypes = {
    	location: React.PropTypes.object,
		history: React.PropTypes.object
 	}
  
  	getChildContext() {
    	return {
			location: this.props.location,
			history: this.props.history
		};
  	}
}

Layout = Radium(Layout);

export default Layout