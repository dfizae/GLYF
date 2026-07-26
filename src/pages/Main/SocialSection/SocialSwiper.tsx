import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';

import { Autoplay } from 'swiper/modules';
import { SOCIAL_SLIDES } from './SocialData';

export default function SocialSwiper() {
    return(
        <div className="mt-27 w-full">
            <Swiper
                slidesPerView={3}
                spaceBetween={20}
                loop={true}

                modules={[Autoplay]}

                autoplay={{
                    delay: 1000,
                    disableOnInteraction: false,
                }}

                breakpoints={{
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}

                className='w-full'
            >
                {SOCIAL_SLIDES.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img src= {slide.src} alt= {slide.alt} className='w-full h-full object-cover' />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};
