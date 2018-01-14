import { connect } from 'react-redux';
import ExperimentsPage from './ExperimentsPage';

const mapStateToProps = state => ({
  experiments: state.experimentsPage.experiments
});

export default connect(mapStateToProps)(ExperimentsPage);
