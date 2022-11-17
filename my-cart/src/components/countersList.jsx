import { type } from "@testing-library/user-event/dist/type";
import React, { useState } from "react";
import Counter from "./counter";

const CountersList = () => {
  const initialState = [
    { id: 0, value: 0, name: "Ложка", price: "200" },
    { id: 1, value: 0, name: "Вилка" },
    { id: 2, value: 0, name: "Тарелка" },
    { id: 3, value: 0, name: "Набор минималиста" },
    { id: 4, value: 0, name: "Ненужная вещь" },
  ];

  const [counters, setCounters] = useState(initialState);

  const handleDelete = (id) => {
    const newCounters = counters.filter((counter) => counter.id !== id);
    setCounters(newCounters);
  };

  const handleReset = () => {
    console.log("handleReset");
    setCounters(initialState);
  };

  const handleIncrement = (value, id) => {
    const newValue = counters.map((obj) =>
      obj.id === id ? { ...obj, value: value + 1 } : obj
    );
    setCounters(newValue);
  };

  const handleDecrement = (value, id) => {
    const newValue = counters.map((obj) =>
      obj.id === id ? { ...obj, value: value - 1 } : obj
    );
    setCounters(newValue);
  };

  return (
    <>
      {counters.map((count) => (
        <Counter
          key={count.id}
          {...count}
          onDelete={handleDelete}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      ))}
      <button className="btn btn-primary btn-sm m-2" onClick={handleReset}>
        Сброс
      </button>
    </>
  );
};

export default CountersList;
