import { useDispatch, useSelector } from 'react-redux';
import { authActuons } from '../store/slices/auth';
import classes from './Header.module.css';

const Header = () => {
  const isLogged = useSelector(state => state.auth.isLogged)
  const dispatch = useDispatch()

  const logoutHandler = () => {
    dispatch(authActuons.logout())
  }
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        <ul>
          {isLogged && 
          <>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
          </>
          }
          {isLogged && <li>
            <button onClick={logoutHandler}>Logout</button>
          </li>}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
