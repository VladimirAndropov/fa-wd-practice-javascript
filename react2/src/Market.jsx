import { useMemo, useState } from "react";
import MarketNav from "./MarketNav";
import MarketSlider from "./MarketSlider";

const Block = ({ HeaderTag = "h2", headerText, className = "", children }) => (
  <div className={className}>
    <HeaderTag>{headerText}</HeaderTag>
    {children}
  </div>
);

const CountryFilter = ({ value, onChange, countries }) => (
  <Block headerText="Страна">
    <select className="round-field" onChange={onChange} value={value}>
      <option value="">любая</option>
      {countries.map((n) => (
        <option key={n}>{n}</option>
      ))}
    </select>
  </Block>
);

const SizeFilter = ({ value, onChange, sizes }) => (
  <Block headerText="Размер">
    {sizes.map((n) => (
      <div className="checkbox-container" key={n}>
        <input
          className="round-checkbox"
          type="checkbox"
          value={n}
          checked={value.includes(n)}
          onChange={onChange}
          id={n + "-checkbox"}
        />
        <label htmlFor={n + "-checkbox"} style={{ marginBottom: 0 }}>
          {n}
        </label>
      </div>
    ))}
  </Block>
);

const PriceInput = ({ index, ...props }) => (
  <input className="price-input round-field" data-index={index} {...props} />
);

const PriceFilter = ({ value, onChange }) => (
  <Block headerText="Цена">
    <PriceInput value={value[0]} onChange={onChange} index="0" />
    &nbsp;-&nbsp;
    <PriceInput value={value[1]} onChange={onChange} index="1" />
    &nbsp;руб&nbsp;
  </Block>
);

const GoodsList = ({ goods }) => (
  <div className="goods">
    {goods.map((n) => (
      <Block className="good" HeaderTag="h3" headerText={n.name} key={n.id}>
        <div className="good__image-container">
          <img src={n.image} className="good__image" />
        </div>
        <p>Цена: {n.cost}</p>
        <button className="round-field" data-art={n.name}>
          Купить
        </button>
      </Block>
    ))}
  </div>
);

export default function Market({ goods }) {
  const countries = useMemo(
    () => [...new Set(goods.map((n) => n.country))],
    [goods],
  );
  const sizes = useMemo(() => {
    const sortedSizes = ["S", "M", "L", "XL", "XXL"];
    return [...new Set(goods.map((n) => n.size))].sort(
      (a, b) =>
        sortedSizes.findIndex((x) => x == a) -
        sortedSizes.findIndex((x) => x == b),
    );
  }, [goods]);

  const [country, setCountry] = useState("");
  const [size, setSize] = useState([]);
  const [price, setPrice] = useState(["", ""]);

  const onCountryChange = (e) => setCountry(e.target.value);
  const onSizeChange = ({ target: { checked, value } }) => {
    setSize(
      !size.includes(value) && checked
        ? [...size, value]
        : size.filter((n) => n !== value),
    );
  };
  const onPriceChange = ({
    target: {
      value,
      dataset: { index },
    },
  }) => {
    setPrice(price.map((n, i) => (i === +index ? value : n)));
  };

  const filteredGoods = goods.filter(
    (good) =>
      (!country || good.country === country) &&
      (!size.length || size.includes(good.size)) &&
      (!price[0] || price[0] <= good.cost) &&
      (!price[1] || price[1] >= good.cost),
  );

  return (
    <div className="market">
      <MarketNav />
      <MarketSlider />
      <div className="filters">
        <h2>Футболки</h2>
        <hr className="hr-black" />
        <CountryFilter
          value={country}
          onChange={onCountryChange}
          countries={countries}
        />
        <hr className="hr-black" />
        <SizeFilter value={size} onChange={onSizeChange} sizes={sizes} />
        <hr className="hr-black" />
        <PriceFilter value={price} onChange={onPriceChange} />
      </div>
      <GoodsList goods={filteredGoods} />
    </div>
  );
}
