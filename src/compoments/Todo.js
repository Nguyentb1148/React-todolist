import {useEffect, useState} from "react";
import TodoList from "./TodoList";
import TodoInput from "./TodoInput";
import '../style/TodoInput.css'

export  default  function Todo(){
    const[todos,setTodos]=useState([]);
    const[todoValue,setTodoValue]=useState('')
    const[searchQuery,setSearchQuery]=useState('')
    const[status,setStatus]=useState('low');
    const[level,setLevel]=useState('to do');
    function persistData(newList){
        localStorage.setItem('todos',JSON.stringify({todos:newList}))
    }
    function handleAddTodos(newTodo){
        const newTodoList=[...todos,newTodo]
        persistData(newTodoList)
        setTodos(newTodoList)
    }
    function handleDeleteTodo(index){
        const newTodoList=todos.filter((todo,todoIndex)=>{
            return todoIndex!==index
        })
        persistData(newTodoList)
        setTodos(newTodoList)
    }
    function handleEditTodo(index){
        const valueToBeEdited= todos[index]
        setTodoValue(valueToBeEdited.text)
        setLevel(valueToBeEdited.level)
        setStatus(valueToBeEdited.status)
        handleDeleteTodo(index)
    }

    useEffect(() => {
        if(!localStorage){
            return
        }
        let localTodos=localStorage.getItem('todos')
        if(!localTodos){
            return;
        }
        console.log(localTodos)
        localTodos=JSON.parse(localTodos).todos
        setTodos(localTodos)
    }, []);
    const filteredTodos=todos.filter(todo=>{
        return todo.text && todo.text.toLowerCase().includes(searchQuery.toLowerCase())
    })
    return(
        <>
            <TodoInput todoValue={todoValue}
                       setTodoValue={setTodoValue}
                       level={level}
                       setLevel={setLevel}
                       status={status}
                       setStatus={setStatus}
                       handleAddTodos={handleAddTodos}/>
            <div className='todo-input'>
                <input type='text' placeholder='Search todos...' value={searchQuery} onChange={(e)=>setSearchQuery((e.target.value))}/>
            </div>
            <TodoList handleEditTodo={handleEditTodo} handleDeleteTodo={handleDeleteTodo} todos={filteredTodos}/>
        </>
    )
}