import React from 'react';
import telegramIcon from '../assets/icons/telegram-vector.png';
import phoneIcon from '../assets/icons/phone.png';
import whatsUpIcon from '../assets/icons/whatsup.png';

function Footer(props) {
  return (
    <div id="footer">
      <div className="container">
        <div className="footer-container">
          <div className="company-menu-block">
            <div className="company-block">
              <p>О компании</p>
              <ul className="about-company">
                <li>Партнёрская программа</li>
                <li>Вакансии</li>
              </ul>
            </div>
            <div className="footer-menu-block">
              <p>Меню</p>
              <ul className="footer-menu">
                <li>Расчёт стоимости</li>
                <li>Услуги</li>
                <li>Виджеты</li>
                <li>Интеграции</li>
                <li>Наши клиенты</li>
                <li>Кейсы</li>
                <li>Благодарственные письма</li>
                <li>Сертификаты</li>
                <li>Блог на Youtube</li>
                <li>Вопрос / Ответ</li>
              </ul>
            </div>
          </div>
          <div className="footer-contacts">
            <p>Контакты</p>
            <div>+7 555 555-55-55</div>
            <div className="image-block">
              <img src={telegramIcon} alt=""/>
              <img src={phoneIcon} alt=""/>
              <img src={whatsUpIcon} alt=""/>
            </div>
            <div className="address">Москва, Путевой проезд 3с1, к 902</div>
            <div className="copyright">©WELBEX 2022. Все права защищены.</div>
            <div className="confidential">
              <a href="/">Политика конфиденциальности</a></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
