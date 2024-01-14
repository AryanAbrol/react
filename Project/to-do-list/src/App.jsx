import Appn from "./components/Appn";
import Appname from "./components/Appname";
import Todoitem1 from "./components/todoitem1";
import Todoitem2 from "./components/Todoitem2";

function App() {
  return (
    <center className="todo-container">
      <Appname />
      <Appn />
      <div className="item-container">
        <Todoitem1 />
        <Todoitem2></Todoitem2>
      </div>
    </center>
  );
}

export default App;
