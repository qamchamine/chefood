import React, { useEffect, useState } from 'react';
import '../../css/Timer.css'

function Timer() {
  const [days, setDays] = useState('00');
  const [hours, setHours] = useState('00');
  const [minutes, setMinutes] = useState('00');
  const [seconds, setSeconds] = useState('00');

  useEffect(() => {
    function makeTimer() {
      const endTime = new Date("29 jun 2023 9:56:00 GMT+01:00");
      const endTimeInSeconds = Date.parse(endTime) / 1000;

      const now = new Date();
      const nowInSeconds = Date.parse(now) / 1000;

      const timeLeft = endTimeInSeconds - nowInSeconds;

      const calculatedDays = Math.floor(timeLeft / 86400);
      const calculatedHours = Math.floor((timeLeft - calculatedDays * 86400) / 3600);
      const calculatedMinutes = Math.floor((timeLeft - calculatedDays * 86400 - calculatedHours * 3600) / 60);
      const calculatedSeconds = Math.floor(timeLeft - calculatedDays * 86400 - calculatedHours * 3600 - calculatedMinutes * 60);

      const formattedHours = calculatedHours < 10 ? `0${calculatedHours}` : calculatedHours.toString();
      const formattedMinutes = calculatedMinutes < 10 ? `0${calculatedMinutes}` : calculatedMinutes.toString();
      const formattedSeconds = calculatedSeconds < 10 ? `0${calculatedSeconds}` : calculatedSeconds.toString();

      setDays(calculatedDays.toString());
      setHours(formattedHours);
      setMinutes(formattedMinutes);
      setSeconds(formattedSeconds);
    }

    const timerInterval = setInterval(makeTimer, 100);

    return () => {
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <div className='timer'>
      <div id="days" className='timerD' >{days}<span className='Stime'>Days</span></div>
      <div id="hours"  className='timerD'>{hours}<span className='Stime'>Hours</span></div>
      <div id="minutes" className='timerD' >{minutes}<span className='Stime'>Minutes</span></div>
      <div id="seconds" className='timerD' >{seconds}<span className='Stime'>Seconds</span></div>
    </div>
  );
}

export default Timer;