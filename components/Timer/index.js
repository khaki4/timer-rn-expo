import { connect } from 'react-redux';
import Timer from './presenter';
import { actonCreators as tomatoActions } from '../../reducer';

const mapStateToProps = state => {
  const { isPlaying, elapsedTime, timeDuration } = state;
  return {
    isPlaying,
    elapsedTime,
    timeDuration
  };
}

const { startTimer, restartTimer, addSecond } = tomatoActions;

export default connect(
  mapStateToProps,
  {
    startTimer,
    restartTimer,
    addSecond,
  }
)(Timer)