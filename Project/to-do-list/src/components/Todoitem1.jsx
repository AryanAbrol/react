function Todoitem1()
{
  let name='Buy milk';
  let date='4/10/23';
  return <div class="container"> 
  <div class="row kgrow">
  <div class="col-6 bgm">{name}</div>
  <div class="col-4 bgm">{date}</div>
  <div class="col-2">
    <button type="button" class="btn btn-danger kgbutton bg">
      Delete
    </button>
  </div>
</div>
</div>
}
export default Todoitem1;