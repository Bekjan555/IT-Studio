import React from 'react';


const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header__row row">
                    <nav className="header__nav nav">
                        <ul className="nav__menu row">
                            <li className="nav__item"><a href="#" className="nav__link">Главная</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">Наши проекты</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">Услуги</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">Новости</a></li>
                            <li className="nav__item"><a href="#" className="nav__link">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header;
