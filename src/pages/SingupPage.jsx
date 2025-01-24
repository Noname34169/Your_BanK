import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

const SignupPage = () => {
  const [firstname, setFirstname] = useState("");
  const [secondname, setSecondname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [activeProvider, setActiveProvider] = useState(null); // Текущая активная иконка
  const [accounts, setAccounts] = useState([]); // Список аккаунтов
  const [loading, setLoading] = useState(false); // Состояние загрузки

  useEffect(() => {
    AOS.init({ duration: 1000, easing: "ease-out", once: true });
  }, []);

  // Функция для генерации случайного пароля
  const generateRandomPassword = (length = 12) => {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";
    let password = "";
    for (let i = 0; i < length; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return password;
  };

  // Симуляция API-запроса для получения списка аккаунтов
  const fetchAccounts = async (provider) => {
    setLoading(true);
    setAccounts([]);
    try {
      let response;
      switch (provider) {
        case "google":
          response = await simulateApiCall(["user1@gmail.com", "user2@gmail.com"]);
          break;
        case "facebook":
          response = await simulateApiCall(["facebook_user1@gmail.com", "facebook_user2@gmail.com"]);
          break;
        case "iphone":
          response = await simulateApiCall(["iphone_user1@icloud.com", "iphone_user2@icloud.com"]);
          break;
        default:
          response = [];
      }
      setAccounts(response);
    } catch (error) {
      console.error("Ошибка при получении данных:", error);
      setAccounts([]);
    }
    setLoading(false);
  };

  // Обработчик нажатия на иконку
  const handleIconClick = (provider) => {
    setActiveProvider(provider);
    fetchAccounts(provider);
  };

  // Обработчик выбора аккаунта
  const handleAccountSelect = async (account) => {
    setLoading(true);
    try {
      const accountDetails = await simulateAccountDetailsApi(account);
      setFirstname(accountDetails.firstName);
      setSecondname(accountDetails.lastName);
      setEmail(accountDetails.email);
      setPassword(generateRandomPassword()); // Генерация случайного пароля
      setActiveProvider(null); // Закрываем плашку
      setAccounts([]); // Очищаем список аккаунтов
    } catch (error) {
      console.error("Ошибка при получении деталей аккаунта:", error);
    }
    setLoading(false);
  };

  const handleSignup = (e) => {
    e.preventDefault();
    if (firstname && secondname && email && password) {
      alert(`User ${firstname} registered successfully with password: ${password}`);
      setFirstname("");
      setSecondname("");
      setEmail("");
      setPassword("");
    } else {
      alert("Please fill out all fields before signing up");
    }
  };

  return (
    <>
      <section className="login" data-aos="fade-up">
        <div className="container">
          <div className="login__wrapper">
            <h2 className="login-title" data-aos="fade-down">Sign Up</h2>
            <p className="login-p" data-aos="fade-down" data-aos-delay="200">
              Join our community today! Create an account to unlock exclusive features and personalized experiences.
            </p>


            {activeProvider && (
              <div className="popup">
                <div className="popup-content">
                  <h3>Аккаунты {activeProvider.charAt(0).toUpperCase() + activeProvider.slice(1)}</h3>
                  {loading ? (
                    <p>Загрузка...</p>
                  ) : accounts.length > 0 ? (
                    <ul>
                      {accounts.map((account, index) => (
                        <li key={index} onClick={() => handleAccountSelect(account)}>
                          {account}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p>Аккаунтов не найдено</p>
                  )}
                  <button onClick={() => setActiveProvider(null)} className="close-btn">
                    Закрыть
                  </button>
                </div>
              </div>
            )}

            <form action="" onSubmit={handleSignup} data-aos="fade-up" data-aos-delay="400">
              <div className="login-box">
                <input
                  type="text"
                  placeholder="Enter First Name"
                  value={firstname}
                  onChange={(e) => setFirstname(e.target.value)}
                  data-aos="zoom-in"
                  data-aos-delay="500"
                />
                <input
                  type="text"
                  placeholder="Enter Last Name"
                  value={secondname}
                  onChange={(e) => setSecondname(e.target.value)}
                  data-aos="zoom-in"
                  data-aos-delay="600"
                />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  data-aos="zoom-in"
                  data-aos-delay="700"
                />
                <input
                  type="password"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  data-aos="zoom-in"
                  data-aos-delay="800"
                />
              </div>

              <button className="login__button signup__btn" type="submit" data-aos="fade-up" data-aos-delay="900">
                Sign up
              </button>
              <Link className="login__bttn signup__btn" to={'/login'} data-aos="fade-up" data-aos-delay="1000">
                Already have an account? Login
              </Link>
            </form>

            <div className="icons-title">

            <div className="icons-box">
              <span></span>
              <p>Or Continue with</p>
              <span></span>
            </div>


            <div className="icons">
              <button onClick={() => handleIconClick("google")} className="icon google">
                <img src="/Google-icon.png" alt="" />
                
              </button>
              <button onClick={() => handleIconClick("facebook")} className="icon facebook">
              <img src="/Facebook-icon.png" alt="" />
              </button>
              <button onClick={() => handleIconClick("iphone")} className="icon iphone">
                <img src="/Apple-icon.png" alt="" />
              </button>
            </div>
          </div>              
            </div>






        </div>
      </section>
    </>
  );
};

// Симуляция API-запросов
const simulateApiCall = (data) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(data), 1000);
  });
};

const simulateAccountDetailsApi = (account) => {
  return new Promise((resolve) => {
    setTimeout(
      () =>
        resolve({
          firstName: "Noname",
          lastName: "Skyfov",
          email: account,
          password: "********",
        }),
      1000
    );
  });
};

export default SignupPage;
