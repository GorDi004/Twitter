import style from './App.module.scss'
import Aside from './components/Aside';
import Main from './components/Main';
import NavBar from './components/NavBar/index';

const App = () => {
  return (
    <div className={style.App}>
      <NavBar/>
      <Main/>
      <Aside/>
    </div>
  );
}

export default App;
