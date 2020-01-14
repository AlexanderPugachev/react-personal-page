import React from 'react';
import './Content.css';

const Content = ({className, content, title}) => {
	return (
		<div className={'content ' + className} >
			<div className="content-container">
				{
					title !== 'none' &&
					  <div className="content--title-block">
							<h5 className="content--title headers-font headers-of-work-font">{title}</h5>
						</div>
				}
				{content}
			</div>
		</div>
	);
}

export default Content;
