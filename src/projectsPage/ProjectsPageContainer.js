import { connect } from 'react-redux';
import ProjectsPage from './ProjectsPage';

const mapStateToProps = state => ({
  projects: state.projectsPage.careerProjects
});

export default connect(mapStateToProps)(ProjectsPage);
