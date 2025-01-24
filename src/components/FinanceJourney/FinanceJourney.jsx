import React, { useEffect } from 'react';
import './FinanceJourney.scss';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Импорт стилей AOS

const FinanceJourney = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <>
    <section className="financejourney" data-aos="fade-up">
        <div className="container">
            <div className="financejourney__wrapper">
                <div className="financejourney__box" data-aos="fade-left">
                    <h1 className="financejourney_h1">
                        <span className="white-text" data-aos="fade-up">Start your financial journey with</span>
                        <span className="lime-text" data-aos="fade-up" data-aos-delay="300"> YourBank today!</span>
                    </h1>
                    <p className="financejourney__p" data-aos="fade-up" data-aos-delay="500">
                        Ready to take control of your finances? Join YourBank now, and let us help you achieve your financial goals with our tailored solutions and exceptional customer service.
                    </p>
                </div>
                <Link className='financejourney__Link' to={'/signup'} data-aos="zoom-in" data-aos-delay="700">Open Account</Link>
            </div>
        </div>
    </section>
    </>
  );
};

export default FinanceJourney;
