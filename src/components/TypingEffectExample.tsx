'use client';

import React from 'react';
import TypingEffect from './TypingEffect';

const TypingEffectExample: React.FC = () => {
  // 타이핑할 문장들
  const mainTexts = [
    "우리 부모님의 기억을 지켜주는 작은 습관",
    "가족과 함께하는 따뜻한 시간",
    "사랑하는 사람들과의 소중한 기억"
  ];

  const subTexts = [
    "리멤버 퍼즐",
    "메모리 케어",
    "함께 만드는 추억"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-8">
      <div className="text-center space-y-8">
        {/* 메인 타이틀 - 원본 스타일과 유사하게 */}
        <div 
          className="text-2xl font-extrabold tracking-tight text-white px-8 py-4 rounded-lg"
          style={{
            background: 'rgba(255, 255, 255, 0.4)',
            backdropFilter: 'blur(4px)',
            textShadow: 'rgba(255, 255, 255, 0.5) 0px 0px 10px, rgba(255, 255, 255, 0.3) 0px 0px 20px'
          }}
        >
          <div className="mb-2">
            <TypingEffect 
              texts={mainTexts}
              typingSpeed={120}
              deleteSpeed={60}
              cursorType="|"
              cursorColor="#ffffff"
              variant="default"
              startDelay={1000}
              className="inline-block"
            />
          </div>
          <div>
            <TypingEffect 
              texts={subTexts}
              typingSpeed={100}
              deleteSpeed={50}
              cursorType="▊"
              cursorColor="#fbbf24"
              variant="default"
              startDelay={3000}
              className="inline-block"
            />
          </div>
        </div>

        {/* 다양한 스타일 예제들 */}
        <div className="space-y-6">
          {/* 큰 제목 스타일 */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Large Header 스타일</h2>
            <TypingEffect 
              texts={["큰 제목으로 보여주기", "임팩트 있는 메시지"]}
              typingSpeed={80}
              deleteSpeed={40}
              cursorType="●"
              cursorColor="#ef4444"
              variant="large"
              startDelay={500}
            />
          </div>

          {/* 소제목 스타일 */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Subheader 스타일</h2>
            <TypingEffect 
              texts={["소제목 스타일입니다", "깔끔한 서브 타이틀", "설명문에 적합한 크기"]}
              typingSpeed={60}
              deleteSpeed={30}
              cursorType="_"
              cursorColor="#10b981"
              variant="subheader"
              startDelay={1000}
            />
          </div>

          {/* 작은 텍스트 스타일 */}
          <div className="bg-black/20 backdrop-blur-sm rounded-lg p-6">
            <h2 className="text-lg font-semibold text-white mb-4">Small Text 스타일</h2>
            <TypingEffect 
              texts={[
                "작은 텍스트로 표시되는 내용입니다",
                "상세 설명이나 부가 정보에 활용",
                "은은하면서도 효과적인 타이핑 효과"
              ]}
              typingSpeed={50}
              deleteSpeed={25}
              cursorType="|"
              cursorColor="#8b5cf6"
              variant="small"
              startDelay={1500}
            />
          </div>
        </div>

        {/* 사용법 안내 */}
        <div className="bg-black/30 backdrop-blur-sm rounded-lg p-6 text-left">
          <h2 className="text-lg font-semibold text-white mb-4">사용법</h2>
          <pre className="text-sm text-gray-300 overflow-x-auto">
{`<TypingEffect 
  texts={["첫 번째 문장", "두 번째 문장"]}
  typingSpeed={100}        // 타이핑 속도 (ms)
  deleteSpeed={50}         // 지우는 속도 (ms)
  cursorType="|"           // 커서 모양: "|", "_", "▊", "●"
  cursorColor="#ffffff"    // 커서 색상
  variant="default"        // 스타일: default, large, small, header, subheader
  startDelay={500}         // 시작 전 대기 시간 (ms)
/>`}
          </pre>
        </div>
      </div>
    </div>
  );
};

export default TypingEffectExample; 