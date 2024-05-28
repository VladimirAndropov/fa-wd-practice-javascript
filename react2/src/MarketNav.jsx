export default function MarketNav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        е-магазин
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2 bg-dark"
            type="search"
            placeholder="ботинки"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0"
            type="submit"
          >
            Найти
          </button>
        </form>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">
              Заказы
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Избранное
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              Корзина
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
