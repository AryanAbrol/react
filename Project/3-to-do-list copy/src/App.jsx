import { useState} from "react";
import Appn from "./components/Appn";
import Appname from "./components/Appname";
import Welcomemsg from "./components/welcomemsg";
import Todoitems from "./components/Todoitems";
  
function App() {
  
  const [todoitem, settodoitem] = useState([]);

  const onnewitem = (itemname, itemdate) => {
    const newtodoitem = [...todoitem, { tname: itemname, tdate: itemdate },];
    settodoitem(newtodoitem);
  };

  const handledeleteitem = (todoitemname)=>{
    const newtodoitem = todoitem.filter(item => item.tname !== todoitemname);
    settodoitem(newtodoitem);
  }

  return (
    <center className="todo-container">
      <Appname />
      <Appn handletodo={onnewitem} />
      {todoitem.length===0 && <Welcomemsg></Welcomemsg>}
      <Todoitems todolist={todoitem} onDeleteClick={handledeleteitem}></Todoitems>
    </center>
  );
}

export default App;
