import React from 'react';
import './Button.css';

class Button extends React.Component {

	componentDidMount() {
		const checkedBtn = document.getElementById('radio1')
		checkedBtn.setAttribute('checked', '')
	}

	render() {
		const { name, value, onClick, text } = this.props

		return (
			<div className={'button-radio_div ' + name}>
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
