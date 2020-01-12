import React from 'react';
import './Work.css';
import { Link as RouteLink } from 'react-router-dom';

class Work extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	render() {
		const { name, src, Prj, PrjId, id} = this.props;
		const mini_name = Prj[PrjId].name
		return (
			<RouteLink to={`/` + src}>
				<div
					className={"works--work_container " + name}
					onClick={this.handleClick}>
					<h5 className="headers-of-work-font headers-font">{mini_name}</h5>
					<p className="project--descr_text main-font">d</p>
					<div id='work--back' className="work--background"></div>
				</div>
			</RouteLink>
		);
	}

	handleClick() {
		const { chooseWork, id } = this.props
		chooseWork(id)
	}

	componentDidMount() {
		const { Prj, id } = this.props
		let background_color = document.getElementById('work--back')
		let project_color = Prj[id].color
		background_color.style.backgroundColor = `var(--color-${project_color})`
	}

}

export default Work;
