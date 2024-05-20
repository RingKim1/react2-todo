import React, { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

const App = () => {
  const initial = [
    { id: 0, title: "제목", content: "내용", isDone: false },
    { id: 1, title: "제목1", content: "내용1", isDone: true },
  ];
  const [todos, setTodos] = useState(initial);

  const yetcompleted = todos.filter((el) => !el.isDone);
  const completed = todos.filter((el) => el.isDone);
  return (
    <div>
      <h1>TodoList</h1>
      <Form setTodos={setTodos} />
      <List listTitle={"keep going"} setTodos={setTodos} todos={yetcompleted} />
      <hr></hr>
      <List listTitle={"complete"} setTodos={setTodos} todos={completed} />
    </div>
  );
};

export default App;
