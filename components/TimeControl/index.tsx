import React, { useState } from "react";
import { useTimer } from "../../helper/client-store/data.store";
import { TimeControlStyled } from "./style";

const TimeControl = () => {
  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = +target.value;
    const val = value * 60;
    value > 0 && setTimer(val); // store selected time in state
  };
  // timer on global state
  const setTimer = useTimer(({ setTimer }) => setTimer);
  const timer = useTimer(({ timer }) => timer);

  return (
    <TimeControlStyled>
      <label>
        <input
          type="radio"
          name="time"
          value={1}
          checked={timer === 60}
          onChange={handleOnChange}
        />
        &nbsp;1m
      </label>
      <label>
        <input
          type="radio"
          name="time"
          value={2}
          onChange={handleOnChange}
          checked={timer === 120}
        />
        &nbsp;2m
      </label>
      <label>
        <input
          type="radio"
          name="time"
          value={5}
          onChange={handleOnChange}
          checked={timer === 300}
        />
        &nbsp;5m
      </label>
      <label>
        custom: &nbsp;
        <input type="number" min="3" onChange={handleOnChange} />
      </label>
    </TimeControlStyled>
  );
};

export default TimeControl;
