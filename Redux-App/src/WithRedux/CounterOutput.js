import React from "react";
import { useSelector } from "react-redux";

function CounterOutput() {
  const Counter = useSelector((state) => state.counter);


return <div>{Counter}</div>;

}

export default CounterOutput;
