'use client';

import React from 'react';
import CountdownTimer from './CountdownTimer';

interface DiscountSectionProps {
  discountPercentage?: number;
  originalPrice?: number;
  discountedPrice?: number;
  timerHours?: number;
  className?: string;
}

const DiscountSection: React.FC<DiscountSectionProps> = ({
  discountPercentage = 30,
  originalPrice = 29900,
  discountedPrice = 20930,
  timerHours = 24,
  className = '',
}) => {
  const handleExpire = () => {
    console.log('할인 타이머가 만료되었습니다!');
    // 여기에 만료 시 로직 추가 (예: 알림, 페이지 리다이렉트 등)
  };

  const formatPrice = (price: number) => {
    return price.toLocaleString('ko-KR');
  };

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* 배경 그라디언트 */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black"></div>
      
      {/* 애니메이션 배경 효과 */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-gray-400/20 to-transparent animate-pulse"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 py-12 md:py-16">
        <div className="text-center">
          {/* 헤더 */}
          <div className="mb-8">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2">
              🔥 24시간 특가 종료
            </h2>
            <p className="text-sm md:text-base text-white/80">
              혜택을 놓치지 마세요! 마지막 기회입니다
            </p>
          </div>

          {/* 카운트다운 타이머 */}
          <div className="mb-8">
            <CountdownTimer 
              initialHours={timerHours}
              onExpire={handleExpire}
              size="large"
            />
          </div>

          {/* 할인 쿠폰 디자인 */}
          <div className="max-w-md mx-auto mb-8">
            <div className="bg-white rounded-lg shadow-2xl p-6 relative overflow-hidden">
              {/* 쿠폰 스타일 톱니 */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 to-yellow-500"></div>
              
              <div className="text-center">
                <p className="text-gray-600 text-sm mb-2 font-medium">WELCOME TIME COUPON</p>
                <div className="text-4xl md:text-5xl font-black text-pink-500 mb-2">
                  {discountPercentage}%
                </div>
                <div className="space-y-1">
                  <p className="text-gray-500 text-sm line-through">
                    원가 {formatPrice(originalPrice)}원
                  </p>
                  <p className="text-lg md:text-xl font-bold text-gray-800">
                    특가 {formatPrice(discountedPrice)}원
                  </p>
                </div>
                <p className="text-xs text-gray-400 mt-2">* 24시간 한정 특별 혜택</p>
              </div>
            </div>
          </div>

          {/* 할인 받기 버튼 */}
          <a
            href="https://smartstore.naver.com/essential_of_life/products/11411052426"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full max-w-sm mx-auto"
          >
            <button className="w-full bg-gradient-to-r from-red-500 to-yellow-500 hover:from-red-600 hover:to-yellow-600 text-white font-bold py-4 px-8 rounded-lg text-lg md:text-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              {discountPercentage}% 할인 받기
            </button>
          </a>

          {/* 추가 안내 */}
          <p className="text-xs md:text-sm text-white/60 mt-4">
            ⚡ 한정 수량 | 📦 무료 배송 | 🎁 당일 발송
          </p>
        </div>
      </div>
    </div>
  );
};

export default DiscountSection; 