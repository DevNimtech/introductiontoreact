import { useState } from "react";

export default function Home() {
  function ListItems({ints, addValue}) {
    return (
      <>
        <button onClick={addValue}>Add value</button>
        {
          ints.map(id =>
            <li key={id}>{id}</li>
          )
        }
      </>
    );
  }

  const [ints, setInts] = useState([1,2,3,4]);
  function addValue(){
    const newVal = Math.max(...ints) + 1;
    setInts([...ints, newVal]);
  }

  return (
    <ul>
      <ListItems ints={ints} addValue={addValue}></ListItems>
    </ul>
  )
}
