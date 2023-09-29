import { useDispatch, useSelector } from "react-redux";
import {
  decrement,
  increment,
  incrementByAction,
} from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { counte } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <button onClick={() => dispatch(incrementByAction(5))}>
        Incremen by 5
      </button>
      <br />
      <button onClick={() => dispatch(increment())}>Incremen</button>
      <h3>{counte}</h3>
      <button onClick={() => dispatch(decrement(5))}>Decremen byn 5</button>
    </div>
  );
};

export default Counter;
