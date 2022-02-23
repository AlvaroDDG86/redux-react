import { useDispatch, useSelector } from 'react-redux';
import classes from './CartButton.module.css';
import { uiActions } from '../../store/slices/ui';

const CartButton = (props) => {
  const dispatch = useDispatch()
  const total = useSelector(state => state.cart.total)
  const toggleHandler = () => {
    dispatch(uiActions.toggleCart())
  }
  return (
    <button onClick={toggleHandler} className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{ total }</span>
    </button>
  );
};

export default CartButton;
