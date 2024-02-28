import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { getTodos } from "../../api/todo-api";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const TodoController = () => {
  const [sortOrder, setSortOrder] = useState("asc");

  const {
    data: todos,
    isLoading,
    error,
  } = useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  const onChangeSortOrder = (e) => {
    const nextSortOrder = e.target.value;

    // NOTE: select UI 변경
    setSortOrder(nextSortOrder);
  };

  // useEffect(() => {
  //   if (sortOrder === "asc") {
  //     // NOTE: 투두 리스트 오름차순 정렬
  //     setTodos((prevTodos) =>
  //       [...prevTodos].sort(
  //         (a, b) => new Date(a.deadline) - new Date(b.deadline)
  //       )
  //     );

  //     return;
  //   }

  //   // NOTE: 투두 리스트 내림차순 정렬
  //   setTodos((prevTodos) =>
  //     [...prevTodos].sort((a, b) => new Date(b.deadline) - new Date(a.deadline))
  //   );
  // }, [sortOrder, setTodos]);

  // useMemo
  const workingTodos = todos.filter((todo) => !todo.isDone);
  const doneTodos = todos.filter((todo) => todo.isDone);

  return (
    <main>
      <TodoForm />
      <div>
        <select onChange={onChangeSortOrder} value={sortOrder}>
          <option value="asc">오름차순</option>
          <option value="desc">내림차순</option>
        </select>
      </div>
      <TodoList headTitle="Working!" todos={workingTodos} />
      <TodoList headTitle="Done!" todos={doneTodos} />
    </main>
  );
};

export default TodoController;
