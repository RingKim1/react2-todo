import React from "react";
import Item from "./Item";

const List = ({ listTitle, setTodos, todos }) => {
  return (
    <div>
      <h2>{listTitle}</h2>
      <ul>
        {todos.map((el) => {
          return <Item el={el} setTodos={setTodos} />;
        })}
      </ul>
    </div>
  );
};

export default List;
