import React from "react";
import TodoItem from "../todoItem";

import styled from 'styled-components';

import { useSelector } from 'react-redux'
import { IFetchedTodo } from "../../models/response";
import { RootState } from "../../redux/rootReducer";
import { ITodo } from "../../models/state";

const TodoList: React.FC = () => {
  const todos = useSelector((state: RootState) => state.todo.todos ); 

  return (
    <List>
      {todos.map((todo: IFetchedTodo | ITodo, index: number) => {
        return <TodoItem todo={todo} key={todo.id + String(todo.completed)} index={index} />;
      })}
    </List>
  );
}

export default TodoList;

const List = styled.ul`
position: relative;
margin: 0;
padding: 40px;
`;