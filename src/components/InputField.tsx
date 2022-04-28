import React from "react";
import "./styles.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAdd: (e: React.FormEvent) => void;
}

export const InputField: React.FC<Props> = ({ todo, setTodo, handleAdd }) => {
  return (
    <form className="input" onSubmit={handleAdd}>
      <input
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        type="text"
        placeholder="Enter a task"
        className="inputSection"
      />
      <button type="submit" className="inputSubmit">
        Add
      </button>
    </form>
  );
};
