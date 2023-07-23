import { useState } from 'react';
const TimerCard
 = () => {
    // Countdown
  const [day1, setDay1] = useState(0);
  const [day2, setDay2] = useState(0);

  const [hour1, setHour1] = useState(0);
  const [hour2, setHour2] = useState(0);

  const [minute1, setMinute1] = useState(0);
  const [minute2, setMinute2] = useState(0);

  const [second1, setSecond1] = useState(0);
  const [second2, setSecond2] = useState(0);

  // Timer
  const countDown = () => {
    const dueDate = new Date("April 28, 2025 00:00").getTime();
    const currentDate = new Date().getTime();

    const remainings = dueDate - currentDate;

    if (remainings > 0) {
      let second = 1000;
      let minute = second * 60;
      let hour = minute * 60;
      let day = hour * 24;

      // Remainings
      let remainingDay = Math.floor(remainings / day);
      let remainingHour = Math.floor((remainings % day) / hour);
      let remainingMinute = Math.floor((remainings % hour) / minute);
      let remainingSecond = Math.floor((remainings % minute) / second);

      // Day
      let dayLength = remainingDay.toString().length;

      if (dayLength === 1) {
        setDay1(0);
        setDay2(remainingDay);
      } else if (dayLength === 2) {
        remainingDay = remainingDay.toString().split("");

        setDay1(remainingDay[0]);
        setDay2(remainingDay[1]);
      }

      // Hour
      let hourLength = remainingHour.toString().length;

      if (hourLength === 1) {
        setHour1(0);
        setHour2(remainingHour);
      } else if (hourLength === 2) {
        remainingHour = remainingHour.toString().split("");

        setHour1(remainingHour[0]);
        setHour2(remainingHour[1]);
      }

      // Minute
      let minuteLength = remainingMinute.toString().length;

      if (minuteLength === 1) {
        setMinute1(0);
        setMinute2(remainingMinute);
      } else if (minuteLength === 2) {
        remainingMinute = remainingMinute.toString().split("");

        setMinute1(remainingMinute[0]);
        setMinute2(remainingMinute[1]);
      }

      // Second
      let secondLength = remainingSecond.toString().length;

      if (secondLength === 1) {
        setSecond1(0);
        setSecond2(remainingSecond);
      } else if (secondLength === 2) {
        remainingSecond = remainingSecond.toString().split("");

        setSecond1(remainingSecond[0]);
        setSecond2(remainingSecond[1]);
      }
    } else {
      setDay1(0);
      setDay2(0);

      setHour1(0);
      setHour2(0);

      setMinute1(0);
      setMinute2(0);

      setSecond1(0);
      setSecond2(0);
    }
  };

  setInterval(countDown, 1000);
  return (
    <>
    <div className="timer d-flex algin-items-center gap-3 mt-3 justify-content-center">
        <div className="timer-card d-flex flex-column gap-3">
            <div className="timer-item d-flex align-item-center gap-3">
                <span>{day1}</span>
                <span>{day2}</span>
            </div>
            <p>DAYS</p>
        </div>
        <div className="timer-card d-flex flex-column gap-3">
            <div className="timer-item d-flex align-item-center gap-3">
            <span>{hour1}</span>
                <span>{hour2}</span>
            </div>
            <p>HOURS</p>
        </div>
        <div className="timer-card d-flex flex-column gap-3">
            <div className="timer-item d-flex align-item-center gap-3">
            <span>{minute1}</span>
                <span>{minute2}</span>
            </div>
            <p>MINUTES</p>
        </div>
        <div className="timer-card d-flex flex-column gap-3">
            <div className="timer-item d-flex align-item-center gap-3">
            <span>{second1}</span>
                <span>{second2}</span>
            </div>
            <p>SECONDS</p>
        </div>
    </div>
    </>
  )
}

export default TimerCard
