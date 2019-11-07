import React, {Component} from 'react';
import LayoutColumn from './LayoutColumn';
import './Layout.css';

class Layout extends Component {
	constructor(props) {
		super(props)
		this.state = {
			width: 0
		}
	}

	// отслеживает изменение ширины viewport и прокидывает в state
	componentDidMount() {
		this.setState(
			{width: window.innerWidth},
			window.addEventListener(
				"resize",
				({ target }) => this.setState({width: target.innerWidth})
			)
		)
	}

	// В зависимости от ширины viewport рендерится 12 или 4 колонок layout
	render() {
		let layout = []
		this.state.width >= 768
			? layout = [1,2,3,4,5,6,7,8,9,10,11,12]
			: layout = [1,2,3,4]

		return (
			<div className='layout-container'>
				{layout.map((i) => <LayoutColumn key={i} />)}

			</div>
		)
	}
}

export default Layout;
