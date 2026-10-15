import React,{ useState, useEffect} from "react";
export default function Clock() {
    const [time, setTime] = useState(new Date());
      useEffect(() => {
        const intervalId = setInterval(() => {
          setTime(new Date());
        }, 1000);
        return () => clearInterval(intervalId);
      }, []);
      const seconds = time.getSeconds();
      const minutes = time.getMinutes();
      const hours = time.getHours();
      const secondDegrees = seconds * 6;
    const minuteDegrees = minutes * 6;
      const hourDegrees = (hours % 12) * 30 + minutes * 0.5;
  return (
    <div className="clock">
      <div className="namber namber12">12</div>
      <div className="namber namber3">3</div>
      <div className="namber namber6">6</div>
      <div className="namber namber9">9</div>
      <div
        className="hand hour-hand"
        style={{
          transform: `rotate(${hourDegrees}deg)`,
        }}
      />
      <div
        className="hand minute-hand"
        style={{
          transform: `rotate(${minuteDegrees}deg)`,
        }}
      />
      <div
        className="hand second-hand"
        style={{
          transform: `rotate(${secondDegrees}deg)`,
        }}
      />
      <div className="center-dot"></div>
    </div>
  );
}
