import { useContext } from "react";
import { createContext } from "react";

const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:'Learn Js',
            completed:false
        }
    ],
    saveTodo:(todo)=>{},
    updateTodo:(id,todoContent)=>{},
    deleteTodo:(id)=>{},
    completedTodo:(id)=>{}
});

export const TodoProvider = TodoContext.Provider;

export const useTodo = () =>{
    return useContext(TodoContext);
}