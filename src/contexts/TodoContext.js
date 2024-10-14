import { createContext, useContext } from "react";

export const TodoContext = createContext({
    todos:[
        {id:1, title:'Learn React', completed:false}
        // {id:2, title:'Build a ToDo App', completed:false},
        // {id:3, title:'Learn Jest', completed:false}
    ],
    addTodo : (todo)=>{},
    updatedTodo : (id , todo)=>{},
    deleteTodo : (id)=>{},
    toggleComplete: (id)=>{}
})

export const useTodo = ()=>{
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider