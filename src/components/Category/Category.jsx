import React, { useEffect } from 'react';
import './Category.scss';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {
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
      <section className="category" data-aos="fade-up" data-aos-delay="100">
        <div className="container">
          <div className="category__wrapper">
            <h1 data-aos="fade-up" data-aos-delay="200">
              <span className='lime-text'>Frequently</span>
              <span className='white-text'> Asked Questions</span>
            </h1>
            <p data-aos="fade-up" data-aos-delay="400">
              Still you have any questions? Contact our Team via support@yourbank.com
            </p>

            <div className="category__boxs">
              <div className="category__box" data-aos="fade-left" data-aos-delay="600" data-aos-duration="1200">
                <div className="category__box-content" data-aos="zoom-in" data-aos-delay="800">
                  <h2>How do I open an account with YourBank?</h2>
                  <p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                </div>
              </div>

              <div className="category__box" data-aos="fade-right" data-aos-delay="800" data-aos-duration="1200">
                <div className="category__box-content" data-aos="zoom-in" data-aos-delay="1000">
                  <h2>How do I open an account with YourBank?</h2>
                  <p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                </div>
              </div>

              <div className="category__box" data-aos="fade-left" data-aos-delay="1000" data-aos-duration="1200">
                <div className="category__box-content" data-aos="zoom-in" data-aos-delay="1200">
                  <h2>How do I open an account with YourBank?</h2>
                  <p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                </div>
              </div>

              <div className="category__box" data-aos="fade-right" data-aos-delay="1200" data-aos-duration="1200">
                <div className="category__box-content" data-aos="zoom-in" data-aos-delay="1400">
                  <h2>How do I open an account with YourBank?</h2>
                  <p>Opening an account with YourBank is easy. Simply visit our website and click on the "Open an Account" button. Follow the prompts, provide the required information, and complete the application process. If you have any questions or need assistance, our customer support team is available to help.</p>
                </div>
              </div>
            </div>

            <div className="btn__container">
              <button className='category__btn' data-aos="fade-up" data-aos-delay="1400">Load All FAQ’s</button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Category;
