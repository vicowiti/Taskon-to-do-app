import React from "react";
import "./styles.css";
export const InputField: React.FC = () => {
  return (
    <form className="input">
      <input type="text" placeholder="Enter a task" className="inputSection" />
      <button type="submit" className="inputBtn">
        Add
      </button>
    </form>
  );
};
