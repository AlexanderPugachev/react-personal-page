import React from 'react';
import './Contacts.css';
import ContactForm from './ContactForm';

class Contacts extends React.Component {
	submit = values => {
		console.log(values)
	}


	render() {
		return (
			<div className="contacts">
				<div className="contacts--container">
					<div className="contacts--subtitle">

					</div>
					<div className="contacts--form-div">
						<ContactForm onSubmit={this.sendingMail}/>
					</div>
					<div className="contacts--footer">

					</div>
				</div>
			</div>
		);
	}
}

export default Contacts;
