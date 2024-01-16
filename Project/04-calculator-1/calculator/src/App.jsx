import styles from './App.module.css';
import Buttoncontainer from './components/Buttoncontainer';
import Display from './components/Display';

function App() {
  return <div className={styles.calculator}>
    <Display></Display>
    <Buttoncontainer></Buttoncontainer>
  </div>
}

export default App
