import {useSelector} from "react-redux";

const Displaycounter = () =>
{
  const counter = useSelector(state => state.counter)
  return <p className="lead mb-4">Counter current value: {counter}</p>
}

export default Displaycounter;