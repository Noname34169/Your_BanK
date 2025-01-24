import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Mission.scss';

const Mission = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-out', once: true });
  }, []);

  return (
    <>
      <div className="container">
        <div className="mision__wrapper">
          <div className="mision__box" data-aos="fade-up" data-aos-delay="100">
            <h1 className="lime-text">Mission & Vision</h1>
            <p>
              We envision being a leading force in the industry, driven by innovation, integrity, and inclusivity, creating a brighter financial future for individuals and businesses while maintaining a strong commitment to customer satisfaction and community development
            </p>
          </div>

          <section className="mission">
            <div className="mission__wrapper">
              <img src="/mission-img.png" alt="" data-aos="fade-right" data-aos-delay="200" />
              <div className="mission__box" data-aos="fade-left" data-aos-delay="300">
                <h2>Mission</h2>
                <p>
                  At YourBank, our mission is to empower our customers to achieve financial success. We are dedicated to delivering innovative banking solutions that cater to their unique needs. Through personalized services, expert guidance, and cutting-edge technology, we aim to build strong, lasting relationships with our customers. Our mission is to be their trusted partner, helping them navigate their financial journey and realize their dreams.
                </p>
              </div>
            </div>
          </section>

          <section className="vision">
            <div className="vision__wrapper">
              <img src="/vision-img.png" alt="" data-aos="fade-left" data-aos-delay="200" />
              <div className="vision__box" data-aos="fade-right" data-aos-delay="300">
                <h2>Vision</h2>
                <p>
                  Our vision at YourBank is to redefine banking by creating a seamless and personalized experience for our customers. We envision a future where banking is accessible, transparent, and tailored to individual preferences. Through continuous innovation and collaboration, we strive to be at the forefront of the industry, setting new standards for customer-centric banking. Our vision is to be the preferred financial institution, known for our unwavering commitment to excellence, trust, and customer satisfaction.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

export default Mission;
