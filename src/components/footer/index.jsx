import React from "react";
import letter from "../../assets/letter.svg";
import call from "../../assets/call.svg";
import location from "../../assets/location.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__row row">
          <div className="col-3">
            <div className="footer__item">
              <h2 className="footer__title title">Контактная информация</h2>
              <ul className="footer__list flex">
                <li className="footer__contact">
                    <img className="footer__img" src={letter} alt="" />
                  <a href="#" className="footer__link">
                    test@test.ru
                  </a>
                </li>
                <li className="footer__contact">
                    <img className="footer__img" src={call} alt="" />
                  <a href="#" className="footer__link">
                    +8 777 555 66 99
                  </a>
                </li>
                <li className="footer__contact">
                    <img className="footer__img" src={location} alt="" />
                  <a href="#" className="footer__link">
                    Москва, Бульвар Ленина 33
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="footer__item">
              <h2 className="footer__title title">Основные ссылки</h2>
              <ul className="footer__list flex">
                <li className="footer__text">
                <a href="#" className="footer__link footer__arrow">
                  Главная
                </a>
                </li>
                <li className="footer__text">
                  <a href="#" className="footer__link footer__arrow">
                  Наши проекты
                </a>
                </li>
                <li className="footer__text">
                <a href="#" className="footer__link footer__arrow">
                  Наши услуги
                </a>
                </li>
                <li className="footer__text">
                  <a href="#" className="footer__link footer__arrow">
                  Контакты
                </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="footer__item">
              <h2 className="footer__title title">Наши проекты</h2>
              <ul className="footer__list flex">
                <li className="footer__text">
                    <a href="#" className="footer__link footer__arrow">
                  РосНано
                </a>
                </li>
                <li className="footer__text">
                    <a href="#" className="footer__link footer__arrow">
                  Сколково
                </a>
                </li>
                <li className="footer__text">
                    <a href="#" className="footer__link footer__arrow">
                  Проект “Восток”
                </a>
                </li>
                <li className="footer__text">
                    <a href="#" className="footer__link footer__arrow">
                  ТЭЦ Калининграда
                </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-3">
            <div className="footer__item">
              <h2 className="footer__title title">Социальные сети</h2>
              <ul className="footer__list flex">
                <li className="footer__text">
                  <a href="#" className="footer__link footer__arrow">
                  VK.com
                </a>
                </li>
                <li className="footer__text">
                  <a href="#" className="footer__link footer__arrow">
                  Instagram
                </a>
                </li>
                <li className="footer__text">
                  <a href="#" className="footer__link footer__arrow">
                  Facebook
                </a>
                </li>
                <li className="footer__text">
                  <a href="#" className="footer__link footer__arrow">
                  Twitter
                </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer__bottom flex">
          <span className="footer__description description">
          (с) 2019. Все права защищены.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
