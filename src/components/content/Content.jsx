import React from 'react';
import './Content.css';
import arrow_up from '../../img/arrow_up.svg';
import { Link } from 'react-scroll';

const Content = ({ className, content, title }) => {
  return (
    <div className={'content ' + className}>
      <div className="content-container">
        {
          title !== 'none' &&
          <div className="content--title-block">
            <h5 className="content--title headers-of-work-font">{title}</h5>
            <div className='arrow-up'>
              <Link
                className='Link'
                to='href_hello'
                spy={true}
                smooth="easeInOutCubic"
                duration={1000}>
                <img src={arrow_up} alt="arrow"/>
              </Link>
            </div>
          </div>
        }
        {content}
      </div>
    </div>
  );
};

export default Content;
