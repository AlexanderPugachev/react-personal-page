import React from 'react';
import './Work.css';
import { Link as RouteLink } from 'react-router-dom';
// images (all in one bcs time of loading will be wrapped)
import mini_one from '../../../img/project-one_mini.png';
import mini_two from '../../../img/project-one_mini.png';
import mini_three from '../../../img/project-one_mini.png';
import mini_four from '../../../img/project-one_mini.png';

class Work extends React.Component {
	constructor(props) {
		super(props)
		this.handleClick = this.handleClick.bind(this)
	}

	render() {

		const { src, Prj, id} = this.props;
		// const mini_name = Prj[id].name
		// const mini_desc = Prj[id].mini_descr_text

		let img_array = [ mini_one, mini_two, mini_three, mini_four ]
		const render_img = img_array[id]

		return (
			<RouteLink to={`/` + src}>
				<div
					className={"works--work_container"}
					onClick={this.handleClick}>
					<label className="work--text_block">
						<h5 className="headers-of-work-font headers-font">Персональная <br/> страница</h5>
						<p className="descr-of-work-font main-font">HTML, CSS, React, Redux</p>
					</label>
					<div className="work--wrapped_background">
						<div className='work--wrapped_background_div'></div>
					</div>
					<img
						className="work--background"
						src={render_img}
						alt="this is screenshot of the web-page" />
				</div>
			</RouteLink>
		);
	}

	handleClick() {
		const { chooseWork, id } = this.props
		chooseWork(id)
	}

	componentDidMount() {
		// const { Prj, id } = this.props
		let background_clr = document.getElementsByClassName('work--wrapped_background')
		let background_clr_div = document.getElementsByClassName('work--wrapped_background_div')
		let work_text_clr = document.getElementsByClassName('work--text_block')
		// let project_color = Prj[id].color
		for (let item of background_clr) { item.style.backgroundColor = `var(--color-1)`	}
		for (let item of background_clr_div) { item.style.borderColor = `var(--color-1)`	}
		for (let item of work_text_clr) { item.style.color = `var(--color-1)`	}
	}

}

export default Work;
