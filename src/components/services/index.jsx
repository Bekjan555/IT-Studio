import React from "react";
import servicesImg from "../../assets/servicesImg.svg";

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="services__content text-center">
          <div className="services__text">
            <h2 className="title">
              Мы создаем мобильные приложения для крупных корпораций
            </h2>
            <p className="services__description description">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века.
            </p>
          </div>
          <div className="services__row row">
            <div className="services__columns column flex col-4">
              <img src={servicesImg} alt="" />
              <div className="column__text flex">
                <h3 className="column__title">Создание сайтов</h3>
                <p className="column__description">
                  Lorem Ipsum - это текст- "рыба", часто используе в печати и
                  вэб-дизайне.
                </p>
              </div>
            </div>
            <div className="services__columns column flex col-4">
              <img src={servicesImg} alt="" />
              <div className="column__text flex">
                <h3 className="column__title">Создание сайтов</h3>
                <p className="column__description">
                  Lorem Ipsum - это текст- "рыба", часто используе в печати и
                  вэб-дизайне.
                </p>
              </div>
            </div>
            <div className="services__columns column flex col-4">
              <img src={servicesImg} alt="" />
              <div className="column__text flex">
                <h3 className="column__title">Создание сайтов</h3>
                <p className="column__description">
                  Lorem Ipsum - это текст- "рыба", часто используе в печати и
                  вэб-дизайне.
                </p>
              </div>
            </div>
          </div>
          <button className="services__btn btn">Все услуги</button>
        </div>
        {/* test */}
      </div>
    </section>
  );
};

export default Services;
