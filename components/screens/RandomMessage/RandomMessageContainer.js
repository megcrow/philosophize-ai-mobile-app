import React from 'react';
import { connect } from 'react-redux';

import { fetchMessage } from '../../../actions';
import RandomMessageScreen from './RandomMessageScreen';

class RandomMessageContainer extends React.Component {
  loadMessage = () => {
    const { dispatch } = this.props
    dispatch(fetchMessage())
  }

  render() {
    const { isFetching, message } = this.props
    return (
      <RandomMessageScreen
      loadMessage={this.loadMessage}
      isFetching={isFetching}
      message={message}
      />
    )
  }
}

const mapStateToProps = state => {
  const { randomMessageReducer, message, isFetching } = state;
  return {
    randomMessageReducer,
    message,
    isFetching
  }
}

export default connect(mapStateToProps)(RandomMessageContainer)

