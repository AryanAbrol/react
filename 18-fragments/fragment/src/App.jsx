// import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

function App() {
   let item = ["Dal", "Panner", "Ambarsari chicken", "Salad", "Roti"];
  //  let item=[]
  //  let expert = item.length===0 ? <h3>I am still hungry</h3>:null

  return (
    <>
      {/* or <React.Fragment>  */}
      <h1>Healthy food</h1>
      {/* conditional execution */}
      {/* first method:-
      {item.length===0 ? <h3>I am still hungry</h3>:null} 
        second method:-
      {expert}
        3rd method:-
        {item.length===0 && <h3>I am still hungry.</h3>}
      */}

      <ul class="list-group">
        {/* <li class="list-group-item">Panner</li>
  <li class="list-group-item">Dal</li>
  <li class="list-group-item">Ambarsari chicken</li>
  <li class="list-group-item">Salad</li>
  <li class="list-group-item">Roti</li> */}
        {/* using map because we cannot use for loop in reactf*/}
        {/* key is required to only update the element required to update beacuse agr hmm pure page ko change kr denge toh react use krna ka koi faida nhi hai */}
        {item.map((i) => (
          <li key={i} class="list-group-item">
            {i}
          </li>
        ))}
      </ul>
      {/* or </React.Fragment> */}
    </>
  );
}

export default App;
