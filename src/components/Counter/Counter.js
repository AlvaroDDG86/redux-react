import classes from './Counter.module.css';
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../../store/slices/counter';

const Counter = () => {
  const counter = useSelector(state => state.counter.counter)
  const showCounter = useSelector(state => state.counter.showCounter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }
  
  const increaseHandler = () => {
    dispatch(counterActions.increase(10))
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle())
  }
 
  const resetCounterHandler = () => {
    dispatch(counterActions.reset())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase 10</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={resetCounterHandler}>Reset</button>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      { showCounter && <div className={classes.value}>{counter}</div> }
    </main>
  );
};

export default Counter;
