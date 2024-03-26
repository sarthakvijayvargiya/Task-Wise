import { createContext, useContext } from "react";

const TodoContext = createContext({
    todos : [
        {
            id : 1,
            todoContent : '',
            completed : false
        }
    ],
    saveTodo : (todoContent)=>{},
    updateTodo : (id, todoContent)=>{},
    deleteTodo : (id)=>{},
    completeTodo : (id)=>{}
});

export const TodoContextProvider = TodoContext.Provider;

export const useTodo = () => {
  return useContext(TodoContext);
};