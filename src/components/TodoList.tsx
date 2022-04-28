import React from "react";
import { Todo } from "../model";
import TodoCard from "./TodoCard";
import "./styles.css";

interface Props {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const TodoList: React.FC<Props> = ({ todos, setTodos, setTodo }) => {
  return (
    <div className="todos">
      {todos.map((todo) => {
        return (
          <TodoCard
            todo={todo}
            key={todo.id}
            todos={todos}
            setTodos={setTodos}
            setTodo={setTodo}
          />
        );
      })}
    </div>
  );
};

export default TodoList;
