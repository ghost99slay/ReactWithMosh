import Alert from "./components/Alert";
import Button from "./components/Button";
import Message from "./components/Message";

function App() {
  return (
    <div>
      <Alert>
        <Message />
      </Alert>
      <Button color="secondary" onClick={() => console.log("Clicked")}>
        Press Me!
      </Button>
    </div>
  );
}

export default App;
