import React, { useEffect } from 'react'
import './SecurityWrap.scss'
import AOS from 'aos'
import 'aos/dist/aos.css'

const SecurityWrap = () => {
  useEffect(() => {
    // Инициализируем AOS
    AOS.init({ duration: 1200, easing: 'ease-out', once: true })
  }, [])

  return (
    <>
      <section className="securitywrap">
        <div className="container">
          <div className="securitywrap__wrapper">
            <div
              className="securitywrap__wrap"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              {/* Изображение с эффектом увеличения */}
              <img
                className="securitywrap__startimg"
                src="/securitycontainer.png"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="300"
              />
              <img
                className="securitywrap__startimgadoptive"
                src="/securitycontaineradoptive.png"
                alt=""
                data-aos="zoom-in"
                data-aos-delay="400"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SecurityWrap
