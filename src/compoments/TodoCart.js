import '../style/TodoCart.css';

export default function TodoCart(props) {
    const { handleDeleteTodo, index, handleEditTodo } = props;
    return (
        <li className="todo-cart">
            {/* Render the todo details here */}
            <div className="todo-content">
                {props.children}
            </div>
            <div className="todo-actions">
                <button className="edit" onClick={() => handleEditTodo(index)}>Edit</button>
                <button className="delete" onClick={() => handleDeleteTodo(index)}>Delete</button>
            </div>
        </li>
    );
}
