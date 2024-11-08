import '../style/TodoInput.css'
export  default  function TodoInput(props){
    const{handleAddTodos, todoValue,setTodoValue,level,setLevel,status,setStatus}=props
    return(
        <header className='todo-input'>
            <input value={todoValue}
                   onChange={(e) => {
                       setTodoValue(e.target.value)
                   }}
                   placeholder='Enter todo'
            />
            <select value={level} onChange={(e) => {
                setLevel(e.target.value)
            }}>
                <option value='low'>Low</option>
                <option value='medium'>Medium</option>
                <option value='hight'>Hight</option>
            </select>
            <select value={status} onChange={(e) => {
                setStatus(e.target.value)
            }}>
                <option value="to do">To Do</option>
                <option value="in process">In Process</option>
                <option value="completed">Completed</option>
            </select>
            <button onClick={() => {
                handleAddTodos({
                    text:todoValue,
                    level:level,
                    status:status
                })
                setTodoValue('');
                setLevel('low');
                setStatus('to do')
            }}>Add
            </button>
        </header>
    )
}