import React from 'react';
import './Contacts.css';
import ContactForm from './ContactForm';

class Contacts extends React.Component {

  render () {
    return (
      <div className="contacts">

        <div className="contacts--container">
          <div className="contacts--subtitle">
            Возникли вопросы? Напишите!
          </div>
          <ContactForm/>
          <div className="contacts--footer">
            <ul>
              <li>
                <a href="mailto:al.pugachev96@gmail.com" target="_blank" rel="noopener noreferrer">Gmail</a>
              </li>
              <li>
                <a href="https://www.freecodecamp.org/alexanderpugachev" target="_blank"
                   rel="noopener noreferrer">FreeCodeCamp</a>
              </li>
              <li>
                <a href="https://github.com/AlexanderPugachev" target="_blank" rel="noopener noreferrer">Github</a>
              </li>
            </ul>
          </div>
          <footer className="footer">
            <div/>
            <p>Alexander Pugachev 2020</p>
          </footer>
        </div>
      </div>
    );
  }
}

export default Contacts;
