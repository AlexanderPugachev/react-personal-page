import React from 'react';
import './Navbar.css';
import NavbarElement from './NavbarElement';
import { Switch, Route, Link as RouteLink } from 'react-router-dom';
// import menu_icon from '../../../img/menu-icon.png';

class Navbar extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			visible_nav: true,
			visible_menu: false
		}
		this.onClick = this.onClick.bind(this)
		this.showMenu = this.showMenu.bind(this)
	}
	onClick() {
		let height = window.innerHeight;
		window.scrollTo(0, height);
	}

	showMenu() {
		// убрать все комментарии,чтобы настроить.
		this.setState({
			visible_menu: this.state.visible_menu === false ? true : false
		})
		this.state.visible_menu ? window.blur() : window.focus();
	}

	componentDidMount() {
		let width = window.innerWidth;
		if (width > 576) {
			this.setState({
				visible_nav: true
		})} else {
			this.setState({
				visible_nav: false
			})
		}
	}

	render() {
		return (
			<div className="navbar">
				{this.state.visible_menu && <div></div>
					// <div className="navbar--visible-menu">
					// 	<img className='close' src={menu_icon} alt='open menu button' onClick={this.showMenu} />
					// 	<NavbarElement text='Привет' href='href_hello' onClick={this.showMenu} />
					// 	<NavbarElement text='Проекты' href='href_works' onClick={this.showMenu} />
					// 	{/* <NavbarElement text='Навыки' href='href_skills' onClick={this.showMenu} /> */}
					// 	<NavbarElement text='Контакты' href='href_contacts' onClick={this.showMenu} />
					// </div>
				}
				<Switch>
					{this.state.visible_nav &&
						<Route exact path='/'>
							<NavbarElement text='Привет' href='href_hello' />
							<NavbarElement text='Проекты' href='href_works' />
							{/* <NavbarElement text='Навыки' href='href_skills' /> */}
							<NavbarElement text='Контакты' href='href_contacts' />
						</Route>
					}
					{!this.state.visible_nav &&
						<Route exact path='/'>
							{/* <div className="navbar--open-button navbar--close">
								<img className='close' src={menu_icon} alt='open menu button' onClick={this.showMenu} />
							</div> */}
						</Route>
					}
					<Route path={`/`}>
						<RouteLink to='/'>
							<div className="navbar--close" onClick={this.onClick}>
								<span className="close"></span>
							</div>
						</RouteLink>
					</Route>
				</Switch>
			</div>
		);
	}
}

export default Navbar;
