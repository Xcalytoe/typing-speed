import React, { useEffect, useState } from "react";
import { useTimer } from "../helper/client-store/data.store";

const TimeCountDown = ({ countActive }: { countActive: boolean }) => {
  const [countDown, setCountDown] = useState(60);
  // timer on global state
  const timer = useTimer(({ timer }) => timer);

  useEffect(() => {
    setCountDown(timer);
  }, [timer]);

  useEffect(() => {
    if (countActive) {
      let interval = setInterval(() => {
        setCountDown((prevCount) => {
          if (prevCount === 1) {
            clearInterval(interval);
          }
          return prevCount - 1;
        });
      }, 1000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [countActive]);

  return (
    <div>
      Time left:{" "}
      <span style={countDown < 15 ? { color: "red" } : {}}>{countDown}s</span>
    </div>
  );
};

export default TimeCountDown;
