import React, { useState } from "react";

const Form = ({ setTodos }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const addTodo = (e) => {
    e.preventDefault();

    if (!title || !content) {
      alert("제목과 내용을 모두 입력해주세요");
      return;
    }

    const New = {
      id: crypto.randomUUID(),
      title: title,
      content: content,
      isDone: false,
    };
    setTodos((todos) => [...todos, New]);
  };
  return (
    <div>
      <form onSubmit={addTodo}>
        <input
          type="text"
          placeholder="제목"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          placeholder="내용"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">추가</button>
      </form>
    </div>
  );
};

export default Form;
