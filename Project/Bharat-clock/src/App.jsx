import Clockhead from './components/clockhead'; 
import Clockslogan from './components/Clockslogan';
import Currenttime from './components/Currenttime';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return <center>
    <Clockhead></Clockhead>
    <Clockslogan></Clockslogan>
    <Currenttime></Currenttime>
  </center>
}

export default App;
