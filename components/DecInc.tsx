import { Button } from "antd";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { incNumber, decNumber } from "@/actions/index";

function DecInc() {
  const state = useSelector((state:any) => state.changeTheNumber);
  const dispatch = useDispatch();
  console.log("store", state);
  return (
    <div className="container">
      <h1>Increament/Decrement counter...</h1>
      <h4>using React and Redux..</h4>

      <div className="quantity">
      <Button
          type="primary"
          onClick={() => dispatch(decNumber())}
        >
          -
        </Button>
        <input
          name="quantity"
          type="text"
          className="qunatity_input"
          value={state.count}
        />
        <Button
          type="primary"
          onClick={() => dispatch(incNumber())}
        >
          +
        </Button>
      </div>
    </div>
  );
}

export default DecInc;
