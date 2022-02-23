import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = () => {
  const { showCart, items } = useSelector(state => state.cart)
  if (!showCart) return null
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      <ul>
        {
          items.map(item => {
            return (<CartItem
              key={item.title}
              item={item}
            />)
          })
        }
      </ul>
    </Card>
  );
};

export default Cart;
