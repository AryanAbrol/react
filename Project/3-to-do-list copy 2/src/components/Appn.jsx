import { useRef, useState } from "react";
import { IoBagAdd } from "react-icons/io5";

function Appn({ handletodo }) {
  const todoelement = useRef();
  const dateelement = useRef();

  const handleaddbutton = () => {
    const todoname = todoelement.current.value;
    const tododate = dateelement.current.value;
    handletodo(todoname, tododate);
    todoelement.current.value = "";
    dateelement.current.value = "";
  };

  return (
    <div className="row kgrow">
      <div className="col-6">
        <input type="text" placeholder="Enter todo here" ref={todoelement} />
      </div>
      <div className="col-4">
        <input type="date" ref={dateelement} />
      </div>
      <div className="col-2">
        <button
          type="button"
          className="btn btn-success kgbutton"
          onClick={handleaddbutton}
        >
          <IoBagAdd />
        </button>
      </div>
    </div>
  );
}

export default Appn;
