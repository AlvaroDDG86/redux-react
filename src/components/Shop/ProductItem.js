import Card from '../UI/Card';
import classes from './ProductItem.module.css';
import { cartActions } from '../../store/slices/cart';
import { useDispatch } from 'react-redux';

const ProductItem = (props) => {
  const dispatch = useDispatch()
  const { title, price, description } = props;

  const addHandler = () => {
    dispatch(cartActions.addItem({
      title,
      price
    }))
  }

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>${price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          <button onClick={addHandler}>Add to Cart</button>
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
