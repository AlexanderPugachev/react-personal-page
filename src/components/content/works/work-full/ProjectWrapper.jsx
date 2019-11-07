import React from 'react';
import './ProjectWrapper.css';
import img from './../../../../img/project-one_full.png'

const ProjectWrapper = () => {
	return (
		<div className="project">
			<div className="project--description">
				<h5 className="project--descr_name">My project</h5>
				<p className="project-descr_text">
					Данный сайт был написан мной с целью демонстрации моих навыков и инструментов, которые я использую в веб-разработке. Текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст текст.
				</p>
				<h6 className="project--descr_instruments">Инструменты:</h6>
				<ul>
					<li className="project--descr_instrument">HTML5</li>
					<li className="project--descr_instrument">CSS</li>
					<li className="project--descr_instrument">ReactJS
					<ul>
						<li>react-router</li>
						<li>react-scroll</li>
						<li>other</li>
					</ul>
					</li>
					<li className="project--descr_instrument">Redux</li>
				</ul>
			</div>
			<div className="project--image-full">
				<img src={img} alt="#"/>
			</div>
		</div>
	);
}

export default ProjectWrapper;
