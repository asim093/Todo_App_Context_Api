import React, { useContext, useState } from 'react';
import { TodoContext } from '../Context/TodoContext';
import List from './List';
// import './Text_input.css'; // Import a CSS file for custom styles

const Text_input = () => {
    const { Additem, removeItem, states } = useContext(TodoContext);
    const [inputVal, setInput] = useState('');

    const handleSubmit = () => {
        if (inputVal.trim() === '') {
            alert("please Enter Some Text")
        }else{
            Additem(inputVal);
            setInput('');
        }
    };

    const handleClearAll = () => {
        states.forEach(item => removeItem(item.id));
    };

    return (
        <div className="text-input-container">
            <h1>Todo App</h1>
            <input
                type="text"
                value={inputVal}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Enter Your Text"
                className="text-input"
            />
            <div className="button-container">
                <button onClick={handleSubmit} className="btn-submit">Submit</button>
                <button onClick={handleClearAll} className="btn-clear">Clear All</button>
            </div>
            <List />
        </div>
    );
};

export default Text_input;
