import React from "react";
import TodoListDelete from "./TodoListDelete";
import {
  TwoItemSort,
  TopArticleStyle,
  ToDoListInputStyle,
  ToDoListTitleStyle,
  ToDoListContentStyle,
  ToDoListDateStyle,
  TwoButtonStyle,
  AddButtonStyle,
} from "../styles/TodoListAddStyle";
import GlobalStyle from "../GlobalStyles";

function TodoListAdd({ todoList, todoListNewdelete, isDoneToggle }) {
  const { id, title, content, date, isDone } = todoList;
  const newDate = new Date(date);
  const americaDate = newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    weekday: "short",
  });

  return (
    <TwoItemSort>
      <GlobalStyle />
      <TopArticleStyle>
        <ToDoListInputStyle>
          <ToDoListTitleStyle>{title}</ToDoListTitleStyle>
          <ToDoListContentStyle isDone={isDone}>{content}</ToDoListContentStyle>
          <ToDoListDateStyle>{americaDate}</ToDoListDateStyle>
        </ToDoListInputStyle>

        <TwoButtonStyle>
          <TodoListDelete
            todoListNewdelete={todoListNewdelete}
            todoList={todoList}
          />
          <AddButtonStyle onClick={() => isDoneToggle(id)}>
            {isDone ? "취소" : "완료"}
          </AddButtonStyle>
        </TwoButtonStyle>
      </TopArticleStyle>
    </TwoItemSort>
  );
}

export default TodoListAdd;
