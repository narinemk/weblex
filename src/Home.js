import React from 'react';
import Wrapper from './components/Wrapper';
import redBall from './assets/icons/red_ball.png';
import smallRedBall from './assets/icons/red_little_ball.png';
import line from './assets/icons/Line.png';
// import purpleBall from './assets/icons/purple_ball.png';

function Home(props) {
  return (
    <Wrapper>
      <div className="home">
        <div className="container">
          <div className="home-container">
            <img className="big-ball" src={redBall} alt=""/>
            <div className="home-container-content">
              <div className="home-container-content-right">
                <p className="earn-more">Зарабатывайте больше
                  <br/>
                  <span> с WELBEX</span></p>
                <p className="sale-control">
                                    Развиваем и контролируем продажи за вас</p>
              </div>
              <div className="home-container-content-left">
                <div className="first">
                  <p>Вместе с
                    <span> бесплатной <br/> консультацией </span>
                                        мы дарим:</p>
                </div>
                <div className="second">
                  <div className="widgets">
                    <p>Виджеты</p>
                    <span>30 готовых решений</span>
                  </div>
                  <div className="dashboard">
                    <p>Dashboard</p>
                    <span>с показателями
                    вашего бизнеса</span>
                  </div>
                </div>
                <div className="third">
                  <div className="skype">
                    <p>Skype Аудит</p>
                    <span>отдела продаж и CRM системы</span>
                  </div>
                  <div className="days">
                    <p>35 дней</p>
                    <span>использования CRM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mobile-block">
              <div className="first-line"><p>
                <img src={line} alt=""/> Skype аудит</p>
              <p><img src={line} alt=""/> 30 виджетов</p> </div>
              <div className="second-line"><p>
                <img src={line} alt=""/> Dashboard</p>
              <p><img src={line} alt=""/> Месяц аmoCRM</p> </div>
            </div>
            <div className="home-container-button-block">
              <img src={smallRedBall} alt=""/>
              <button className="">Получить консультацию</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Home;
