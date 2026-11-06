"use client";

import { useState } from "react";
import { TodosProvider, useTodosContext } from "./todosContext";

function TodoList() {
  const { todos, addTodo, update, removeTodo } = useTodosContext();
  const [newTodo, setNewTodo] = useState("");

  const create = () => {
    if (!newTodo.trim()) return;
    addTodo(newTodo.trim());
    setNewTodo("");
  };

  return (
    <div id="wd-context-todo-list">
      <div className="mb-2 flex gap-2">
        <input
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder="New todo"
          className="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
          id="wd-context-todo-new"
        />
        <button
          type="button"
          onClick={create}
          className="rounded bg-green-600 px-3 py-1.5 text-sm font-medium text-white"
          id="wd-context-todo-add-click"
        >
          Add
        </button>
      </div>
      <ul className="m-0 list-none p-0">
        {todos.map((todo, index) => (
          <li key={index} className="mb-2 flex gap-2">
            <input
              value={todo}
              onChange={(e) => update(index, e.target.value)}
              className="w-full max-w-sm rounded border border-neutral-300 px-3 py-1.5"
            />
            <button
              type="button"
              onClick={() => removeTodo(index)}
              className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ReactContextTodoList() {
  return (
    <div id="wd-react-context-todo-list">
      <h3>Todo List (Context)</h3>
      <TodosProvider>
        <TodoList />
      </TodosProvider>
    </div>
  );
}
