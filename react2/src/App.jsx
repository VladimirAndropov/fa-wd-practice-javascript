import "./styles.css";
import React from "react";
import CounterButton from "./CounterButton";
import Magazine from "./Magazine";
import Market from "./Market";
import TodoApp from "./TodoApp";
import LoginForm from "./LoginForm";
import VideoList from "./VideoList";
import * as pcg from "@alisey/pcg32";

export default function App() {
  return (
    <div className="align-vertically">
      <p />
      <CounterButton />
      <hr className="hr-white" />
      <Magazine />
      <hr className="hr-white" />
      <Market goods={GOODS} />
      <hr className="hr-white" />
      <TodoApp />
      <hr className="hr-white" />
      <LoginForm />
      <hr className="hr-white" />
      <VideoList videos={videos} emptyHeading="Видео кончились :(" />
    </div>
  );
}

const countries = ["Турция", "Россия", "Китай", "Узбекистан", "Франция"];
const images = [
  "https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1576566588028-4147f3842f27?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
];
const sizes = ["S", "M", "L", "XL", "XXL"];

const minCost = 300;
const maxCost = 3000;
const numGoods = 20;

const GOODS = [];
pcg.setState(1337n);
for (let i = 0; i < numGoods; i++) {
  GOODS.push({
    sex: "male",
    name: `Футболка №${i + 1}`,
    cost: pcg.randomInt(maxCost - minCost + 1) + minCost,
    country: countries[pcg.randomInt(countries.length)],
    image: images[pcg.randomInt(images.length)],
    size: sizes[pcg.randomInt(sizes.length)],
  });
}

const videos = [
  {
    title: "Первое видео",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1557683316-973673baf926?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Второе видео",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1554034483-04fda0d3507b?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
  {
    title: "Третье видео",
    thumbnailUrl:
      "https://images.unsplash.com/photo-1579546929518-9e396f3cc809?q=80&w=200&auto=format&fit=crop&ixlib=rb-4.0.3",
  },
].map(({ title, thumbnailUrl }, id) => {
  return {
    id,
    title,
    description: "Описание видео",
    url: "#",
    thumbnailUrl,
  };
});
