import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/features/counter/counterSlice";

const Counter = () => {
  const { counte } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div>
      <br />
      <button onClick={() => dispatch(increment())}>Incremen</button>
      <h3>{counte}</h3>
      <button onClick={() => dispatch(decrement(5))}>Decremen by 5</button>
    </div>
  );
};

export default Counter;
