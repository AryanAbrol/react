import { useRef } from "react";
import { useDispatch } from "react-redux";
import { counteractions} from "../store/counter";
import { privacyactions } from "../store/privacy";

const Control = () => {
  const dispatch = useDispatch();

  const inputelement = useRef();

  const handleincrement = () => {
    dispatch(counteractions.increment());
  };

  const handledecrement = () => {
    dispatch(counteractions.decrement());
  };

  const handleprivacy = () => {
    dispatch(privacyactions.toogle());
  };

  const handleadd = () => {
    dispatch(counteractions.add(inputelement.current.value));
    inputelement.current.value="";
  };

  const handlesubtract = () => {
    dispatch(counteractions.subtract( {
      num: inputelement.current.value,
    }));
    inputelement.current.value="";
  };

  return (
    <>
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
        <button
          type="button"
          className="btn btn-primary btn-lg px-4 gap-3"
          onClick={handleincrement}
        >
          +1
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary btn-lg px-4"
          onClick={handledecrement}
        >
          -1
        </button>
        <button type="button" className="btn btn-warning" onClick={handleprivacy}>Privacy</button>
      </div>

      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center color-row">
        <input
          type="text"
          placeholder="Enter number: "
          className="color-input"
          ref={inputelement}
        />
        <button type="button" className="btn btn-info" onClick={handleadd}>
          ADD
        </button>
        <button type="button" className="btn btn-danger" onClick={handlesubtract}>
          Subtract
        </button>
      </div>
    </>
  );
};

export default Control;
