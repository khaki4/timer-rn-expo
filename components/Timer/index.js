import { connect } from 'react-redux';
import Timer from './presenter';

const mapStateToProps = state => {
  const { isPlaying, elapesedTimer, timeDuration } = state;
  return {
    isPlaying,
    elapesedTimer,
    timeDuration
  };
}

export default connect(
  mapStateToProps
)(Timer)