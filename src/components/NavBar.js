import React from 'react';
import {NavLink} from 'react-router-dom';
import logo from '../assets/icons/weblex.png';
import logoSmall from '../assets/icons/Vector-logo.png';
import telegramIcon from '../assets/icons/telegram-vector.png';
import whatsUpIcon from '../assets/icons/whatsup.png';
import phoneIcon from '../assets/icons/phone.png';
import purpleBall from '../assets/icons/purple_ball.png';

function NavBar(props) {
  return (
    <div id="navBar">
      <div className="container">
        <div className="navBar-container">
          <div className="purple-opacity"></div>
          <img className="purple-ball" src={purpleBall} alt="purple ball" />
          <div className="menu-container">
            <div className="logo-block-container">
              <div className="logo-block">
                <img className="logo-small" src={logoSmall} alt="logo small" />
                <img className="logo" src={logo} alt="logo" />
              </div>
              <p>крупный интегратор CRM в Росcии и ещё 8 странах</p>
            </div>
            <ul className="menu">
              <li><NavLink to="/">Услуги</NavLink></li>
              <li><NavLink to="/">Виджеты</NavLink></li>
              <li><NavLink to="/">Интеграции</NavLink></li>
              <li><NavLink to="/">Кейсы</NavLink></li>
              <li><NavLink to="/">Сертификаты</NavLink></li>
            </ul>
          </div>
          <div className="header-contacts">
            <div className="phone-number">+7 555 555-55-55</div>
            <div className="header-contacts">
              <img src={telegramIcon} alt=""/>
              <img src={phoneIcon} alt=""/>
              <img src={whatsUpIcon} alt=""/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
