import React from 'react';
import './Header.css';
import Navbar from './navbar/Navbar';
import {Link as RouteLink} from 'react-router-dom';

class Header extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			prevScroll: 0,
			scroll: 0
		}
	}

	componentDidMount() {
		// записывает нынешнее значение скролла в отдельный стейт и потом обновляем значение скролла.
		this.setState({
				prevScroll: this.state.scroll,
				scroll: window.pageYOffset
			},
			window.addEventListener(
				'scroll',
				() => {
					this.setState({
						prevScroll: this.state.scroll,
						scroll: window.pageYOffset})

					// первое условие: делать ли хедер зависимым от скролла
					// второе и следующие: если зависимым, то определяем поведение:
					// скролл вниз - прячем хедер, вверх - возвращаем мини версию.
					let header = document.getElementById('header')
					! this.props.scrolling
					? (header.classList.add('header_mini')) || (header.classList.remove('header_hide'))
					: this.state.scroll > this.state.prevScroll
						? this.state.scroll >= 300
							? header.classList.add('header_hide') || (header.classList.remove('header_mini'))
							: header.classList.add('header_mini')
						: this.state.scroll >= 100
							? (header.classList.add('header_mini')) ||(header.classList.remove('header_hide'))
							: header.classList.remove('header_hide', 'header_mini')
				}
			),
		)
	}

	render() {
		console.log(this.props)
		return (
			<div id='header' className="header">
				<RouteLink to='/'>
					<div className="header--my-name_container">
						<h6 className='header--my-name_text headers-font'>
							<b>Александр</b> Пугачев
						</h6>
					</div>
				</RouteLink>
				<Navbar />
			</div>
		);
	}
}

export default Header;
