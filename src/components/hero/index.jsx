import React from 'react';

const Hero = () => {
    return (
        <section className="hero">
            <div className="container">
                <div className="hero__content flex text-center">
                    <h2 className="hero__subtitle">Передовая IT студия</h2>
                    <h1 className="hero__title">Мы создаем легкие решения сложных задач и проблем</h1>
                    <button className="hero__btn btn" href="#">Наши проекты</button>
                </div>
            </div>
        </section>
    )
}

export default Hero;
