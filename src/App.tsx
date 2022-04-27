import "./App.css";

import React from "react";
import { InputField } from "./components/InputField";

const App: React.FC = () => {
  return (
    <div className="App">
      <span className="heading">TaskOn</span>
      <InputField />
    </div>
  );
};

export default App;
