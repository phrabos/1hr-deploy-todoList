import React, {useState} from 'react';
import List from "./List";

const Controls = () => {
const [todoList, setTodoList] = useState([]);
const [todoInput, setTodoInput] = useState('');

const handleTodoChange = (e) => {
  setTodoInput(e.target.value);
}

const handleSubmit = (e) => {
  e.preventDefault();
  setTodoList([...todoList, todoInput])
  setTodoInput('');
}
const handleDelete = (e) => {
  setTodoList((prevList)=>prevList.filter((_, i) => i !== +e.target.value))
}

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="todo"
        type="text"
        value={todoInput}
        onChange={handleTodoChange}
      >
      </input>
      <button>Add to List</button>
    </form>
    <List 
    todoList={todoList}
    handleDelete={handleDelete}
    />
    </>
  )
}

export default Controls;