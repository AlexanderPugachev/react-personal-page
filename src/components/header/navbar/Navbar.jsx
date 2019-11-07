import React from 'react';
import './Navbar.css';
import NavbarElement from './NavbarElement';

const Navbar = () => {
	return (
		<div className="navbar">
			<NavbarElement text='Привет' href='href_hello' />
			<NavbarElement text='Проекты' href='href_works' />
			<NavbarElement text='Навыки' href='href_skills' />
			<NavbarElement text='Контакты' href='href_contacts' />
		</div>
	);
}

export default Navbar;
