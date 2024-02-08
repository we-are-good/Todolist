import React, { useState } from "react";
import TodoListAdd from "./TodoListAdd";
import Header from "./Header";
import TodoListDelete from "./TodoListDelete";
import GlobalStyle from "../GlobalStyles";
import {
  TopArticleStyle,
  ToDoListInputStyle,
  TwoButtonStyle,
  AddButtonStyle,
  ToDoListTitleInStyle,
  ToDoListContentInStyle,
  ToDoListDateInStyle,
} from "../styles/TodoListAddStyle";

import { TopNavStyle } from "../styles/HeaderStyle";

function TodoListForm() {
  const [toDoTitle, setTodoTitle] = useState("");
  const [toDoContent, setToDoContent] = useState("");
  const [date, setDate] = useState("");
  const [todoList, setTodoList] = useState([]);
  const [sortOrder, setSortOrder] = useState();

  function todoDate(event) {
    setDate(event.target.value);
  }
  function toDoContentChange(event) {
    setToDoContent(event.target.value);
  }
  function toDoTitleChange(event) {
    setTodoTitle(event.target.value);
  }

  const todoListNewAddition = () => {
    const newTodoList = {
      id: todoList.length + 1,
      title: toDoTitle,
      content: toDoContent,
      date: date,
      isDone: false,
    };
    if (!newTodoList.title || !newTodoList.content) {
      return alert("할 일을 등록해주세요.");
    }
    setTodoList((todoList) => [newTodoList, ...todoList]);
    setTodoTitle("");
    setToDoContent("");
    setDate("");
  };

  const isDoneToggle = (item) => {
    setTodoList((prevTodos) =>
      prevTodos.map((todoList) => {
        if (todoList.id === item) {
          return {
            ...todoList,
            isDone: !todoList.isDone,
          };
        }
        return todoList;
      })
    );
  };

  const doneList = todoList.filter((prevTodos) => prevTodos.isDone);
  const workingList = todoList.filter((prevtodos) => !prevtodos.isDone);

  const todoListNewdelete = (item) => {
    const todoListDelete = todoList.filter((todo) => todo.id !== item);
    setTodoList(todoListDelete);
    setTodoTitle("");
    setToDoContent("");
    setDate("");
  };

  const onChangeSortOrder = (event) => {
    const nextSortOrder = event.target.value;
    setSortOrder(nextSortOrder);

    if (nextSortOrder === "asc") {
      setTodoList((prevTodos) =>
        [...prevTodos].sort((a, b) => new Date(a.date) - new Date(b.date))
      );
      return;
    }
    setTodoList((prevTodos) =>
      [...prevTodos].sort((a, b) => new Date(b.date) - new Date(a.date))
    );
  };

  return (
    <>
      <GlobalStyle />s
      <Header sortOrder={sortOrder} onChangeSortOrder={onChangeSortOrder} />
      <TopArticleStyle>
        <ToDoListInputStyle>
          <ToDoListTitleInStyle
            required
            maxLength={10}
            placeholder="Todo List"
            type="text"
            value={toDoTitle}
            onChange={toDoTitleChange}
          />

          <ToDoListContentInStyle
            required
            placeholder="Todo Context"
            type="text"
            value={toDoContent}
            onChange={toDoContentChange}
          />

          <ToDoListDateInStyle
            required
            type="date"
            value={date}
            onChange={todoDate}
          />
        </ToDoListInputStyle>

        <TwoButtonStyle>
          <TodoListDelete
            todoListNewdelete={todoListNewdelete}
            todoList={todoList}
          />
          <AddButtonStyle onClick={todoListNewAddition}>Add</AddButtonStyle>
        </TwoButtonStyle>
      </TopArticleStyle>
      <TopNavStyle> working </TopNavStyle>
      {workingList.map((workingList) => (
        <TodoListAdd
          key={workingList.id}
          todoList={workingList}
          todoListNewdelete={todoListNewdelete}
          isDoneToggle={isDoneToggle}
        />
      ))}
      <TopNavStyle> Done</TopNavStyle>
      {doneList.map((doneList) => (
        <TodoListAdd
          key={doneList.id}
          todoList={doneList}
          todoListNewdelete={todoListNewdelete}
          isDoneToggle={isDoneToggle}
        />
      ))}
    </>
  );
}

export default TodoListForm;
