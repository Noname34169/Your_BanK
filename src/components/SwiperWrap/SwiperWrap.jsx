import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './SwiperWrap.scss';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import AOS from 'aos';
import 'aos/dist/aos.css';

const SwiperWrap = () => {

  useEffect(() => {
    // Инициализация AOS
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <>
      <section className="swiper">
        <div className="container">
          <div className="swiperwrap__wrapper">
            {/* Заголовок с анимацией */}
            <h1 data-aos="fade-up">
              <span className='white-text'>Our </span>
              <span className='lime-text'>Testimonials</span>
            </h1>

            {/* Параграф с анимацией */}
            <p className='swiper__p' data-aos="fade-up" data-aos-delay="200">
              Discover how YourBank has transformed lives with innovative digital solutions and personalized customer service. See why our clients trust us for a secure and prosperous financial journey.
            </p>

            {/* Слайдер с анимациями для слайдов */}
            <Swiper
              slidesPerView={3}
              spaceBetween={0}
              loop={true}
              navigation={true}
              modules={[Navigation]}
              breakpoints={{
                1024: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                550: {
                  slidesPerView: 1,
                },
                374: {
                  slidesPerView: 0.5,
                },
              }}
            >
              {/* Контейнер слайдов */}
              <div className="swiper__wrapper">
                <SwiperSlide data-aos="zoom-in" data-aos-delay="300">
                  <img src="/swiper-card-icon.png" alt="" />
                </SwiperSlide>
                <SwiperSlide data-aos="zoom-in" data-aos-delay="400">
                  <img src="/swiper-card-icon.png" alt="" />
                </SwiperSlide>
                <SwiperSlide data-aos="zoom-in" data-aos-delay="500">
                  <img src="/swiper-card-icon.png" alt="" />
                </SwiperSlide>
                <SwiperSlide data-aos="zoom-in" data-aos-delay="600">
                  <img src="/swiper-card-icon.png" alt="" />
                </SwiperSlide>
              </div>
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default SwiperWrap;
