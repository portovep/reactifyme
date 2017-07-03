import {connect} from 'react-redux';
import ProjectsPage from './ProjectsPage';

const mapStateToProps = (state) => ({
  projects: state.projects
});

export default connect(mapStateToProps)(ProjectsPage);