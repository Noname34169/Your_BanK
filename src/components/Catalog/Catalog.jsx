import React, { useEffect } from 'react'
import './Catalog.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Catalog = () => {

  useEffect(() => {
    // Инициализация AOS
    AOS.init({ duration: 1200, easing: 'ease-out', once: true })
  }, [])

  return (
    <>
      <section className="catalog">
        <div className="container">
          {/* Заголовок с эффектом появления */}
          <h1 data-aos="fade-up" data-aos-delay="200">
            <span className="white-text">How We</span>
            <span className="lime-text"> Protect You</span>
          </h1>

          {/* Параграф с эффектом появления */}
          <p data-aos="fade-up" data-aos-delay="400">
            At YourBank, we prioritize the security and confidentiality of your financial information. Our state-of-the-art encryption technology and stringent data protection measures ensure your assets and transactions are safeguarded at all times.
          </p>

          <div className="catalog__boxes">
            {/* Изображения с анимацией увеличения */}
            <img 
              className='catalog__startimg' 
              src="/secrity__textcontainer.png" 
              alt="" 
              data-aos="zoom-in" 
              data-aos-delay="500"
            />
            <img 
              className='catalog__startimgadoptive' 
              src="/secrity__textcontaineradoptive.png" 
              alt="" 
              data-aos="zoom-in" 
              data-aos-delay="600"
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default Catalog
