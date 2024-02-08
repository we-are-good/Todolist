import styled from "styled-components";

export const TwoItemSort = styled.div`
  display: flex;
  width: 19rem;
  flex-wrap: wrap;
`;

export const TopArticleStyle = styled.article`
  min-height: 16rem;
  width: 16rem;
  margin: 1rem 0 1rem 0;

  display: flex;
  flex-wrap: wrap;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: rgb(247, 247, 146);
  border: 6px solid rgb(162, 194, 114);
  border-radius: 1rem;
`;

export const ToDoListInputStyle = styled.header`
  display: flex;
  flex-grow: 2;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const ToDoListTitleStyle = styled.div`
  width: 10rem;

  font-size: 2rem;
  font-weight: 700;
  font-style: oblique;

  background-color: transparent;
  border: 0;
`;
export const ToDoListTitleInStyle = styled.input`
  width: 10rem;

  font-size: 2rem;
  font-weight: 700;
  font-style: oblique;

  background-color: transparent;
  border: 0;
`;

export const ToDoListContentStyle = styled.div`
  width: 8rem;
  font-size: 1.2rem;
  text-decoration: ${({ isDone }) => (isDone ? "line-through" : "none")};
  background-color: transparent;
  border: 0;
`;
export const ToDoListContentInStyle = styled.input`
  width: 8rem;
  font-size: 1.2rem;

  background-color: transparent;
  border: 0;
`;

export const ToDoListDateStyle = styled.div`
  width: 7rem;
  background-color: transparent;
  border-radius: 0.4rem;
`;
export const ToDoListDateInStyle = styled.input`
  width: 7rem;
  background-color: transparent;
  border-radius: 0.4rem;
`;

export const TwoButtonStyle = styled.footer`
  height: 4rem;
  width: 11.5rem;
  display: flex;
  flex-grow: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const DeleteButtonStyle = styled.button`
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: orange;
  border: 0.3rem solid rgba(206, 134, 0, 0.778);
  border-radius: 0.6rem;
`;

export const AddButtonStyle = styled.button`
  width: 5rem;
  height: 2rem;
  font-size: 1rem;
  font-weight: 600;
  color: white;
  background-color: orange;
  border: 0.3rem solid rgba(206, 134, 0, 0.778);
  border-radius: 0.6rem;
`;
