import React, { useState, useEffect, useCallback } from "react";

import {
  TimerContainer,
  Segment1,
  Segment2,
  Segment3,
  Segment4,
  CircularProgress,
  Time,
  Label,
} from "./styles";

const Timer = () => {
  const initialTimerValue = 300;
  const [currentTime, setCurrentTime] = useState(initialTimerValue);
  const [timerId, setTimerId] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [timerOver, setTimerOver] = useState(false);
  const [completed, setCompleted] = useState(0);

  const stopTimer = useCallback(() => {
    setIsRunning(false);
    clearInterval(timerId);
  }, [setIsRunning, timerId]);

  const playPause = () => {
    if (isRunning) {
      stopTimer();
    } else {
      startTimer();
    }
  };

  useEffect(() => {
    setCompleted(((initialTimerValue - currentTime) / initialTimerValue) * 100);
    if (currentTime <= 0) {
      setTimerOver(true);
      stopTimer();
    }
  }, [currentTime, stopTimer]);

  const decrementTime = () => {
    setCurrentTime((prevTime) => (prevTime >= 0.05 ? prevTime - 0.05 : 0));
  };

  const startTimer = () => {
    setIsRunning(true);
    const timer = setInterval(() => decrementTime(), 50);
    setTimerId(timer);
  };

  const resetTimer = () => {
    setCurrentTime(initialTimerValue);
    setIsRunning(false);
    setTimerOver(false);
  };

  const formatTime = (time) => {
    let min = Math.floor(time / 60);
    let sec = Math.floor(time - min * 60);
    if (sec < 10) {
      sec = "0" + sec;
    }
    return min + ":" + sec;
  };

  return (
    <TimerContainer>
      <CircularProgress onClick={timerOver ? resetTimer : playPause}>
        <Time timerOver={timerOver}>{formatTime(currentTime)}</Time>
        <Label>{timerOver ? "Reset" : isRunning ? "Pause" : "Start"}</Label>
      </CircularProgress>
      <Segment1 completed={completed} />
      <Segment2 completed={completed} />
      <Segment3 completed={completed} />
      <Segment4 completed={completed} />
    </TimerContainer>
  );
};

export default Timer;
