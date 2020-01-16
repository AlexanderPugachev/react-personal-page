import React from 'react';
import './ContactForm.css';
import emailjs from 'emailjs-com';

const ContactForm = () => {

	const sendEmail = (e) => {
		e.preventDefault();

    emailjs.sendForm('contact_service', 'template_1fodUhug', e.target, 'user_8LOVz3hSMpsufKBJ1Iz4i')
      .then((result) => {
          console.log('success ', result.status, result.text);
      }, (error) => {
          console.log('failed ', error.text);
      });
	}

	return (
		<form className="contact-form" onSubmit={sendEmail}>
			<div className="grid-name">
				<input type="text" name="user_name" placeholder='Как к Вам обращаться*'/>
			</div>
			<div className="grid-email">
				<input type="email" name="user_email" placeholder='Ваш адрес электронной почты*'/>
			</div>
			<div className="grid-message">
				<textarea name="message" placeholder='Дополнительная информация' />
			</div>
			<div className="grid-button">
				<input type="submit" value="Send" />
			</div>
		</form>
	)


}

export default ContactForm
