import {useSelector} from "react-redux";

const Displaycounter = () =>
{
  const {counterval} = useSelector(state => state.counter)
  return <p className="lead mb-4">Counter current value: {counterval}</p>
}

export default Displaycounter;