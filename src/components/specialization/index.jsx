import React from "react";
import specializationImg from "../../assets/specialization.png";

const Specialization = () => {
  return (
    <section className="specialization">
      <div className="container">
        <div className="specialization__content">
          <div className="specialization__top row">
            <h2 className="specialization__title title">
              Наши работы, на которых мы специализируемся
            </h2>
            <a className="specialization__btn btn">Все услуги</a>
          </div>
          <div className="specialization__row row">
            <div className="specialization__column">
              <img src={specializationImg} alt="" />
              <h3 className="specialization__subtitle">
                <span>01.</span>Исследование и упаковка
              </h3>
              <p className="specialization_description description">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века.
              </p>
              <a href="#" className="specialization__link link">
                Подробнее
              </a>
            </div>
            <div className="specialization__column">
              <img src={specializationImg} alt="" />
              <h3 className="specialization__subtitle">
                <span>01.</span>Исследование и упаковка
              </h3>
              <p className="specialization_description description">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века.
              </p>
              <a href="#" className="specialization__link link">
                Подробнее
              </a>
            </div>
            <div className="specialization__column">
              <img src={specializationImg} alt="" />
              <h3 className="specialization__subtitle">
                <span>01.</span>Исследование и упаковка
              </h3>
              <p className="specialization_description description">
                Lorem Ipsum - это текст-"рыба", часто используемый в печати и
                вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                текстов на латинице с начала XVI века.
              </p>
              <a href="#" className="specialization__link link">
                Подробнее
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specialization;
