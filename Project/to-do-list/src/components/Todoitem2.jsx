function Todoitem2()
{
  let name='Go to college';
  let date='18/03/24';
  return  <div class="container">
  <div class="row kgrow">
  <div class="col-6">{name}</div>
  <div class="col-4">{date}</div>
  <div class="col-2">
    <button type="button" class="btn btn-danger kgbutton bg">
      Delete
    </button>
  </div>
</div>
</div>
}
export default Todoitem2;