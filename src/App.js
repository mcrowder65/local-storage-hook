import React from "react";
import { useLocalStorageSetState } from "./use-local-storage-set-state";

function App() {
  const [value, setValue] = useLocalStorageSetState(0, "value");

  return (
    <div>
      {value}
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

export default App;
