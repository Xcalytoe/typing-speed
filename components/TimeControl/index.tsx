import React, { useState } from "react";
import { TimeControlStyled } from "./style";

const TimeControl = () => {
  const [time, setTime] = useState(60);
  const handleOnChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    const value = +target.value;
    const val = value * 60;
    setTime(val);
  };
  console.log(time);
  return (
    <TimeControlStyled>
      <label>
        <input
          type="radio"
          name="time"
          value={1}
          checked={time === 60}
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
          checked={time === 120}
        />
        &nbsp;2m
      </label>
      <label>
        <input
          type="radio"
          name="time"
          value={5}
          onChange={handleOnChange}
          checked={time === 3000}
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
