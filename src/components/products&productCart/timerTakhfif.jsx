
import { useEffect, useState } from "react";

function TimerTakhfif({
  initialTime = 5 * 60 * 60,
  containerClass = "",
  boxClass = "",
  colonClass = "",
}) {
  const [timeLeft, setTimeLeft] = useState(initialTime);

  useEffect(() => setTimeLeft(initialTime), [initialTime]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const hours = Math.floor(timeLeft / 3600);
  const minutes = Math.floor((timeLeft % 3600) / 60);
  const seconds = timeLeft % 60;

  const format = (num) => num.toString().padStart(2, "0");

  return (
    <div
      className={`flex items-center gap-1 text-[13px] font-bold ${containerClass}`}
    >
      <div className={`px-2 py-1 rounded-md ${boxClass}`}>{format(hours)}</div>
      <span className={colonClass}>:</span>
      <div className={`px-2 py-1 rounded-md ${boxClass}`}>
        {format(minutes)}
      </div>
      <span className={colonClass}>:</span>
      <div className={`px-2 py-1 rounded-md ${boxClass}`}>
        {format(seconds)}
      </div>
    </div>
  );
}

export default TimerTakhfif;
