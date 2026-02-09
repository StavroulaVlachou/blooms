import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

const Countdown = () => {
  const weddingDate = new Date("2026-08-30T16:00:00");

  const calculateTimeLeft = (): TimeLeft => {
    const difference = weddingDate.getTime() - new Date().getTime();

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const timeBlocks = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <div className="flex gap-4 sm:gap-8 justify-center">
      {timeBlocks.map((block, index) => (
        <motion.div
          key={block.label}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 + 0.8, duration: 0.6 }}
          className="flex flex-col items-center"
        >
          <div className="border border-border bg-card/50 backdrop-blur-sm p-4 sm:p-6 min-w-[65px] sm:min-w-[90px]">
            <span className="text-2xl sm:text-4xl md:text-5xl font-serif text-foreground font-medium block text-center">
              {String(block.value).padStart(2, "0")}
            </span>
          </div>
          <span className="text-[10px] sm:text-xs text-muted-foreground mt-3 uppercase tracking-[0.3em] font-sans font-light">
            {block.label}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Countdown;
