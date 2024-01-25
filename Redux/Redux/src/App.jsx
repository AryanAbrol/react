import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Header from "./components/header";
import Displaycounter from "./components/Displaycounter";
import Container from "./components/Container";
import Control from "./components/Controls";
import { useSelector } from "react-redux";
import Privacymsg from "./components/Privacymsg";

function App() {
const privacy = useSelector(store => store.privacy);
  return <center className="px-4 py-5 my-5 text-center">
    <Container>
    <Header/>
    <div className="col-lg-6 mx-auto">
    {privacy ? <Privacymsg/> : <Displaycounter/>}
    <Control/>
    </div>
    </Container>
  </center>
}

export default App;
