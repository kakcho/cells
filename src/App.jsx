import { useRef, useState } from "react";
import AppContext from "./context/AppContext";
import Content from "./Content";

function App() {
  const [countX, setCountX] = useState();
  const committedFieldsToAdd = useRef(0)
  const userSettings = {
    countX: countX,
    setCountX,
    committedFieldsToAdd,
  };

  return (
    <AppContext.Provider value={userSettings}>
          <Content />
    </AppContext.Provider>
  );
}

export default App;