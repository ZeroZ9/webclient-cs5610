import {createContext, createElement, useContext, useState, type ReactNode} from "react";

type TodosContextValue = {
  todos: string[];
  setTodos: (todos: string[]) => void;
  addTodo: (todo: string) => void;
  update: (index: number, todo: string) => void;
  removeTodo: (index: number) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({children}: {children: ReactNode}) {
  const [todos, setTodos] = useState(["Learn React", "Learn TypeScript", "Learn Next.js"]);

  const addTodo = (todo: string) => {
    setTodos([...todos, todo]);
  };

  const update = (index: number, todo: string) => {
    setTodos(todos.map((t, i) => (i === index ? todo : t)));
  };

  const removeTodo = (index: number) => {
    setTodos(todos.filter((_, i) => i !== index));
  };

  return createElement(
    TodosContext.Provider,
    {value: {todos, setTodos, addTodo, update, removeTodo}},
    children,
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}