function ListGroup() {
  const items = ["New York", "Tokyo", "Cairo", "London", "Paris"];

  return (
    <>
      <h1>My List ({items.length})</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
