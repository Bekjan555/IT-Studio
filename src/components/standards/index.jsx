import React from "react";
import img from "../../assets/standardsImg-1.png";
import img2 from "../../assets/standardsImg-2.svg";

const Standards = () => {
  return (
    <section className="standards flex">
      <div className="container">
        <div className="standards__main row flex">
          <div className="col-5">
            <h2 className="standards__title title">
              Высокие стандарты разработки
            </h2>
            <p className="standards__description description">
              Lorem Ipsum - это текст-"рыба", часто используемый в печати и
              вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов
              на латинице с начала XVI века. стандартной "рыбой" для текстов на
              латинице с начала XVI века.
            </p>
            <a href="#" className="standards__link link">
              Подробнее о компании
            </a>
          </div>
          <div className="col-6">
            <img src={img} alt="" />
          </div>
        </div>
        <div className="standards__columns row">
          <div className="standards__item col-1 row">
            <img src={img2} alt="" />
            <h3>125</h3>
            <p className="description">Our projects</p>
          </div>
          <div className="standards__item col-1 row">
            <img src={img2} alt="" />
            <h3>125</h3>
            <p className="description">Our projects</p>
          </div>
          <div className="standards__item col-1 row">
            <img src={img2} alt="" />
            <h3>125</h3>
            <p className="description">Our projects</p>
          </div>
          <div className="standards__item col-1 row">
            <img src={img2} alt="" />
            <h3>125</h3>
            <p className="description">Our projects</p>
          </div>
          <div className="standards__item col-1 row">
            <img src={img2} alt="" />
            <h3>125</h3>
            <p className="description">Our projects</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Standards;
