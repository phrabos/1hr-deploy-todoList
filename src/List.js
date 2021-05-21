import React from 'react';

const List = ({ todoList, handleDelete }) => {


  return (
    <ul>
      {todoList && todoList.map((item, i) => {
        return <li value={i}key={i}>
          {item} 
          <input type="checkbox"></input>
          <button value={i} onClick={handleDelete}>delete</button>
        </li>
      })}
    </ul>
  )
}

export default List;