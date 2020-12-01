import React from "react";

const Video = () => {
  return (
    <section className="video">
      <div className="container">
        <div className="video__top flex">
          <h2 className="video__title title">Видео о нашей работе</h2>
          <p className="video__description description">
            Просто посмотрите, как мы работаем
          </p>
        </div>
        <div className="video__play">
        <iframe width="970" height="430" src="https://www.youtube.com/embed/FptK1cyofOs" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
      </div>
    </section>
  );
};

export default Video;
