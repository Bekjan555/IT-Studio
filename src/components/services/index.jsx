import React from "react";
import servicesImg from "../../assets/servicesImg.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__content text-center">

          <h2 className="services__title title">
            Мы создаем мобильные приложения для крупных корпораций
          </h2>
          <p className="services__descriptopn description">
            Lorem Ipsum - это текст-"рыба", часто используемый в печати и
            вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на
            латинице с начала XVI века.
          </p>

          <div className="services__row row">
            <div className="services__columns flex col-4">
              <img src={servicesImg} alt="" />
              <h3 className="services__subtitle">Создание сайтов</h3>
              <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
            </div>
            <div className="services__columns flex col-4">
              <img src={servicesImg} alt="" />
              <h3 className="services__subtitle">Создание сайтов</h3>
              <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
            </div>
            <div className="services__columns flex col-4">
              <img src={servicesImg} alt="" />
              <h3 className="services__subtitle">Создание сайтов</h3>
              <p>Lorem Ipsum - это текст- "рыба", часто используе в печати и вэб-дизайне.</p>
            </div>
          </div>
          <button className="services__btn btn">
            Все услуги
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
