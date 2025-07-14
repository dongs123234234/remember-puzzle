'use client';

import React, { useState, useEffect } from 'react';

interface CountdownTimerProps {
  targetDate?: Date;
  initialHours?: number;
  onExpire?: () => void;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const CountdownTimer: React.FC<CountdownTimerProps> = ({
  targetDate,
  initialHours = 24,
  onExpire,
  size = 'large',
  className = '',
}) => {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    // 타겟 날짜가 없으면 현재 시간 + initialHours로 설정
    const endTime = targetDate || new Date(Date.now() + initialHours * 60 * 60 * 1000);

    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = endTime.getTime() - now;

      if (distance < 0) {
        setIsExpired(true);
        setTimeLeft({ hours: 0, minutes: 0, seconds: 0 });
        onExpire?.();
        clearInterval(timer);
        return;
      }

      const hours = Math.floor(distance / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft({ hours, minutes, seconds });
    }, 1000);

    return () => clearInterval(timer);
  }, [targetDate, initialHours, onExpire]);

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return 'text-lg md:text-xl';
      case 'medium':
        return 'text-2xl md:text-3xl';
      case 'large':
        return 'text-3xl md:text-5xl lg:text-6xl';
      default:
        return 'text-3xl md:text-5xl lg:text-6xl';
    }
  };

  const formatNumber = (num: number) => {
    return num.toString().padStart(2, '0');
  };

  if (isExpired) {
    return (
      <div className={`text-red-500 font-bold ${getSizeClasses()} ${className}`}>
        🔥 특가 종료!
      </div>
    );
  }

  return (
    <div className={`font-mono font-bold text-white ${getSizeClasses()} ${className}`}>
      <div className="flex items-center justify-center space-x-2 md:space-x-4">
        <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3">
          <span className="drop-shadow-lg">{formatNumber(timeLeft.hours)}</span>
        </div>
        <span className="text-white/80">:</span>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3">
          <span className="drop-shadow-lg">{formatNumber(timeLeft.minutes)}</span>
        </div>
        <span className="text-white/80">:</span>
        <div className="bg-black/30 backdrop-blur-sm rounded-lg px-3 py-2 md:px-4 md:py-3">
          <span className="drop-shadow-lg">{formatNumber(timeLeft.seconds)}</span>
        </div>
      </div>
      <div className="flex justify-center space-x-8 md:space-x-12 mt-2 text-xs md:text-sm text-white/70 font-normal">
        <span>시간</span>
        <span>분</span>
        <span>초</span>
      </div>
    </div>
  );
};

export default CountdownTimer; 