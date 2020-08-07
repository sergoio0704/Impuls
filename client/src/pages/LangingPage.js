import React from 'react'

export const LandingPage = () => {
  return (
    <div>
      <header>
        <div className="container">
          {/*Navigation*/}
          <div className="nav">
            <div className="nav__logo">
              <img className="nav__img" src="../img/Logo.png" alt="Logo"/>
            </div>
            <div className="nav__menu">
              <ul className="nav__list">
                <li className="nav__item">почему мы?</li>
                <li className="nav__item">обучение</li>
                <li className="nav__item">преподаватели</li>
                <li className="nav__item">отзывы</li>
                <li className="nav__item">faq</li>
                <li className="nav__item">личный кабинет</li>
              </ul>
            </div>
          </div>
          {/*Form to callback*/}
          <div className="consultation">
            <div className="consultation__tagline">Твой вектор развития</div>
            <div className="consultation__title">
              Онлайн школа "Импульс"
              <br />
              Подготовка к ЕГЭ и ОГЭ
            </div>
            <small className="consultation__desc">
              Запишись на консультацию по телефону и распланируй 
              <br />
              свою подготовку уже сейчас!
            </small>
            <form 
              className="consultation__form" 
              method="POST" 
              action=""
            >
              <input 
                type="text"
                name="phone" 
                className="consultation__phone" 
                id="consultationPhone" 
                placeholder="+7 910 888 23 23"
              />
              <button className="consultation__button" type="submit" value="Записаться">Записаться</button>
            </form>
            <small className="consultation__policy">
              Нажимая на кнопку, вы соглашаетесь с 
              <span> </span>
              <a href="/" className="consultation__policy-link"> 
                 Политикой 
                <br /> 
                конфиденциальности
              </a>
            </small>
            <div className="consultation_social">
              <i className="fab fa-vk"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-youtube"></i>
            </div>
          </div>      
        </div>       
        <div className="intro">     
          <div className="video"> 
            <video 
              className="video__media"
              src="../video/header_1.mp4" 
              autoPlay muted loop>   
            </video>
          </div>
        </div>
      </header>
      <main>
        <section className="about">    
          <div className="gray-bg">
            <div className="container">
                <div className="about__us">
                  <div className="about__title title">
                    Почему мы?
                  </div>
                  <div className="about__us-desc">
                    Более 2000 учеников в 2019 году со средним баллом на ЕГЭ - 84. 
                    <br />
                    Все наши преподаватели учились в ВШЭ, МГУ, МГТУ или МФТИ и 
                    <br />
                    имеют стаж преподавания более 3 лет.
                  </div>
                  <div className="about__us-cards">
                    <div className="about__us-card">
                      <img src="../img/svg/Play.svg" alt="play" />
                      <p>Своя платформа с видеоматериалами по каждой теме</p>
                    </div>
                    <div className="about__us-card">
                      <img src="../img/svg/Boy1300x.png" alt="boy" />
                      <p>Онлайн занятия 2 раза в неделю</p>
                    </div>
                    <div className="about__us-card">
                      <img src="../img/svg/Book.svg" alt="book" />
                      <p>Всё обучение проходит в малых группах</p>
                    </div>
                    <div className="about__us-card">
                      <img src="../img/svg/Vk.svg" alt="vk" />
                      <p>Личный разбор домашнего задания</p>
                    </div>
                    <div className="about__us-card">
                      <img src="../img/svg/Calendar.svg" alt="calendar" />
                      <p>Гибкий график, но строгие дедлайны</p>
                    </div>
                    <div className="about__us-card">
                      <img src="../img/svg/Stars.svg" alt="stars" />
                      <p>Средний балл наших учеников на ЕГЭ - 84</p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
          <div className="white-bg">
            <div className="container">
              <div className="about__stat">
                <div className="about__stat-title title">
                  С нами уже подготовились к
                </div>
                <div className="about__stat-cards">
                  <div className="about__stat-card">
                  <div className="about__stat-card-title">ОГЭ</div>
                  <div className="about__stat-card-circle" >
                    <strong>431</strong>
                    ученик
                  </div>
                  <div className="about__stat-card-res">358 пятерок</div>
                  </div>
                  <div className="about__stat-card">
                  <div className="about__stat-card-title">ЕГЭ</div>
                  <div className="about__stat-card-circle">
                    <strong>1786</strong>
                    учеников      
                  </div>
                  <div className="about__stat-card-res">
                    84 средний
                    <br />
                    балл  
                  </div>  
                  </div>
                  <div className="about__stat-card">
                  <div className="about__stat-card-title">Олимпиадам</div>
                  <div className="about__stat-card-circle">
                    <strong>112</strong>
                    учеников
                  </div>
                  <div className="about__stat-card-res">
                    93 призера и
                    <br />
                    победителей  
                  </div>     
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="training">
          <div className="darkgray-bg">
            <div className="container">             
              <div className="training__title title">
                Как проходит обучение?
              </div>
              <div className="training__row row-text row-1">
                <div className="training__item">
                  Выставление целей и 
                  <br />
                  определение уровня знаний
                </div>
                <div className="training__item">
                  Изучений лекций и
                  <br /> 
                  семинаров на платформе
                </div>
                <div className="training__item">
                  Онлайн занятия 2 
                  <br />
                  раза в неделю 
                </div>
              </div>
              <div className="training__row row-img row-2">
                <img src="../img/training/boy.png" alt="boy" />
                <img src="../img/training/up-down-arrow.png" alt="arrow" />
                <img src="../img/training/stars.png" alt="stars" />
                <img src="../img/training/down-up-arrow.png" alt="arrow" />
                <img src="../img/training/play.png" alt="play" />
                <img src="../img/training/up-down-arrow.png" alt="arrow" />
                <img src="../img/training/calendar.png" alt="calendar" />
                <img src="../img/training/down-up-arrow.png" alt="arrow" />
                <img src="../img/training/book.png" alt="book" />
                <img src="../img/training/up-down-arrow.png" alt="arrow" />
                <img src="../img/training/man.png" alt="man" />
                <img src="../img/training/down-up-arrow.png" alt="arrow" />
                <img src="../img/training/ask.png" alt="ask" />
              </div>
              <div className="training__row row-text row-3">
                <div className="training__item">
                  Прохождение 
                  <br />
                  вводного урока 
                </div>
                <div className="training__item">
                  Знакомства с 
                  <br /> 
                  платформой
                </div>
                <div className="training__item">
                  Выполнение и проверка 
                  <br />
                  домашек и контрольных
                </div>
                <div className="training__item">
                  Консультация с 
                  <br />
                  преподавателем
                </div>
              </div>
              <div className="training__row row-img row-4">
                <img src="../img/training/left-right-arrow.png" alt="arrow" />
                <img src="../img/training/medals.png" alt="medals" />
                <img src="../img/training/right-left-arrow.png" alt="arrow" />
              </div>
              <div className="training__row row-text row-5">
                <div className="training__item">Достижение цели!</div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}