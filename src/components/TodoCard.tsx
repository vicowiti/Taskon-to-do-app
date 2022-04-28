import React, { useEffect, useRef } from "react";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IoMdDoneAll } from "react-icons/io";
import { Todo } from "../model";
import { useState } from "react";
import "./styles.css";
interface Props {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
}

const TodoCard: React.FC<Props> = ({ todo, todos, setTodos, setTodo }) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  console.log(todos);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <form className="single_todo" onSubmit={(e) => handleEdit(e, todo.id)}>
      {edit ? (
        <input
          value={editTodo}
          ref={inputRef}
          onChange={(e) => setEditTodo(e.target.value)}
        />
      ) : todo.isDone ? (
        <s className="todo_single_text">{todo.todo}</s>
      ) : (
        <span className="todo_single_text">{todo.todo}</span>
      )}

      <div>
        <span
          className="icon"
          onClick={() => {
            if (!edit && !todo.isDone) {
              setEdit(!edit);
            }
          }}
        >
          <AiFillEdit />
        </span>
        <span className="icon" onClick={() => handleDelete(todo.id)}>
          <AiFillDelete />
        </span>
        <span className="icon" onClick={() => handleDone(todo.id)}>
          <IoMdDoneAll color={todo.isDone ? "green" : "black"} />
        </span>
      </div>
    </form>
  );
};

export default TodoCard;
