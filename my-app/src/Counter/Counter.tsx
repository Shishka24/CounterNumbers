import React, { useState } from "react";
import Button from "../Button/Button";
import s from "./Counter.module.css";

export const Counter = () => {
  let [counter, setCounter] = useState(0);
  let start = 0;
  let maxValue = 5;

  const addCountHandler = () => {
    if (counter < maxValue) {
      setCounter(counter + 1);
    }
  };
  const resetCounter = () => {
    setCounter(start);
  };
  const countClassName = counter === maxValue ? s.red : "";
  return (
    <div className={s.item}>
      <div className={countClassName}>{counter}</div>
      <div className={s.buttonDiv}>
        <Button
          title="Inc"
          callBack={addCountHandler}
          counter={counter}
          isDisabled={counter === maxValue}
        />
        <Button
          title="Reset"
          callBack={resetCounter}
          counter={counter}
          isDisabled={counter === start}
        />
      </div>
    </div>
  );
};
