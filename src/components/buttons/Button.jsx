import React from 'react';
import './Button.css';

class Button extends React.Component {

	componentDidMount() {
		const checkedBtn = document.getElementById('radio1')
		checkedBtn.setAttribute('checked', '')
	}

	render() {
		const { name, value, onClick, text, id } = this.props

		// const { Prj, PrjId } = this.props
		// let color = document.getElementById('project--back')
		// let button_color = 2
		// color.style.backgroundColor = `var(--color-${button_color})`

		return (
			<div className={'button-radio_div ' + name + ' button' + id}>
				<input
					type="radio"
					id={'radio' + value}
					name='choosing'
					value={value}
					onClick={onClick}
					/>
				<label for={'radio' + value}>{text}</label>
			</div>
		);
	}
}

export default Button;
