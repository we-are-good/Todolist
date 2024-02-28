import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleTodo } from "../api/todo-api";
import TodoItem from "../components/todo/TodoItem";
import { TodoContext } from "../context/TodoContext";
import { useQuery } from "@tanstack/react-query";

const Detail = () => {
  const { todoId } = useParams();
  const { onDeleteTodoItem, onToggleTodoItem } = useContext(TodoContext);
  const {
    data: todo,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todo", todoId],
    queryFn: () => getSingleTodo(todoId),
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const handleDeleteTodoItem = async (id) => {
    await onDeleteTodoItem(id);

    // setTodo(null);
  };

  const handleToggleTodoItem = async (id) => {
    // 1. 서버에 업데이트 2. 로컬 context api 상태에 업데이트
    await onToggleTodoItem(id);

    setTodo((prevTodo) => ({
      ...prevTodo,
      isDone: !prevTodo.isDone,
    }));
  };

  return (
    <section>
      <TodoItem
        todo={todo}
        onDeleteTodoItem={handleDeleteTodoItem}
        onToggleTodoItem={handleToggleTodoItem}
      />
    </section>
  );
};

export default Detail;
