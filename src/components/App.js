import React from 'react';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import axios from 'axios';
import './App.css';
// components below
import Layout from './layout/Layout';
import Content from './content/Content';
import FirstLook from './content/first-look/FirstLook';
import Works from './content/works/Works';
import Contacts from './content/contacts/Contacts';
import Header from './header/Header';
// import Skills from './content/skills/Skills';
// containers below
import LoadableProjectContainer from '../containers/content/ProjectWrapper';

class App extends React.Component {

	componentDidMount() {
		const { getWorks } = this.props;
		axios.get('projects.json')
			.then(({ data }) => { getWorks(data) }); // запрос из public
	}

	render() {
		return (
			<Router>
				<div className="App">
					<Layout />
					<Switch>
						<Route exact path='/'>
							<Header scrolling={true} />
							<div className="App-container">
								<Content className='href_hello' content={<FirstLook />} title='none' />
								<Content className='href_works' content={<Works />} title='проекты' />
								{/* <Content className='href_skills' content={<Skills />} title='навыки'/> */}
								<Content className='href_contacts' content={<Contacts />} title='контакты' />
							</div>
						</Route>
						<Route path={`/`}>
							<Header scrolling={false} />
							<LoadableProjectContainer />
						</Route>
					</Switch>
				</div>
			</Router>
		);
	}
}

export default App;
