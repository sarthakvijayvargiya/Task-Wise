import { useState } from "react";
import { TodoContextProvider } from "./context/TodoContext";
import { TodoInput, TodoList } from "./components";

function App() {
  const [todos, setTodos] = useState([]);
  const saveTodo = (todoContent) => {
    setTodos((prevValue) => [
      ...prevValue,
      {
        id: Date.now(),
        todoContent,
        completed: false,
      },
    ]);
  };

  const updateTodo = (id, todoContent) => {
    setTodos((prevValue) =>
      prevValue.map((todoItem) =>
        todoItem.id === id ? { ...todoItem, todoContent } : todoItem
      )
    );
  };

  const deleteTodo = (id) => {
    setTodos((prevValue) => prevValue.filter((todoItem) => todoItem.id !== id));
  };

  const completeTodo = (id) => {
    setTodos((prevValue) =>
      prevValue.map((todoItem) =>
        todoItem.id === id
          ? { ...todoItem, completed: !todoItem.completed }
          : todoItem
      )
    );
  };

  return (
    <>
      <TodoContextProvider
        value={{ todos, saveTodo, updateTodo, deleteTodo, completeTodo }}
      >
        <div className="bg-[#7D5BA6] w-full h-full">
          <div className="flex flex-col md:justify-center pt-10 md:pt-0 items-center min-h-screen ml-4 mr-4 ">
            <TodoInput />
            <div className="w-full md:w-[450px]">

            {todos.map((item) => (
              <div key={item.id}>
                <TodoList todoItem={item} />
              </div>
            ))}
            </div>
          </div>
        </div>
      </TodoContextProvider>
    </>
  );
}

export default App;
