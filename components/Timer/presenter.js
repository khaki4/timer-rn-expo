import React, { Component } from 'react';
import { View, Text, StyleSheet, StatusBar }from 'react-native';
import Button from '../Button';

const formatTime = (time) => {
  const minutes = Math.floor(time / 60);
  time -= minutes * 60;

  const seconds = parseInt(time % 60, 10);

  return `${minutes < 10 ? `0${minutes}` : minutes}:${seconds < 10
    ? `0${seconds}`
    : seconds}`;
}

class Timer extends Component {
  componentWillReceiveProps(nextProps) {
    const currentProps = this.props;
    console.log(nextProps)
    if (!currentProps.isPlaying && nextProps.isPlaying) {
      // start the interval
      this.timerInterval = setInterval(() => {
        requestAnimationFrame(currentProps.addSecond)
      }, 1000);
    } else if (currentProps.isPlaying && !nextProps.isPlaying) {
      // stop the interval
      clearInterval(this.timerInterval);
    }
  }
  timerInterval = null;
  render() {
    const {
      isPlaying,
      elapsedTime,
      timeDuration,
      startTimer,
      restartTimer,
      addSecond,
    } = this.props;
    return(
      <View style={styles.container}>
        <StatusBar barStyle={"light-content"} />
        <View style={styles.upper}>
          <Text style={styles.time}>{ formatTime(timeDuration - elapsedTime) }</Text>
        </View>
        <View style={styles.lower}>
          {!isPlaying && <Button iconName="play-circle" onPress={startTimer} />}
          {isPlaying && <Button iconName="stop-circle" onPress={restartTimer} />}
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ce0b24"
  },
  upper: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center"
  },
  lower: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  time: {
    color: "white",
    fontSize: 120,
    fontWeight: "100"
  }
});

export default Timer;