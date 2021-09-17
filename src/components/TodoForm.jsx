import { useState } from "react";

function TodoForm(props) {
  const [text, setText] = useState("");
  const clickAddBtn = (e) => {
    e.preventDefault();
    props.addTodo(text);
  };
  const changeText = (e) => {
    const text = e.target.value;
    setText(text);
  };
  return (
    <form>
      <label>
        <input type="text" value={text} onChange={changeText} />
      </label>
      <button onClick={clickAddBtn} disabled={text.length === 0}>
        추가
      </button>
    </form>
  );
}

export default TodoForm;
