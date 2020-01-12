import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../store/action';
import ProjectContainer from '../../components/content/works/ProjectContainer';


const mapStateToProps = ({ works }) => ({
	PrjId: works.chosenWorkId,
	Prj: works.worksList
})

const mapDispatchToProps = dispatch => ({
	...bindActionCreators(actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);
