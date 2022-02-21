import Counter from './components/Counter/Counter';
import Auth from './components/Auth/Auth'
import UserProfile from './components/UserProfile/UserProfile';
import Header from './components/Header/Header'
import { useSelector } from 'react-redux';


function App() {
  const isLogged = useSelector(state => state.auth.isLogged)
  return (
    <>
      <Header />
      {!isLogged && <Auth />}
      {isLogged && <UserProfile />}
      {isLogged && <Counter />}
    </>
  );
}

export default App;
