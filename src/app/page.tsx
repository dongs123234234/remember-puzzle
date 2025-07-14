'use client';

import Image from "next/image";
import { useEffect, useState } from "react";
import { DiscountSection } from '../components';

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const cards = [
    {
      image: "/image/1122.png",
      title: "손끝 감각을 자극하는 대형 퍼즐 조각",
      description: "작은 조각이 아닌 시니어 전용 대형 조각으로 설계. 손의 미세 운동 능력을 자극해 소근육 발달 및 감각 유지 훈련"
    },
    {
      image: "/image/1133.png",
      title: "몰입을 유도하는 뇌 집중 퍼즐 활동",
      description: "퍼즐을 맞추며 기억력과 주의집중력을 동시에 자극. 치매 예방과 인지력 강화에 도움을 주는 활동성 놀이"
    },
    {
      image: "/image/1144.png",
      title: "혼자서도 즐기는 하루의 루틴",
      description: "자녀 없이도 스스로 즐길 수 있는 혼자만의 인지 훈련 시간. 반복과 루틴을 통해 일상 속 뇌 훈련 습관화"
    },
    {
      image: "/image/1155.png",
      title: "함께 맞추는 따뜻한 추억의 시간",
      description: "부모님과 자녀가 함께 맞추며 정서적 교감과 소통. '그때 그 시절'을 떠올리는 테마로 추억 회상 및 감정 안정 효과"
    }
  ];

  const totalSlides = Math.ceil(cards.length / 2);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="relative flex size-full min-h-screen flex-col bg-[#fcfaf8] group/design-root overflow-x-hidden">
      {/* 고정 네비게이션 바 */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#fcfaf8]/90 backdrop-blur-md border-b border-[#f4ece7]/50' 
          : 'bg-transparent'
      }`}>
        <div className="flex items-center justify-between whitespace-nowrap px-4 sm:px-6 lg:px-10 py-3">
          <div className="flex items-center gap-2 sm:gap-4 text-[#1c130d]">
            <div className="size-4">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="text-[#1c130d] text-base sm:text-lg font-bold leading-tight tracking-[-0.015em] hover:animate-pulse transition-all duration-300" style={{transition: 'text-shadow 0.3s ease'}} onMouseEnter={(e) => (e.target as HTMLElement).style.textShadow = '0 0 5px rgba(28, 19, 13, 0.3), 0 0 10px rgba(28, 19, 13, 0.2)'} onMouseLeave={(e) => (e.target as HTMLElement).style.textShadow = 'none'}>리멤버퍼즐</h2>
          </div>
          <div className="flex flex-1 justify-end">
            <a
              href="https://smartstore.naver.com/essential_of_life/products/11411052426"
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-[60px] sm:min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-8 sm:h-10 px-3 sm:px-4 bg-[#f37a24] text-white text-xs sm:text-sm font-bold leading-normal tracking-[0.015em] hover:bg-[#e56a1a] transition-colors duration-200"
            >
              <span className="truncate">구매하기</span>
            </a>
          </div>
        </div>
      </header>

      {/* 동영상 섹션 */}
      <div className="relative h-[60vh] sm:h-[70vh] lg:h-[80vh] w-full">
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
          <video
            src="/video/hero-video.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div className="relative z-10 flex flex-col items-center gap-3 sm:gap-4 text-center text-white mt-16 sm:mt-20 px-4">
            <h1 className="text-lg sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-white px-4 sm:px-8 py-3 sm:py-4 rounded-lg animate-pulse" style={{ background: 'rgba(255, 255, 255, 0.4)', backdropFilter: 'blur(4px)', textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)' }}>
              <div className="mb-1 sm:mb-2">우리 부모님의 기억을 지켜주는 작은 습관</div>
              <div>리멤버 퍼즐</div>
            </h1>
            <button className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 sm:h-12 px-4 sm:px-5 bg-[#f37a24] text-[#1c130d] text-sm sm:text-base font-bold leading-normal tracking-[0.015em]">
              <span className="truncate">우리의 가치</span>
            </button>
          </div>
        </div>
      </div>

      {/* 나머지 컨텐츠 */}
      <div className="layout-container flex h-full grow flex-col">
        <div className="px-4 sm:px-8 lg:px-40 flex flex-1 justify-center py-5">
          <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
            <div className="flex flex-col gap-6 sm:gap-10 px-2 sm:px-4 pt-12 sm:pt-20 pb-6 sm:pb-10 @container">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h1
                  className="text-[#1c130d] tracking-light text-2xl sm:text-[32px] lg:text-4xl font-bold leading-tight max-w-[720px] animate-pulse"
                  style={{textShadow: '0 0 15px rgba(28, 19, 13, 0.6), 0 0 30px rgba(28, 19, 13, 0.4), 0 0 45px rgba(28, 19, 13, 0.2)'}}
                >
                  리멤버퍼즐이란?
                </h1>
                <p className="text-[#1c130d] text-sm sm:text-base font-normal leading-normal max-w-[720px]">
                  리멤버퍼즐은 시니어 세대를 위한 인지 자극형 퍼즐로,
                  치매 예방과 두뇌 활성화에 도움을 주는 인지훈련 보조도구입니다.
                </p>
              </div>
              {/* 슬라이드 컨테이너 */}
              <div className="relative">
                <div className="overflow-hidden">
                  <div 
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentSlide * 100}%)` }}
                  >
                    {/* 첫 번째 슬라이드 (카드 1, 2) */}
                    <div className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {cards.slice(0, 2).map((card, index) => (
                        <div key={index} className="flex flex-col gap-3 pb-3">
                          <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{backgroundImage: `url("${card.image}")`}}
                          ></div>
                          <div>
                            <p className="text-[#1c130d] text-sm sm:text-base font-medium leading-normal">{card.title}</p>
                            <p className="text-[#9c6c49] text-xs sm:text-sm font-normal leading-normal mt-1">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* 두 번째 슬라이드 (카드 3, 4) */}
                    <div className="w-full flex-shrink-0 grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      {cards.slice(2, 4).map((card, index) => (
                        <div key={index + 2} className="flex flex-col gap-3 pb-3">
                          <div
                            className="w-full bg-center bg-no-repeat aspect-square bg-cover rounded-xl"
                            style={{backgroundImage: `url("${card.image}")`}}
                          ></div>
                          <div>
                            <p className="text-[#1c130d] text-sm sm:text-base font-medium leading-normal">{card.title}</p>
                            <p className="text-[#9c6c49] text-xs sm:text-sm font-normal leading-normal mt-1">
                              {card.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* 네비게이션 버튼 */}
                <button 
                  onClick={prevSlide}
                  className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200"
                >
                  <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15 18L9 12L15 6" stroke="#1c130d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <button 
                  onClick={nextSlide}
                  className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white rounded-full p-1.5 sm:p-2 shadow-lg transition-all duration-200"
                >
                  <svg width="16" height="16" className="sm:w-5 sm:h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9 18L15 12L9 6" stroke="#1c130d" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                {/* 슬라이드 인디케이터 */}
                <div className="flex justify-center mt-4 gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-200 ${
                        index === currentSlide ? 'bg-[#f37a24]' : 'bg-[#e8d9ce]'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="@container">
              <div className="px-2 sm:px-4">
                <div
                  className="flex min-h-[320px] sm:min-h-[480px] flex-col gap-4 sm:gap-6 bg-cover bg-center bg-no-repeat rounded-xl items-center justify-center p-4 sm:p-6"
                  style={{backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.1) 0%, rgba(0, 0, 0, 0.4) 100%), url("/image/u4499449374_imagine_prompt_elderly_woman_with_white_hair_and__d6b99984-e66b-4451-b69f-212daa2803dc_3.png")'}}
                >
                  <div className="flex flex-col gap-2 text-center">
                    <h1
                      className="text-white text-2xl sm:text-4xl lg:text-5xl font-black leading-tight tracking-[-0.033em] animate-pulse px-2"
                      style={{textShadow: '0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3), 0 0 30px rgba(255, 255, 255, 0.2)'}}
                    >
                      A Puzzle a Day for a Healthier Brain
                    </h1>
                    <h2 className="text-white text-sm sm:text-base lg:text-lg font-normal leading-relaxed px-2">
                      두뇌를 자극하는 습관, 기억을 지켜주는 퍼즐.<br/>
                      전문가가 추천한 리멤버퍼즐은 전두엽 활성화와 인지력 회복에 효과적입니다.<br/>
                      지금, 부모님께 가장 따뜻한 시간을 선물하세요.
                    </h2>
                  </div>
                  <a
                    href="https://smartstore.naver.com/essential_of_life/products/11411052426"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 sm:h-12 px-4 sm:px-5 bg-[#f37a24] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em]"
                  >
                    <span className="truncate">[지금 선물하기]</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6 sm:gap-10 px-2 sm:px-4 pt-16 sm:pt-32 pb-6 sm:pb-10 @container">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h1
                  className="text-[#1c130d] tracking-light text-2xl sm:text-[32px] lg:text-4xl font-bold leading-tight max-w-[720px] animate-pulse"
                  style={{textShadow: '0 0 15px rgba(28, 19, 13, 0.6), 0 0 30px rgba(28, 19, 13, 0.4), 0 0 45px rgba(28, 19, 13, 0.2)'}}
                >
                  우리의 가치
                </h1>
                <p className="text-[#1c130d] text-sm sm:text-base font-normal leading-normal max-w-[720px]">
                  리멤버퍼즐은 배려, 연결, 그리고 인지 건강을 핵심 가치로 삼습니다. 우리는 퍼즐을 단순한 놀이가 아닌, 사랑하는 사람의 마음과 뇌를 함께 돌보는 따뜻한 도구로 만듭니다.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 p-0">
                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8d9ce] bg-[#fcfaf8] p-3 sm:p-4 flex-col">
                  <div className="text-[#1c130d]">
                    <Image
                      src="/image/brain.png"
                      alt="뇌"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#1c130d] text-sm sm:text-base font-bold leading-tight hover:animate-pulse transition-all duration-300" style={{transition: 'text-shadow 0.3s ease'}} onMouseEnter={(e) => (e.target as HTMLElement).style.textShadow = '0 0 5px rgba(28, 19, 13, 0.3), 0 0 10px rgba(28, 19, 13, 0.2)'} onMouseLeave={(e) => (e.target as HTMLElement).style.textShadow = 'none'}>인지 건강</h2>
                    <p className="text-[#9c6c49] text-xs sm:text-sm font-normal leading-normal">
                      인지재활 전문가의 자문을 바탕으로, 뇌 기능을 자극하고 기억력을 유지할 수 있도록 퍼즐을 설계합니다.
                    </p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8d9ce] bg-[#fcfaf8] p-3 sm:p-4 flex-col">
                  <div className="text-[#1c130d]">
                    <Image
                      src="/image/heart.png"
                      alt="하트"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#1c130d] text-sm sm:text-base font-bold leading-tight hover:animate-pulse transition-all duration-300" style={{transition: 'text-shadow 0.3s ease'}} onMouseEnter={(e) => (e.target as HTMLElement).style.textShadow = '0 0 5px rgba(28, 19, 13, 0.3), 0 0 10px rgba(28, 19, 13, 0.2)'} onMouseLeave={(e) => (e.target as HTMLElement).style.textShadow = 'none'}>감정적 연결</h2>
                    <p className="text-[#9c6c49] text-xs sm:text-sm font-normal leading-normal">추억을 불러일으키는 테마와 스토리로 세대 간의 대화를 유도하고, 정서적 유대감을 형성합니다.</p>
                  </div>
                </div>
                <div className="flex flex-1 gap-3 rounded-lg border border-[#e8d9ce] bg-[#fcfaf8] p-3 sm:p-4 flex-col sm:col-span-2 lg:col-span-1">
                  <div className="text-[#1c130d]">
                    <Image
                      src="/image/gift.png"
                      alt="선물"
                      width={24}
                      height={24}
                      className="object-contain"
                    />
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="text-[#1c130d] text-sm sm:text-base font-bold leading-tight hover:animate-pulse transition-all duration-300" style={{transition: 'text-shadow 0.3s ease'}} onMouseEnter={(e) => (e.target as HTMLElement).style.textShadow = '0 0 5px rgba(28, 19, 13, 0.3), 0 0 10px rgba(28, 19, 13, 0.2)'} onMouseLeave={(e) => (e.target as HTMLElement).style.textShadow = 'none'}>의미 있는 선물</h2>
                    <p className="text-[#9c6c49] text-xs sm:text-sm font-normal leading-normal">
                      리멤버퍼즐은 단순한 제품이 아닌, 시간과 건강, 그리고 기억을 선물하는 도구입니다. 부모님께 마음을 전하고 싶은 당신에게 꼭 맞는 선택입니다.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* 🔥 할인 카운트다운 섹션 */}
            <DiscountSection 
              discountPercentage={30}
              originalPrice={29900}
              discountedPrice={21900}
              timerHours={24}
              className="relative z-10"
            />

            <div className="flex flex-col gap-6 sm:gap-10 px-2 sm:px-4 pt-16 sm:pt-32 pb-6 sm:pb-10 @container">
              <div className="flex flex-col gap-3 sm:gap-4">
                <h1 className="text-[#1c130d] tracking-light text-2xl sm:text-[32px] lg:text-4xl font-bold leading-tight max-w-[720px] animate-pulse" style={{textShadow: '0 0 15px rgba(28, 19, 13, 0.6), 0 0 30px rgba(28, 19, 13, 0.4), 0 0 45px rgba(28, 19, 13, 0.2)'}}>
                  우리의 상품
                </h1>
                <p className="text-[#1c130d] text-sm sm:text-base font-normal leading-normal max-w-[720px]">
                  리멤버퍼즐은 치매 예방과 인지 능력 향상을 위해 전문적으로 설계된 퍼즐입니다.
                </p>
              </div>
              <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 items-center">
                <div className="flex-1 w-full">
                  <Image 
                    src="/image/puzzle.png" 
                    alt="리멤버퍼즐 상품" 
                    width={500} 
                    height={400}
                    className="w-full h-auto rounded-lg border border-[#e8d9ce] object-cover"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-col gap-2">
                    <h2 className="text-[#1c130d] text-xl sm:text-2xl font-bold leading-tight animate-pulse" style={{textShadow: '0 0 10px rgba(28, 19, 13, 0.5), 0 0 20px rgba(28, 19, 13, 0.3)'}}>리멤버퍼즐 시리즈</h2>
                    <p className="text-[#9c6c49] text-sm sm:text-base font-normal leading-normal">
                      향수를 불러일으키는 추억의 장면들을 담은 퍼즐로, 기억력 향상과 인지 능력 개발에 도움을 줍니다. 
                      세대를 초월한 소통의 도구로 가족과 함께 즐길 수 있습니다.
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-4 justify-center">
                      <span className="text-[#1c130d] text-xs sm:text-sm font-medium">⭐ 전문가 추천</span>
                    </div>
                    <div className="flex flex-col gap-1 items-center">
                      <div className="flex items-center gap-2 justify-center">
                        <span className="text-[#9c6c49] text-2xl sm:text-[45px] line-through">정가 29,900원</span>
                      </div>
                      <div className="flex items-center gap-2 justify-center">
                        <span className="text-white text-sm sm:text-base font-bold bg-red-500 px-2 py-1 rounded">특가</span>
                        <span className="text-[#1c130d] text-2xl sm:text-4xl font-bold">21,900원</span>
                      </div>
                    </div>
                  </div>
                  <a 
                    href="https://smartstore.naver.com/essential_of_life/products/11411052426"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1c130d] text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-medium hover:bg-[#2a1f18] transition-colors w-fit mx-auto"
                  >
                    구매하러 가기
                  </a>
                </div>
              </div>
            </div>
            <div className="@container">
              <div className="flex flex-col justify-end gap-4 sm:gap-6 px-2 sm:px-4 pt-16 sm:pt-32 pb-6 sm:pb-10">
                <div className="flex flex-col gap-6 sm:gap-8 text-center items-center">
                  <h1
                    className="text-[#1c130d] tracking-light text-2xl sm:text-[32px] lg:text-4xl font-bold leading-tight max-w-[720px] mx-auto animate-pulse"
                    style={{textShadow: '0 0 15px rgba(28, 19, 13, 0.6), 0 0 30px rgba(28, 19, 13, 0.4), 0 0 45px rgba(28, 19, 13, 0.2)'}}
                  >
                    함께 기억을 지켜요
                  </h1>
                  <p className="text-[#1c130d] text-sm sm:text-base font-normal leading-normal max-w-[720px] mx-auto px-4">
                    부모님의 건강한 기억을 위한 따뜻한 이야기를 전해드립니다. 새 소식과 인지 건강 팁, 한 발 먼저 만나보세요.
                  </p>
                  <div className="w-full max-w-[600px] mx-auto px-4">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-auto rounded-lg shadow-lg"
                    >
                      <source src="/video/memorize.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </div>
                <div className="flex flex-1 justify-center px-4">
                  <div className="flex justify-center w-full max-w-[400px]">
                    <a
                      href="https://smartstore.naver.com/essential_of_life/products/11411052426"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 sm:h-12 px-4 sm:px-5 bg-[#f37a24] text-white text-sm sm:text-base font-bold leading-normal tracking-[0.015em] w-full"
                    >
                      <span className="truncate">구매하러 가기</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <footer className="flex justify-center">
          <div className="flex max-w-[960px] flex-1 flex-col">
            <footer className="flex flex-col gap-4 sm:gap-6 px-4 sm:px-5 py-6 sm:py-10 text-center @container">
              <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6">
                <a className="text-[#9c6c49] text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">Shop</a>
                <a className="text-[#9c6c49] text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">About</a>
                <a className="text-[#9c6c49] text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">Contact</a>
                <a className="text-[#9c6c49] text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">FAQ</a>
                <a className="text-[#9c6c49] text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">Privacy Policy</a>
                <a className="text-[#9c6c49] text-sm sm:text-base font-normal leading-normal min-w-20 sm:min-w-40" href="#">Terms of Service</a>
              </div>
              <div className="flex flex-wrap justify-center gap-4">
                <a href="#">
                  <div className="text-[#9c6c49]" data-icon="TwitterLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M247.39,68.94A8,8,0,0,0,240,64H209.57A48.66,48.66,0,0,0,168.1,40a46.91,46.91,0,0,0-33.75,13.7A47.9,47.9,0,0,0,120,88v6.09C79.74,83.47,46.81,50.72,46.46,50.37a8,8,0,0,0-13.65,4.92c-4.31,47.79,9.57,79.77,22,98.18a110.93,110.93,0,0,0,21.88,24.2c-15.23,17.53-39.21,26.74-39.47,26.84a8,8,0,0,0-3.85,11.93c.75,1.12,3.75,5.05,11.08,8.72C53.51,229.7,65.48,232,80,232c70.67,0,129.72-54.42,135.75-124.44l29.91-29.9A8,8,0,0,0,247.39,68.94Zm-45,29.41a8,8,0,0,0-2.32,5.14C196,166.58,143.28,216,80,216c-10.56,0-18-1.4-23.22-3.08,11.51-6.25,27.56-17,37.88-32.48A8,8,0,0,0,92,169.08c-.47-.27-43.91-26.34-44-96,16,13,45.25,33.17,78.67,38.79A8,8,0,0,0,136,104V88a32,32,0,0,1,9.6-22.92A30.94,30.94,0,0,1,167.9,56c12.66.16,24.49,7.88,29.44,19.21A8,8,0,0,0,204.67,80h16Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#9c6c49]" data-icon="InstagramLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z"
                      ></path>
                    </svg>
                  </div>
                </a>
                <a href="#">
                  <div className="text-[#9c6c49]" data-icon="FacebookLogo" data-size="24px" data-weight="regular">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                      <path
                        d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,191.63V152h24a8,8,0,0,0,0-16H136V112a16,16,0,0,1,16-16h16a8,8,0,0,0,0-16H152a32,32,0,0,0-32,32v24H96a8,8,0,0,0,0,16h24v63.63a88,88,0,1,1,16,0Z"
                      ></path>
                    </svg>
                  </div>
                </a>
              </div>
              <p className="text-[#9c6c49] text-sm sm:text-base font-normal leading-normal">© 2023 리멤버퍼즐. All rights reserved.</p>
            </footer>
          </div>
        </footer>
      </div>
    </div>
  );
}
