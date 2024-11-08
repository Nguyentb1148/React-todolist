import TodoCart from "./TodoCart";
import '../style/TodoList.css'
export default  function TodoList(props){
    const {todos,handleEditTodo,handleDeleteTodo}=props

    return(
        <ul className='todo-list'>
            {todos.map((todo,todoIndex)=> {
                return(
                    <TodoCart
                        key={todoIndex}
                        index={todoIndex}
                        handleEditTodo={handleEditTodo}
                        handleDeleteTodo={handleDeleteTodo}
                    >
                        <p>To do: {todo.text}</p>
                        <p>Level: {todo.level}</p>
                        <p>Status: {todo.status}</p>
                    </TodoCart>
                )
            })}
        </ul>
    )
}