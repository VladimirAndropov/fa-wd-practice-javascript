import React from 'react';
import './App.css';

function App() {
  return (
    <div id="wrapper">
      {/* Header */}
      <header id="header">
        <span className="avatar"><img src="images/avatar.jpg" alt="Avatar" /></span>
        <h1>Кулаков Сергей, 24 года</h1>
        <h4>Студент Финансового университета при Правительстве Российской Федерации</h4>
        <h4>направление 09.03.01 «Прикладная информатика», группа ЗБ-ПИ21-2</h4>
      </header>

      {/* Main */}
      <section id="main">
        {/* Thumbnails */}
        <section className="thumbnails">
          <div>
            <a href="images/fulls/01.png">
              <img src="images/thumbs/01.png" alt="Работаю в Ozon" />
              <h3>Работаю в Ozon</h3>
            </a>
            <a href="images/fulls/02.png">
              <img src="images/thumbs/02.png" alt="Старший специалист в отделе аналитики" />
              <h3>Старший специалист в отделе аналитики</h3>
            </a>
          </div>
          <div>
            <a href="images/fulls/03.png">
              <img src="images/thumbs/03.png" alt="Использую Python для автоматизации процессов на своей работе" />
              <h3>Использую Python для автоматизации процессов на своей работе</h3>
            </a>
            <a href="images/fulls/04.png">
              <img src="images/thumbs/04.png" alt="Оптимизирую самые перегруженные файлы Excel" />
              <h3>Оптимизирую самые перегруженные файлы Excel</h3>
            </a>
          </div>
          <div>
            <a href="images/fulls/05.png">
              <img src="images/thumbs/05.png" alt="Отец замечательной дочки" />
              <h3>Отец замечательной дочки</h3>
            </a>
            <a href="images/fulls/06.png">
              <img src="images/thumbs/06.png" alt="Сдавал первую сессию в роддоме" />
              <h3>Сдавал первую сессию в роддоме</h3>
            </a>
          </div>
        </section>
      </section>

      {/* Footer */}
      <footer id="footer">
        <p>Финансовый университет при Правительстве Российской Федерации</p>
      </footer>
    </div>
  );
}

export default App;
