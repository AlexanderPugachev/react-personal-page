import React from 'react';
import './Work.css';
import { Link as RouteLink } from 'react-router-dom';

class Work extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	handleClick() {
		const { chooseWork, id } = this.props
		chooseWork(id)
	}

	render() {
		const { name, src } = this.props;
		return (
			<RouteLink to={`/` + src}>
				<div
					className={"works--work_container " + name}
					onClick={this.handleClick}>
					<div className="works--work_img"></div>
				</div>
			</RouteLink>
		);
	}
}

export default Work;
