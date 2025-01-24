import React, { useEffect } from 'react';
import './Hero.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Длительность анимации
      offset: 150,    // Смещение
      easing: 'ease-in-out', // Плавность
      once: true,     // Анимация запускается только один раз
    });
  }, []);

  return (
    <>
      <section className="hero">
        <div className="container">
          <div className="hero__wrapper">
            <div
              className="hero__boxs"
              data-aos="fade-down-right" // Текстовые элементы с правой стороны
              data-aos-delay="200"
            >
              <div className="hero__box" data-aos="fade-down-right" data-aos-delay="300">
                <img src="hero__icon.svg" alt="" />
                <p>No LLC Required, No Credit Check.</p>
              </div>
              <h2 className="hero__title" data-aos="fade-down-right" data-aos-delay="500">
                <span className="white-text">Welcome to YourBank Empowering Your </span>
                <span className="lime-text">Financial Journey</span>
              </h2>
              <p className="hero__p" data-aos="fade-down-right" data-aos-delay="700">
                At YourBank, our mission is to provide comprehensive banking solutions that empower individuals and businesses to achieve their financial goals. We are committed to delivering personalized and innovative services that prioritize our customers' needs.
              </p>
              <Link to={'/signup'} className="hero__btn" data-aos="fade-down-right" data-aos-delay="900">
                Open Account
              </Link>
            </div>

            <div
              className="hero__imgs"
              data-aos="fade-down-left" // Изображения с левой стороны
              data-aos-delay="400"
            >
              <img
                className="hero__img"
                src="/hero__container.png"
                alt=""
                data-aos="fade-down-left"
                data-aos-delay="1000"
              />
              <img
                src="/hero__сontainer.png"
                alt=""
                data-aos="fade-down-left"
                data-aos-delay="1200"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
