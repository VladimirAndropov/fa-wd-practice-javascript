import { React, useState } from "react";

export default function CounterButton() {
  const [count, setCount] = useState(0);

  return (
    <div className="align-vertically">
      <p>Вы нажали {count} раз</p>
      <button className="round-field" onClick={() => setCount(count + 1)}>
        Нажми на меня
      </button>
    </div>
  );
}
