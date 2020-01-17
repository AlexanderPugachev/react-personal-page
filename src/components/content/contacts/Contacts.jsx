import React from 'react';
import './Contacts.css';
import ContactForm from './ContactForm';

class Contacts extends React.Component {

	render() {
		return (
			<div className="contacts">

				<div className="contacts--container">
					<div className="contacts--subtitle">
						Возникли вопросы? Напишите!
					</div>
					<ContactForm />
					<div className="contacts--footer">
						<ul>
							<li>
								<div></div>
								<a href="mailto:al.pugachev96@gmail.com" target="_blank">Gmail</a>
							</li>
							<li>
								<div></div>
								<a href="https://www.freecodecamp.org/alexanderpugachev" target="_blank">FreeCodeCamp</a>
							</li>
							<li>
								<div></div>
								<a href="https://github.com/AlexanderPugachev" target="_blank">Github</a>
							</li>
						</ul>
					</div>
					<footer class="footer">
  				  <div></div>
						<p>Alexander Pugachev 2020</p>
					</footer>
				</div>
			</div>
		);
	}
}

export default Contacts;
