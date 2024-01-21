import { useState } from "react";
import styles from "./App.module.css";
import Buttoncontainer from "./components/Buttoncontainer";
import Display from "./components/Display";

function App() {
  const [calval, setcalval] = useState("");
  const onButtonClick = (buttontext) =>
  {
    if(buttontext==='c')
    {
      setcalval("");
    }
    else if(buttontext==='=')
    {
      const newstate = eval(calval);
      setcalval(newstate);
    }
    else
    {
      const displayval = calval+buttontext;
      setcalval(displayval);
    }
  }

  return (
    <div className={styles.calculator}>
      <Display dispv={calval}></Display>
      <Buttoncontainer onButtonClick={onButtonClick}></Buttoncontainer>
    </div>
  );
}

export default App;
