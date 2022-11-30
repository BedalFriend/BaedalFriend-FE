import React, { useEffect, useState } from 'react';
import * as TimerST from './TimerStyle';

function Timer({ limit }) {
  const timeLimit = parseInt(limit);
  const [minutes, setMinutes] = useState(parseInt(timeLimit / 60));
  const [seconds, setSeconds] = useState(parseInt(timeLimit % 60));
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    const countdown = setInterval(() => {
      if (seconds > 0) setSeconds(seconds - 1);
      if (seconds === 0) {
        if (minutes === 0) {
          clearInterval(countdown);
          setIsDone(true);
        } else {
          setMinutes(minutes - 1);
          setSeconds(59);
        }
      }
    }, 1000);
    return () => clearInterval(countdown);
  }, [minutes, seconds]);

  const InTimeText = () => {
    return (
      <TimerST.Text>
        {minutes < 10 ? `0${minutes}` : minutes}:
        {seconds < 10 ? `0${seconds}` : seconds}
      </TimerST.Text>
    );
  };

  const OutTimeText = () => {
    return <TimerST.Text>종료</TimerST.Text>;
  };

  return (
    <TimerST.Box>
      {limit === '0' ? (
        <OutTimeText />
      ) : isDone ? (
        <OutTimeText />
      ) : (
        <InTimeText />
      )}
    </TimerST.Box>
  );
}

export default Timer;
