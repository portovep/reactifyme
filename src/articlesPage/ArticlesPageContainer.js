import { connect } from 'react-redux';
import ArticlesPage from './ArticlesPage';

const mapStateToProps = state => ({
  articles: state.articlesPage.articles
});

export default connect(mapStateToProps)(ArticlesPage);
