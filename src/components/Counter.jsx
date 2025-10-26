import { useSelector, useDispatch } from 'react-redux';
import { arttir, azalt } from '../redux/counterSlice';

function Counter() {
  const value = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  console.log(value.count);

  return (
    <div className="counter flex items-center gap-4">
      <button className="p-2 bg-green-600" onClick={() => dispatch(arttir())}>
        +
      </button>
      <span>{value.count}</span>
      <button className="p-2 bg-red-600" onClick={() => dispatch(azalt())}>
        -
      </button>
    </div>
  );
}

export default Counter;
