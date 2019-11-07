import React from 'react';
import './Content.css';

const Content = ({className, content}) => {
	return (
		<div className={'content ' + className} >
			<div className="content-container">
				{content}
			</div>
		</div>
	);
}

export default Content;
