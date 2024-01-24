import { useEffect } from "react";
import { useState } from "react";

let Currenttime = () => {
  const  [time , settime] = useState(new Date());

  useEffect(()=>
  {
    const intervalid = setInterval(()=>{
      settime(new Date());
    },1000);
  return () =>
  {
    clearInterval(intervalid);
  }
},[]);

  return (
    <p className="lead">
      This is the current time: {time.toLocaleDateString()} -{" "}
      {time.toLocaleTimeString()}
    </p>
  );
};

export default Currenttime;
