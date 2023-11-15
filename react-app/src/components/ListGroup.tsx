function ListGroup() {
  const items = ["New York", "Cairo", "London", "Paris", "Your Mom's House"];

  return (
    <>
      <h1>My List ({items.length})</h1>
      <ul className="list-group">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
      {items.length > 0 ? (
        <>
          <hr></hr>
          <h3>You've got stuff</h3>
        </>
      ) : (
        <>
          <hr></hr>
          <h3>You've got no stuff</h3>
        </>
      )}
    </>
  );
}

export default ListGroup;
