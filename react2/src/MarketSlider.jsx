export default function MarketSlider() {
  return (
    <div id="carousel1" className="carousel slide" data-ride="carousel">
      <ol className="carousel-indicators">
        <li data-target="#carousel1" data-slide-to="0" className="active"></li>
        <li data-target="#carousel1" data-slide-to="1"></li>
        <li data-target="#carousel1" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <div
            className="carousel-item__inner"
            style={{ background: "#2A0134" }}
          >
            <h1>Футболки</h1>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="carousel-item__inner"
            style={{ background: "#062E03" }}
          >
            <h1>Рубашки</h1>
          </div>
        </div>
        <div className="carousel-item">
          <div
            className="carousel-item__inner"
            style={{ background: "#8B8000" }}
          >
            <h1>Пиджаки</h1>
          </div>
        </div>
      </div>
      <a
        class="carousel-control-prev"
        href="#carousel1"
        role="button"
        data-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a
        class="carousel-control-next"
        href="#carousel1"
        role="button"
        data-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
}
