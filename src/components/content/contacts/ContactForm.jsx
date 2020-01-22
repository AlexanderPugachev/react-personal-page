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
				{!this.state.result &&
					<form className="contact-form" onSubmit={this.sendEmail}>
						<div className="grid-name">
							<input type="text" name="user_name" placeholder='Как к Вам обращаться*' required/>
						</div>
						<div className="grid-email">
							<input type="email" name="user_email" placeholder='Ваш адрес электронной почты*' required/>
						</div>
						<div className="grid-message">
							<textarea name="message" placeholder='Дополнительная информация' />
						</div>
						<div className="grid-button">
							<input type="submit" value="Отправить"/>
						</div>
						{this.state.error &&
							<div className="contact-form_error">
								<p>	Возникла ошибка, попробуйте еще раз </p>
							</div>
						}
					</form>
				}
				{this.state.result &&
					<div className="contact-form_result">
						<p>Ваше сообщение отправлено, спасибо</p>
					</div>
				}
			</div>
		)
	}

	sendEmail(e) {
		e.preventDefault();

		emailjs.sendForm('contact_service', 'template_1fodUhug', e.target, 'user_8LOVz3hSMpsufKBJ1Iz4iц')
			.then((result) => {
				console.log('success ', result.status, result.text);
				this.setState({result: true, error: false})
			}, (error) => {
				console.log('failed ', error.text);
				this.setState({result: false, error: true})
			});
	}

}

export default ContactForm
