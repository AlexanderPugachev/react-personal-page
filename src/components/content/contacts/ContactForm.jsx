import React from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';

class ContactForm extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			result: false,
			error: false
		}
		this.sendEmail = this.sendEmail.bind(this)
	}

	render() {
		return (
			<div>
				<form className="contact-form" onSubmit={this.sendEmail}>
					<div className="grid-name">
						<input type="text" name="user_name" placeholder='Как к Вам обращаться*' required />
					</div>
					<div className="grid-email">
						<input type="email" name="user_email" placeholder='Ваш адрес электронной почты*' required />
					</div>
					<div className="grid-message">
						<textarea name="message" placeholder='Дополнительная информация' />
					</div>
					<div id='contact-form_button' className="grid-button">
						<input type="submit" value="Отправить" />
					</div>
					<div id='contact-form_result' className="contact-form_result">
						<p>Ваше сообщение отправлено, спасибо</p>
					</div>
					<div id='contact-form_error' className="contact-form_error">
						<p>	Возникла ошибка, попробуйте еще раз </p>
					</div>
				</form>
			</div>
		)
	}

	sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('contact_service', 'template_1fodUhug', e.target, 'user_8LOVz3hSMpsufKBJ1Iz4i')
			.then((result) => {
				console.log('success ', result.status, result.text);
				this.setState({ result: true, error: false })
				document.getElementById('contact-form_error').style.display = 'none'
				document.getElementById('contact-form_button').style.display = 'none'
				document.getElementById('contact-form_result').style.display = 'flex'
			}, (error) => {
				console.log('failed ', error.text);
				this.setState({ result: false, error: true })
				document.getElementById('contact-form_error').style.display = 'flex'
			});
	}
}

export default ContactForm
