import ListGroup from "./components/ListGroup";

function App() {
  let items = ["New York", "Cairo", "London", "Paris", "Your Mom's House"];

  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
