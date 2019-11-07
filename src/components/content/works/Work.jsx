import React from 'react';
import './Work.css';
import {
	Link as RouteLink } from 'react-router-dom';

const Work = ({name, src}) => {
	return (
		<RouteLink to={`/${src}`}>
			<div className={"works--work_container " + name}>
				<div
					className="works--work_img"></div>
			</div>
		</RouteLink>
	);
}

export default Work;
