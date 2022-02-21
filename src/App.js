import Counter from './components/Counter/Counter';
import Auth from './components/Auth/Auth'
import Header from './components/Header/Header'
import { useSelector } from 'react-redux';


function App() {
  const isLogged = useSelector(state => state.auth.isLogged)
  return (
    <>
      <Header />
      {!isLogged && <Auth />}
      {isLogged && <Counter />}
    </>
  );
}

export default App;
