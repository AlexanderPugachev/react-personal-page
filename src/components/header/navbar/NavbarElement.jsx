import React from 'react';
import './NavbarElement.css';
import { Link } from 'react-scroll';

const NavbarElement = ({ text, href }) => {
  return (
    <div className="navbar--element">
      {/* Прикрутить анимацию к activeClass */}
      <Link
        className='Link'
        activeClass='active'
        to={href}
        spy={true}
        smooth='easeInOutQuart'
        duration={1000}>
        <div className='navbar--element_flex'>
          <p className='navbar--element_text main-font'>{text}</p>
          <div className='navbar--element_line'/>
        </div>
      </Link>
    </div>
  );
};

export default NavbarElement;
