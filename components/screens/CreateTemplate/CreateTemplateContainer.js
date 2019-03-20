import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CreateTemplateScreen from './CreateTemplateScreen'
import * as actions from 'actions';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateTemplateScreen)

