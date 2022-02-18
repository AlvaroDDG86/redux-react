import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const counter = useSelector(state => state.counter)
  const showCounter = useSelector(state => state.showCounter)
  const dispatch = useDispatch()

  const incrementHandler = () => {
    dispatch({ type: 'increment'})
  }
  
  const increaseHandler = () => {
    dispatch({ type: 'increase', payload: 10 })
  }

  const decrementHandler = () => {
    dispatch({ type: 'decrement'})
  }

  const toggleCounterHandler = () => {
    dispatch({ type: 'toggleShowCounter' })
  }
 
  const resetCounterHandler = () => {
    dispatch({ type: 'reset' })
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
