import React, { useEffect } from 'react';
import './TabsWrap.scss';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import AOS from 'aos';
import 'aos/dist/aos.css';

const TabsWrap = () => {
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
      <section className="tabs" data-aos="fade-down-right">
        <div className="container">
          <Tabs>
            <TabList data-aos="fade-down-right" data-aos-delay="200">
              <div className="tabswrap__boxes">
                <h3>
                  <span className="white-text">Our</span>
                  <span className="lime-text">Products</span>
                </h3>
                <p className="tabswrap__p">
                  Discover a range of comprehensive and customizable banking products at YourBank, designed to suit your unique financial needs and aspirations
                </p>
              </div>

              <div className="div">
                <Tab
                  data-aos="fade-down-left"
                  data-aos-delay="400"
                >
                  For Individuals
                </Tab>
                <Tab
                  data-aos="fade-down-right"
                  data-aos-delay="600"
                >
                  For Businesses
                </Tab>
              </div>
            </TabList>

            {/* Используем противоположные направления анимации для боксов */}
            <div className="tabswrap__boxs">
              <div
                className="tabswrap__box"
                data-aos="fade-right"
                data-aos-delay="800"
              >
                <img src="/Iconbag.svg" alt="" />
                <h3>Checking Accounts</h3>
                <p>
                  Enjoy easy and convenient access to your funds with our range of checking account options. Benefit from features such as online and mobile banking, debit cards, and free ATM access.
                </p>
              </div>

              <div
                className="tabswrap__box tabwrap__box"
                data-aos="zoom-in"
                data-aos-delay="1000"
              >
                <img src="/iconarrow.svg" alt="" />
                <h3>Savings Accounts</h3>
                <p>
                  Build your savings with our competitive interest rates and flexible savings account options. Whether you're saving for a specific goal or want to grow your wealth over time, we have the right account for you.
                </p>
              </div>

              <div
                className="tabswrap__box"
                data-aos="fade-left"
                data-aos-delay="1200"
              >
                <img src="/icon_money.svg" alt="" />
                <h3>Loans and Mortgages</h3>
                <p>
                  Realize your dreams with our flexible loan and mortgage options. From personal loans to home mortgages, our experienced loan officers are here to guide you through the application process and help you secure the funds you need.
                </p>
              </div>
            </div>

            <div className="tabpanel__boxs">
              <h2
                data-aos="fade-up"
                data-aos-delay="1400"
              >
                Use Cases
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="1600"
              >
                At YourBank, we cater to the diverse needs of individuals and businesses alike, offering a wide range of financial solutions
              </p>
            </div>

            <TabPanel>
              <div className="tabspanel__wrapper">
                <img
                  src="/tabscontainer1.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="1800"
                />
                <div className="tabspanel__boxes">
                  <div className="tabpanel__box">
                    <h3>For Individuals</h3>
                    <p>
                      For individuals, our mortgage services pave the way to homeownership, and our flexible personal loans provide vital support during various life milestones. We also prioritize retirement planning, ensuring a financially secure future for our customers
                    </p>
                  </div>

                  <div className="tabspanel__boxs">
                    <div
                      className="tabspanel__box"
                      data-aos="fade-right"
                      data-aos-delay="2000"
                    >
                      <h1>78%</h1>
                      <p>Secure Retirement Planning</p>
                    </div>
                    <div
                      className="tabspanel__box tabspanel__box__active"
                      data-aos="fade-left"
                      data-aos-delay="2200"
                    >
                      <h1>63%</h1>
                      <p>Manageable Debt Consolidation</p>
                    </div>
                    <div
                      className="tabspanel__box"
                      data-aos="fade-right"
                      data-aos-delay="2400"
                    >
                      <h1>91%</h1>
                      <p>Reducing financial burdens</p>
                    </div>
                  </div>
                  <button
                    className="btn"
                    data-aos="fade-up"
                    data-aos-delay="2600"
                  >
                    Learn More
                  </button>
                </div>
              </div>
            </TabPanel>

            <TabPanel>
              <div className="tabspanel__wrapper">
                <div className="tabspanel__boxes">
                  <div className="tabpanel__box">
                    <h3>For Business</h3>
                    <p>
                      For businesses, we empower growth with working capital solutions that optimize cash flow, and our tailored financing options fuel business expansion. Whatever your financial aspirations, YourBank is committed to providing the right tools and support to achieve them
                    </p>
                  </div>

                  <div className="tabspanel__boxs">
                    <div
                      className="tabspanel__box"
                      data-aos="fade-right"
                      data-aos-delay="2800"
                    >
                      <h1>65%</h1>
                      <p>Cash Flow Management</p>
                    </div>
                    <div
                      className="tabspanel__box tabspanel__box__active"
                      data-aos="fade-left"
                      data-aos-delay="3000"
                    >
                      <h1>70%</h1>
                      <p>Drive Business Expansion</p>
                    </div>
                    <div
                      className="tabspanel__box"
                      data-aos="fade-right"
                      data-aos-delay="3200"
                    >
                      <h1>45%</h1>
                      <p>Streamline payroll processing</p>
                    </div>
                  </div>
                  <button
                    className="btn"
                    data-aos="fade-up"
                    data-aos-delay="3400"
                  >
                    Learn More
                  </button>
                </div>
                <img
                  src="/tabscontainer2.png"
                  alt=""
                  data-aos="zoom-in"
                  data-aos-delay="3600"
                />
              </div>
            </TabPanel>
          </Tabs>
        </div>
      </section>
    </>
  );
};

export default TabsWrap;
