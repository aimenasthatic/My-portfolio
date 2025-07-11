import React, { useEffect, useState } from "react";

const Timer = () => {
  const [time, setTime] = useState(0);

  useEffect(() => {
    // mounted
    const timer = setInterval(() => setTime(time + 1), 1000);

    return function () {
      clearInterval(timer);
    };
  }, [time]);

  return (
    <div className="toggle-off-message">
      <h1>Stop watch</h1>
      <p>current time is {time}</p>
    </div>
  );
};

export default Timer;
