import React from "react";
import { DeleteButtonStyle } from "../styles/TodoListAddStyle";
import GlobalStyle from "../GlobalStyles";

function TodoListDelete({ todoListNewdelete, todoList }) {
  return (
    <div>
      <GlobalStyle />
      <DeleteButtonStyle
        onClick={() => {
          todoListNewdelete(todoList.id);
        }}
      >
        Delete
      </DeleteButtonStyle>
    </div>
  );
}

export default TodoListDelete;
