import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import "./Timer.css";

function Timer({ hours = 0, duration, seconds = 0 }) {

  // const duration = useSelector((store) => store.duration);

  const minutes = duration;

  const [paused, setPaused] = React.useState(false);
  const [over, setOver] = React.useState(false);
  const [time, setTime] = React.useState({
    hours: parseInt(hours),
    minutes: parseInt(minutes),
    seconds: parseInt(seconds)
  });

  const tick = () => {
    if (paused || over) return;
    if (time.hours == 0 && time.minutes == 0 && time.seconds == 0)
      setOver(true);
    else if (time.minutes == 0 && time.seconds == 0)
      setTime({
        hours: time.hours - 1,
        minutes: 59,
        seconds: 59
      });
    else if (time.seconds == 0)
      setTime({
        hours: time.hours,
        minutes: time.minutes - 1,
        seconds: 59
      });
    else
      setTime({
        hours: time.hours,
        minutes: time.minutes,
        seconds: time.seconds - 1
      });
  };

  const reset = () => {
    setTime({
      hours: parseInt(hours),
      minutes: parseInt(minutes),
      seconds: parseInt(seconds)
    });
    setPaused(false);
    setOver(false);
  };

  React.useEffect(() => {
    let timerID = setInterval(() => tick(), 1000);
    return () => clearInterval(timerID);
  });

  return (
    <div className="timer">
      <h1>{`${time.hours
        .toString()
        .padStart(2, "0")}:${time.minutes
        .toString()
        .padStart(2, "0")}:${time.seconds.toString().padStart(2, "0")}`}</h1>
      <div>{over ? <h1>Great Workout!</h1> : ""}</div>
      <div className="timerButtons">
          <Button 
            sx={{m:1}}
            variant="outlined" 
            size="large"
            color="error"
            onClick={() => setPaused(!paused)}>
            {paused ? <Button>Resume</Button> : "Pause"}
          </Button>
          <Button 
            sx={{m: 1}}
            variant="outlined" 
            size="large"
            color="success"
            onClick={() => reset()}
            >
            Restart
          </Button>
      </div> 
    </div>
  );
}

export default Timer;