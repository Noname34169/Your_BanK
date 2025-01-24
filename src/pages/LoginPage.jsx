import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Подключаем стили для AOS

const LoginPage = () => {

  const login = (username) => {
    setUser({ username });
  }

  const [user, setUser] = useState(null);
  const [username, setUsername] = useState('');

  console.log(user);

  const handleSignup = (e) => {
    e.preventDefault();
    if (username) {
      login(username);
      alert(`Welcome back, ${username}`);
    }
  }

  React.useEffect(() => {
    AOS.init({ duration: 1000, easing: 'ease-out', once: true });
  }, []);

  return (
    <>
      <section className="login" data-aos="fade-up">
        <div className="container">
          <div className="login__wrapper">
            <h2 className='login-title' data-aos="fade-down">Login</h2>
            <p className='login-p' data-aos="fade-down" data-aos-delay="200">Welcome back! Please log in to access your account.</p>
            <form action="" onSubmit={handleSignup} data-aos="fade-up" data-aos-delay="400">
              <div className="login-box">
                <input
                  type="email"
                  placeholder='Enter your Email'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
                <input
                  type="text"
                  placeholder='Enter your Password'
                  data-aos="zoom-in"
                  data-aos-delay="600"
                />
              </div>

              <Link className='login__btn' to={'/'} data-aos="fade-up" data-aos-delay="700">Forgot Password?</Link>
              <button className='login__button signup__btn' type='submit' data-aos="fade-up" data-aos-delay="800">Login</button>
              <Link className='login__bttn signup__btn' to={'/signup'} data-aos="fade-up" data-aos-delay="900">Sign up</Link>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}

export default LoginPage;
