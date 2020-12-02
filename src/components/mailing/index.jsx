import React from "react";

const Mailing = () => {
  return (
    <section className="mailing">
      <div className="container">
        <div className="mailing__top text-center">
          <h2 className="mailing__title title">Подпишитесь на нашу рассылку</h2>
          <p className="mailing__description description">
            Полезные статьи, акции, новости - получите все это сейчас!
          </p>
          <form className="mailing__form" action="subscription">
            <input
              className="mailing__mail"
              name="email"
              type="text"
              placeholder="Ваш e-mail"
            />
            <button className="btn mailing__btn">Подписаться</button>
          </form>
          <p className="mailing__description2 description">
            Мы не шлем спам, и передаем никому ваши данные.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mailing;
