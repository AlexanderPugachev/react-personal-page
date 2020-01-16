import React from 'react';
import './Contacts.css';
import ContactForm from './ContactForm';

class Contacts extends React.Component {

	render() {
		return (
			<div className="contacts">
				<div className="contacts--container">
					<div className="contacts--subtitle">
						Возникли вопросы? Напишите
					</div>
					<ContactForm />
					<div className="contacts--footer">
						Мои контакты
					</div>
				</div>
			</div>
		);
	}
}

export default Contacts;
