import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos : [],
    saveTodo : ()=>{},
    updateTodo : ()=>{},
    deleteTodo : ()=>{},
    completeTodo : ()=>{}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};