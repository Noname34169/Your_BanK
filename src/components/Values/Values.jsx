import React, { useEffect } from 'react'
import './Values.scss'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Импорт стилей AOS

const Values = () => {
  useEffect(() => {
    AOS.init({ duration: 1200, easing: 'ease-out', once: true });
  }, []);

  return (
    <>
      <section className="values">
        <div className="container">
          <div className="values__wrapper">
            <h2 data-aos="fade-up" data-aos-delay="100">
              <span className='white-text'>Our</span>
              <span className='lime-text'> Values</span>
            </h2>
            <p className='values__p' data-aos="fade-up" data-aos-delay="200">
              At YourBank, our values form the foundation of our organization and guide our actions. We believe in upholding the highest standards of integrity, delivering exceptional service, and embracing innovation. These values define our culture and shape the way we work together to achieve our goals.
            </p>
            <div className="values__boxs">
              <div className="values__box" data-aos="zoom-in" data-aos-delay="300">
                <h3>Integrity</h3>
                <p>We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.</p>
              </div>
              <div className="values__box" data-aos="zoom-in" data-aos-delay="400">
                <h3>Customer Centricity</h3>
                <p>Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.</p>
              </div>
              <div className="values__box" data-aos="zoom-in" data-aos-delay="500">
                <h3>Collaboration</h3>
                <p>We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.</p>
              </div>
              <div className="values__box" data-aos="zoom-in" data-aos-delay="600">
                <h3>Innovation</h3>
                <p>We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits">
        <div className="container">
          <div className="benefits__wrapper">
            <h2 data-aos="fade-up" data-aos-delay="100">
              <span className='white-text'>Our</span>
              <span className='lime-text'> Benefits</span>
            </h2>
            <p className='benefits__p' data-aos="fade-up" data-aos-delay="200">
              At YourBank, we value our employees and are dedicated to their well-being and success. We offer a comprehensive range of benefits designed to support their personal and professional growth.
            </p>

            <div className="benefits__boxs">
              <div className="benefits__box" data-aos="flip-left" data-aos-delay="300">
                <div className="benefits__logo">
                  <img src="/valueicon1.png" alt="" />
                  <h3>Competitive Compensation</h3>
                </div>
                <p>We provide a competitive salary package that recognizes the skills and expertise of our employees. YourBank believes in rewarding exceptional performance and offering opportunities for financial growth.</p>
              </div>
              <div className="benefits__box" data-aos="flip-left" data-aos-delay="400">
                <div className="benefits__logo">
                  <img src="/valueicon2.png" alt="" />
                  <h3>Health and Wellness</h3>
                </div>
                <p>We prioritize the health and well-being of our employees by providing comprehensive medical, dental, and vision insurance plans. We also offer wellness programs, gym memberships, and resources to support a healthy lifestyle.</p>
              </div>
              <div className="benefits__box" data-aos="flip-left" data-aos-delay="500">
                <div className="benefits__logo">
                  <img src="/valueicon3.png" alt="" />
                  <h3>Retirement Planning</h3>
                </div>
                <p>YourBank is committed to helping employees plan for their future. We offer a retirement savings plan with a generous employer match to help them build a secure financial foundation for the long term.</p>
              </div>
              <div className="benefits__box" data-aos="flip-left" data-aos-delay="600">
                <div className="benefits__logo">
                  <img src="/valueicon4.png" alt="" />
                  <h3>Work-Life Balance</h3>
                </div>
                <p>We understand the importance of maintaining a healthy work-life balance. YourBank offers flexible work arrangements, paid time off, parental leave, and other programs that support employees in managing their personal and professional commitments.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Values;
