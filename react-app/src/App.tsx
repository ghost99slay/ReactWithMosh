import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Bananas", "Oranges", "Grapes", "Apples", "Your Mom"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
    <div>
      <ListGroup
        items={items}
        heading="Groceries"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
