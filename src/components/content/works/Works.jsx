import React from 'react';
import './Works.css';
// containers below
import Work from '../../../containers/content/Work';

class Works extends React.Component {
// It doesn't need Redux!!!
	render() {
		return (
			<div className="works">
				<div className="works_column works_left">
					<Work id={0} src='personal-page'/>
					<Work id={2} src='react-store'/>
				</div>
				<div className="works_column works_right">
					<Work id={1} src='express-photo'/>
					<Work id={3} src='future-project'/>
				</div>
			</div>
		);
	}
}

export default Works;
