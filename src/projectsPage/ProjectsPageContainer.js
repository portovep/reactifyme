import {connect} from 'react-redux';
import ProjectsPage from './ProjectsPage';

const mapStateToProps = (state) => ({
  careerProjects: state.projects.careerProjects,
  petProjects: state.projects.petProjects
});

export default connect(mapStateToProps)(ProjectsPage);