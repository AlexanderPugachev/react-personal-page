import React from 'react';
import {Link as RouteLink} from 'react-router-dom';
import throttle from 'lodash/throttle'
import './Header.css';

import Navbar from './navbar/Navbar';

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			scrollValue: 0,
			prevScrollValue: 0
		}
		this.Listener = this.Listener.bind(this);
		this.trottledListener = throttle(this.Listener, 500);
	}

	componentDidMount() {
		window.addEventListener('scroll', this.trottledListener)
	}

	render() {
		return (
			<div id='header' className="header">
				<RouteLink to='/'>
					<div className="header--my-name_container">
						<h6 className='header--my-name_text'>
							<b>Александр</b> Пугачев
						</h6>
					</div>
				</RouteLink>
				<Navbar />
			</div>
		);
	}

	Listener() {
		this.setState({
			prevScrollValue: this.state.scrollValue,
			scrollValue: window.pageYOffset
		})
		// первое условие: делать ли хедер зависимым от скролла
		// второе и следующие: если зависимым, то определяем поведение:
		// скролл вниз - прячем хедер, вверх - возвращаем мини версию.
		const { scrolling } = this.props
		const header = document.getElementById('header')
		! scrolling
		? (header.classList.add('header_mini')) || (header.classList.remove('header_hide'))
		: this.state.scrollValue > this.state.prevScrollValue
			? this.state.scrollValue >= 300
				? header.classList.add('header_hide') || (header.classList.remove('header_mini'))
				: header.classList.add('header_mini')
			: this.state.scrollValue >= 100
				? (header.classList.add('header_mini')) || (header.classList.remove('header_hide'))
				: header.classList.remove('header_hide', 'header_mini')
	}
}

export default Header;
