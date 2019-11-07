import React from 'react';
import './FirstLook.css';
import {Link} from 'react-scroll';

const FirstLook = () => {
	return (
		<div className="first-look">
			<div className="first-look--text_container headers-font">
				<h3 className="first-look--text_subtitle">
					Привет! Меня зовут
				</h3>
				<h1 className="first-look--text_title">
					Александр Пугачев
				</h1>
				<h1 className='first-look--text_postfix'>
					Веб-разработчик
				</h1>
			</div>
			<div className="first-look--arrow-container">
			<Link
				className='Link'
				to='href_works'
				spy={true}
				smooth="easeInOutCubic"
				duration={1000}>
				<div className='first-look--arrow-container_wrapper'>
					<div><div className="first-look--arrow arrow--down_first"></div></div>
					<div><div className="first-look--arrow arrow--down_second"></div></div>
				</div>
				</Link>
			</div>
		</div>
	);
}

export default FirstLook;
