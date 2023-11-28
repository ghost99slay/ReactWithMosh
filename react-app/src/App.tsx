import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import Like from "./components/Like";

function App() {
  const [alertVisable, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisable && (
        <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>
      )}
      <Button color="primary" onClick={() => setAlertVisibility(true)}>
        Press Me!
      </Button>
      <br />
      <Like onClick={() => console.log("Clicked")} />
    </div>
  );
}

export default App;
