// useTimer.js (or useTimer.jsx)

import { useState, useEffect } from 'react';

const useTimer = () => {
  const [timer, setTimer] = useState(0); // Timer value in seconds
  const [isRunning, setIsRunning] = useState(false); // Boolean to track if timer is running

  // Function to start the timer
  const startTimer = () => {
    setIsRunning(true);
  };

  // Function to stop the timer
  const stopTimer = () => {
    setIsRunning(false);
  };

  // Function to reset the timer
  const resetTimer = () => {
    setTimer(0);
    setIsRunning(false);
  };

  useEffect(() => {
    let intervalId;

    if (isRunning) {
      intervalId = setInterval(() => {
        setTimer((prevTimer) => prevTimer + 1); // Increment timer every second
      }, 1000);
    } else {
      clearInterval(intervalId);
    }

    return () => clearInterval(intervalId); // Clean up interval on component unmount or when isRunning changes
  }, [isRunning]);

  return {
    timer,
    isRunning,
    startTimer,
    stopTimer,
    resetTimer,
  };
};

export default useTimer;
