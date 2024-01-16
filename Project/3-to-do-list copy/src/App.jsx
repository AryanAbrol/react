import Appn from "./components/Appn";
import Appname from "./components/Appname";
import Todoitems from "./components/Todoitems";

function App() {
  const todolist = [
    {
      tname: "Buy milk",
      tdate: "4/10/23",
    },
    {
      tname: "Go to college",
      tdate: "18/03/24",
    },
    {
      tname: "hi ",
      tdate: "28/03/24",
    },
  ];
  return (
    <center className="todo-container">
      <Appname />
      <Appn />
      <Todoitems todolist={todolist}></Todoitems>
    </center>
  );
}

export default App;
