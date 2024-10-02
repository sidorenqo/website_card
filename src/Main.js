function Main() {
  return (
    <div>
      <header>
        <div className="menu">
          <a href="#">Обо мне</a>
          <a href="#">Услуги</a>
          <a href="#">Портфолио</a>
          <a href="#">Отзывы</a>
          <a href="#">Гарантии</a>
        </div>

        <button className="btn">Связаться</button>

        <a href="https://t.me" target="_blank" className="icon telegram" rel="noreferrer"></a>
        <a href="https://vk.com" target="_blank" className="icon vk" rel="noreferrer"></a>

        <div className="switch">
          <div className="theme light"></div>
        </div>
      </header>
    </div>
  );
}

export default Main;
