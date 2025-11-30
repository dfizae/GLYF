// 1. 필수 컴포넌트 불러오기
import { Swiper, SwiperSlide } from 'swiper/react';

// 2. Swiper 스타일 불러오기
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// 3. 사용할 모듈 불러오기
import { Autoplay, EffectCoverflow } from 'swiper/modules';
import { SLIDES } from './Slides';

// ⭐ 중요: 함수 이름 첫 글자는 대문자여야 합니다! (swiperProfile -> SwiperProfile)
export default function SwiperProfile() {
    return(
        <div className=""> {/* 높이값 임시 지정 */}
            <Swiper
                effect={'coverflow'}
                centeredSlides={true}
                slidesPerView={'auto'}
                loop={true}
                
                coverflowEffect={{
                    rotate: 0,        // 회전 없음 (평평하게)
                    stretch: -50,     // 슬라이드끼리 빡빡하게 겹치기
                    depth: 100,       // 적당한 원근감
                    modifier: 1,
                    slideShadows: false, // 그림자 꺼서 깔끔하게
                }}

                modules={[EffectCoverflow, Autoplay]}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false, //만져도 멈추지 않게 한다.
                }}

                className='mySwiper w-[562px] h-[736px]'
        >           
            {SLIDES.map((slide) => (
                <SwiperSlide
                    key={slide.id}
                    className='rounded-lg overflow-hidden shadow-4xl'
                >
                    <div>
                        <img src= {slide.src} alt= {slide.alt} className='w-full h-full object-cover' />
                    </div>
                </SwiperSlide>
            ))}

            </Swiper>
        </div>
    );
};