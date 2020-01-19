import React from 'react';
import './Navbar.css';
import NavbarElement from './NavbarElement';
import { Switch, Route, Link as RouteLink } from 'react-router-dom';

const Navbar = () => {

	const onClick = () => {
			let height = window.innerHeight;
			window.scrollTo(0, height);
	}

	return (
		<div className="navbar">
			<Switch>
				<Route exact path='/'>
					<NavbarElement text='Привет' href='href_hello' />
					<NavbarElement text='Проекты' href='href_works' />
					{/* <NavbarElement text='Навыки' href='href_skills' /> */}
					<NavbarElement text='Контакты' href='href_contacts' />
				</Route>
				<Route path={`/`}>
					<RouteLink to='/'>
						<div className="navbar--close" onClick={onClick}>
							<span className="close"></span>
						</div>
					</RouteLink>
				</Route>
			</Switch>
		</div>
	);
}

export default Navbar;
