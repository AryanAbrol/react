import { useState } from "react";

function Appn({handletodo}) {

  const [todoname,settodoname] = useState("");
  const [tododate,settododate] = useState("");

  const handlename = (event) =>
  {
    settodoname(event.target.value);
  }

  const handledate = (event) =>
  {
    settododate(event.target.value);
  }

  const handleaddbutton = () =>
  {
    handletodo(todoname,tododate);
    settodoname("");
    settododate("");
  }
  
  return (
    <div className="row kgrow">
      <div className="col-6">
        <input type="text" placeholder="Enter todo here" value={todoname} onChange={handlename}/>
      </div>
      <div className="col-4">
        <input type="date" value={tododate} onChange={handledate}/>
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success kgbutton" onClick={handleaddbutton}>
          Add
        </button>
      </div>
    </div>
  );
}

export default Appn;
