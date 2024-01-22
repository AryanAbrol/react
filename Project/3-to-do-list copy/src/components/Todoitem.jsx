function Todoitem1({name,date,onDeleteClick})
{
  return <div className="container"> 
  <div className="row kgrow">
  <div className="col-6 bgm">{name}</div>
  <div className="col-4 bgm">{date}</div>
  <div className="col-2">
    <button type="button" className="btn btn-danger kgbutton bg" onClick={()=>onDeleteClick(name)}>
      Delete
    </button>
  </div>
</div>
</div>
}
export default Todoitem1;