import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageFromTemplateScreen from'./MessageFromTemplateScreen'
import * as actions from 'actions';

const mapStateToProps = (state) => {
  return state
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageFromTemplateScreen)

