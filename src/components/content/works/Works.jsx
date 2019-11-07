import React from 'react';
import './Works.css';
import Work from './Work';

const Works = () => {
	return (
		<div className="works">
			<div className="works_column works_left">
				<Work name='one' src='project-one'/>
				<Work name='three' src='project-one'/>
			</div>
			<div className="works_column works_right">
				<Work name='two' src='project-one'/>
				<Work name='four' src='project-one'/>
			</div>
		</div>
	);
}

export default Works;
