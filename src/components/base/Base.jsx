import React, {Component} from 'react';
import LayoutColumn from './LayoutColumn';
import './Base.css';

class Base extends Component {
	constructor(props) {
		super(props)
		this.state = {
			width: 0
		}
	}

	componentDidMount() {
		this.setState(
			{width: window.innerWidth},
			window.addEventListener(
				"resize",
				({ target }) => this.setState({width: target.innerWidth})
			)
		)
	}

	render() {
		let layout = []
		this.state.width >= 768
			? layout = [1,2,3,4,5,6,7,8,9,10,11,12]
			: layout = [1,2,3,4]

		return (
			<div className='base-block'>
				{layout.map((obj, i) => <LayoutColumn obj={obj} key={i} />)}

			</div>
		)
	}
}

export default Base;

// for(let i = 0; i < 3; i++) (<LayoutColumn />)
