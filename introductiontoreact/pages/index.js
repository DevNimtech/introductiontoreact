export default function Home() {
  function ListItems({ints}) {
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

  const ints = [1,2,3,4];
  return (
    <ul>
      <ListItems ints={ints}></ListItems>
    </ul>
  )
}
