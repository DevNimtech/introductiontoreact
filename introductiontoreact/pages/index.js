export default function Home() {
  function ListItems() {
    const ints = [1,2,3,4];
    return (
      <>
        {
          ints.map(id =>
            <li key={id}>{id}</li>
          )
        }
      </>
    );
  }

  return (
    <ul>
      <ListItems></ListItems>
    </ul>
  )
}
