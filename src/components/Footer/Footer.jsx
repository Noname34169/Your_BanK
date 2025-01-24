import React, { useEffect } from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';

const Footer = () => {

  return (
    <>
      <footer className="footer">
        <div className="footer__wrapper">
          <div className="footer__boxes">
            <Link
              to="/"
              className="footer__logo"
            >
              <img src="/headerlogo.png" alt="Logo" />
              <h1>YourBanK</h1>
            </Link>

            <div className="footer__wrap">
              <div
                className={`footer__footer`}
              >
                <nav className="footer__menu">
                  <Link to="/">Home</Link>
                  <Link to="/careers">Careers</Link>
                  <Link to="/about">About</Link>
                  <Link to="/security">Security</Link>
                </nav>
              </div>
            </div>
          </div>

          <span></span>

          <div className="footer__boxs">
            <div
              className="footer__email"
            >
              <img src="/emailicon.png" alt="" />
              <p>hello@skillbirdge.com</p>
            </div>
            <div
              className="footer__phone"
            >
              <img src="/phoneicon.png" alt="" />
              <p>+91 91813 23 2309</p>
            </div>
            <div
              className="footer__location"
            >
              <img src="/locationicon.png" alt="" />
              <p>Somewhere in the World</p>
            </div>
          </div>

          <span></span>

          <div
            className="footer__box"
          >
            <div
              className="footer__icons"
            >
              <img
                src="/Facebook__logo.png"
                alt=""
              />
              <img
                src="/Twitter__logo.png"
                alt=""
              />
              <img
                src="/LinkedIn__logo.png"
                alt=""
              />
            </div>
            <p
            >
              YourBank All Rights Reserved
            </p>
            <p
            >
              Privacy Policy | Terms of Service
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
