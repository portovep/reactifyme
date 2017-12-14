import {connect} from 'react-redux';
import ProjectsPage from '../projectsPage/ProjectsPage';

const mapStateToProps = (state) => ({
  projects: state.experimentsPage.experiments
});

export default connect(mapStateToProps)(ProjectsPage);