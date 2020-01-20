import React from 'react';
import './ProjectContainer.css';
import Button from '../../buttons/Button';
// images (all in one bcs time of loading will be wrapped)
import personal_page_full from '../../../img/personal-page_full.png';
import personal_page_hd from '../../../img/personal-page_hd.png';
import personal_page_mobile from '../../../img/personal-page_mobile.png';
import express_photo_full from '../../../img/express-photo_full.png';
import express_photo_hd from '../../../img/express-photo_hd.png';
import express_photo_mobile from '../../../img/express-photo_mobile.png';
import project_one_full from '../../../img/project-one_full.png';
import project_one_hd from '../../../img/project-one_hd.png';
import project_one_mobile from '../../../img/project-one_mobile.png';
import project_two_full from '../../../img/project-two_full.png';
import project_two_hd from '../../../img/project-two_hd.png';
import project_two_mobile from '../../../img/project-two_mobile.png';

// img_array = массив для выбора необходимого изображения
// render_img = необходимое изображение (через handleClick передается индекс type)
// project--instruments рендерится перебором массива instruments,
// при обнаружении вложенного массива (typeof === 'object') создается новый список,
// который также перебирается методом array.map

class ProjectContainer extends React.Component {
	constructor (props) {
		super(props)
		this.state = {
			type: 1,
			prevType: 10
		}
		this.handleClick = this.handleClick.bind(this)
		this.animationImage = this.animationImage.bind(this)
	}

	render() {
		const { Prj, PrjId } = this.props
		let img_array = [
			[personal_page_hd, personal_page_full, personal_page_mobile],
			[express_photo_hd, express_photo_full, express_photo_mobile],
			[project_one_hd, project_one_full, project_one_mobile],
			[project_two_hd, project_two_full, project_two_mobile]
		]
		const render_img = img_array[ Prj[PrjId].id ][ this.state.type ]

		return (
			<div className="project">
				<div className="project--description">
					<h5 className="project--descr_name headers-of-work-font">{Prj[PrjId].half_name_1 + ' ' + Prj[PrjId].half_name_2}</h5>
					<p className="project--descr_text">{Prj[PrjId].descr_text}</p>
					<div className="project--descr_grid">
						<div className="grid_left">
							<h6 className="project--grid_header headers-of-work-font">Инструменты:</h6>
							<ul className='project--grid_list project--instruments descr-of-work-font'>
								{Prj[PrjId].instruments.map((item, key) => {
									if (typeof item !== 'object') {
										return <li key={key}> {item} </li>
									} else {
										return <ul className='project--grid_inner-list'>
											{item.map((item, key) => <li key={key}>{item}</li>)}
											</ul>
									}
								})}
							</ul>
						</div>
						<div className="grid_right">
							<h6 className='project--grid_header headers-of-work-font'>Разрешение:</h6>
							<form className="project--grid_list project--view">
								<Button name="view_button" id={'_prj_' + PrjId} value={0} onClick={this.handleClick} text='HD'/>
								<Button name="view_button" id={'_prj_' + PrjId} value={1} onClick={this.handleClick} text='Full HD'/>
								<Button name="view_button" id={'_prj_' + PrjId} value={2} onClick={this.handleClick} text='mobile'/>
							</form>
						</div>
					</div>
				</div>
				<div id='project--image' className="project--image-full">
					<img
						src={render_img}
						alt="this is screenshot of the web-page" />
				</div>
				<div id='project--back' className="project--background"></div>
			</div>
		);
	}

	// handleClick помимо передачи индекса для массива img_array редактирует
	// список классов у img(project--image), если передается mobile

	handleClick(event) {
		this.setState({
			prevType: this.state.type,
			type: event.target.value
		})
		let img = document.getElementById('project--image')
		event.target.value !== '2'
		? (img.classList.add('img-full')) || (img.classList.remove('img-mobile'))
		: (img.classList.add('img-mobile')) || (img.classList.remove('img-full'))
		window.scrollTo(0, 0);
	}

	// animationImage добавляет скрин-блоку новый класс "img-animation",
	// а после выполнения анимации удаляет его

	animationImage() {
		let img = document.getElementById('project--image')
		this.state.type !== this.state.prevType && img.classList.add('img-animation')

		setTimeout(() => {
			this.state.type !== this.state.prevType && img.classList.remove('img-animation')
		}, 701)
	}

	componentDidMount() {
		this.animationImage()
		const { Prj, PrjId } = this.props
		let background_color = document.getElementById('project--back')
		let project_color = Prj[PrjId].color
		background_color.style.backgroundColor = `var(--color-${project_color})`
	}
	componentDidUpdate() {
		this.animationImage()
	}

}

export default ProjectContainer;
