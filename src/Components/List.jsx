import React, { useContext } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { TodoContext } from '../Context/TodoContext';
// import './List.css'; // Import a CSS file for custom styles

const List = () => {
    const { states, removeItem, updatedItem } = useContext(TodoContext);

    return (
        <div className="list-container">
            <ul className="todo-list">
                {states.map((item) => (
                    <li key={item.id} className="todo-item">
                        <span className="todo-text">{item.todo}</span>
                        <div className="todo-buttons">
                            <button onClick={() => removeItem(item.id)} className="btn-delete">
                                <FaTrash />
                            </button>
                            <button onClick={() => updatedItem(item.id)} className="btn-edit">
                                <FaEdit />
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default List;
