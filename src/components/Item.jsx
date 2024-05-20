import React from "react";

const Item = ({ el, setTodos }) => {
  const removeToDo = (id) => {
    setTodos((todos) => todos.filter((el) => el.id !== id));
  };

  const toggleToDo = (id) => {
    setTodos((todos) =>
      todos.map((el) => (el.id === id ? { ...el, isDone: !el.isDone } : el))
    );
  };
  return (
    <li
      key={el.id}
      style={{
        margin: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <h3>{el.title}</h3>
      <div>{el.content}</div>
      <div>
        <button
          onClick={() => {
            toggleToDo(el.id);
          }}
        >
          {el.isDone ? `취소` : `완료`}
        </button>
        <button
          onClick={() => {
            removeToDo(el.id);
          }}
        >
          삭제
        </button>
      </div>
    </li>
  );
};

export default Item;
