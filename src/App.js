import React from 'react';
import './App.css';
import Layout from './components/layout/Layout';
import Header from './components/header/Header';
import Content from './components/content/Content';
import FirstLook from './components/content/first-look/FirstLook';
import Works from './components/content/works/Works';
import Contacts from './components/content/contacts/Contacts';
import ProjectWrapper from './components/content/works/work-full/ProjectWrapper';
import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';

const App = () => {
	const src = 'project-one'
  return (
		<Router>
			<div className="App">
				<Layout />
				<Switch>
					<Route exact path='/'>
						<Header scrolling={true}/>
						<div className="App-container">
							<Content className='href_hello' content={<FirstLook />}/>
							<Content className='href_works' content={<Works />}/>
							<Content className='href_skills' />
							<Content className='href_contacts' content={<Contacts />}/>
						</div>
					</Route>
					<Route path={`/${src}`}>
						<Header scrolling={false}/>
						<ProjectWrapper/>
					</Route>
				</Switch>
			</div>
		</Router>
  );
}

export default App;
