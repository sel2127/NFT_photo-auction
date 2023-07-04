import React, { useEffect, useState } from 'react'
import '../styles/CountDown.css'
import { getRemainingTimeUntilMsTimestamp } from './CountDownTimerUtils'

const defaultRemainingTime = {
    seconds: '00',
    minutes: '00',
    hours: '00',
    days: '00',
}


const CountDown = ({countdownTimestampMs}) =>  {
    const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

        useEffect(() => {
            const intervalId = setInterval(() => {
                updateRemainingTime(countdownTimestampMs)
            }, 1000);
            return () => clearInterval(intervalId);
        }, [countdownTimestampMs]);

    function updateRemainingTime(count) {// useEffect - for updating the time each second
        setRemainingTime(getRemainingTimeUntilMsTimestamp(count));
    }


    return(
        <div className='countDown'>
            <span>{remainingTime.days}</span>
            <span>Days</span>
            <span className='two-numbers'>{remainingTime.hours}</span>
            <span>Hours</span>
            <span className='two-numbers'>{remainingTime.minutes}</span>
            <span>Minutes</span>
            <span className='two-numbers'>{remainingTime.seconds}</span>
            <span>Seconds</span>
        </div>
    );
}

export default CountDown
