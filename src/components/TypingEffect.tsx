'use client';

import React, { useState, useEffect, useRef } from 'react';

interface TypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deleteSpeed?: number;
  cursorType?: '|' | '_' | '▊' | '●';
  cursorColor?: string;
  variant?: 'default' | 'large' | 'small' | 'header' | 'subheader';
  startDelay?: number;
  className?: string;
}

const TypingEffect: React.FC<TypingEffectProps> = ({
  texts,
  typingSpeed = 100,
  deleteSpeed = 50,
  cursorType = '|',
  cursorColor = 'currentColor',
  variant = 'default',
  startDelay = 500,
  className = '',
}) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  
  const elementRef = useRef<HTMLDivElement>(null);

  // Intersection Observer로 화면에 보일 때 감지
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasStarted) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [hasStarted]);

  // 커서 깜박임 효과
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  // 타이핑 효과 로직
  useEffect(() => {
    if (!isVisible || texts.length === 0) return;

    const startTimeout = setTimeout(() => {
      setHasStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimeout);
  }, [isVisible, startDelay, texts.length]);

  useEffect(() => {
    if (!hasStarted || texts.length === 0) return;

    const timeout = setTimeout(() => {
      const currentFullText = texts[currentTextIndex];

      if (!isDeleting) {
        // 타이핑 중
        if (currentText.length < currentFullText.length) {
          setCurrentText(currentFullText.slice(0, currentText.length + 1));
        } else {
          // 타이핑 완료 후 잠시 대기
          setTimeout(() => setIsDeleting(true), 1500);
        }
      } else {
        // 지우는 중
        if (currentText.length > 0) {
          setCurrentText(currentFullText.slice(0, currentText.length - 1));
        } else {
          // 지우기 완료 후 다음 텍스트로
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deleteSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deleteSpeed, hasStarted]);

  // 텍스트 스타일 variant
  const getVariantClasses = () => {
    switch (variant) {
      case 'large':
        return 'text-4xl md:text-6xl font-bold';
      case 'small':
        return 'text-sm md:text-base font-medium';
      case 'header':
        return 'text-3xl md:text-5xl font-extrabold';
      case 'subheader':
        return 'text-xl md:text-2xl font-semibold';
      default:
        return 'text-lg md:text-xl font-medium';
    }
  };

  return (
    <div ref={elementRef} className={`inline-block ${className}`}>
      <span className={`${getVariantClasses()} text-white`}>
        {currentText}
      </span>
      <span
        className={`${getVariantClasses()} inline-block ml-1 transition-opacity duration-100 ${
          showCursor ? 'opacity-100' : 'opacity-0'
        }`}
        style={{ color: cursorColor }}
      >
        {cursorType}
      </span>
    </div>
  );
};

export default TypingEffect; 