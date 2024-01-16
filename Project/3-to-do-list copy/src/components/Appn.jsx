function Appn() {
  return (
    <div className="row kgrow">
      <div className="col-6">
        <input type="text" placeholder="Enter todo here" />
      </div>
      <div className="col-4">
        <input type="date" />
      </div>
      <div className="col-2">
        <button type="button" className="btn btn-success kgbutton">
          Add
        </button>
      </div>
    </div>
  );
}

export default Appn;
