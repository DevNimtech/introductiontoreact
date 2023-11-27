import { useState } from "react";

export default function Home() {
  function ListItems({ints, addValue}) {
    const increment = 2;
    return (
      <>
        <button onClick={() => addValue(increment)}>Add value</button>
        {
          ints.map(id =>
            <li key={id}>{id}</li>
          )
        }
      </>
    );
  }

  const [ints, setInts] = useState([1,2,3,4]);
  function addValue(incrementValue){
    const newVal = Math.max(...ints) + incrementValue;
    setInts([...ints, newVal]);
  }

  return (
    <ul>
      <ListItems ints={ints} addValue={addValue}></ListItems>
    </ul>
  )
}
