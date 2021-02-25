import React from "react";
import TodoItem from "./todoItem";

import styled from 'styled-components';

import { connect, useSelector } from 'react-redux'
import { IFetchedTodo } from "../../models/response";


const TodoList = ({asyncTodoItem}: any) => {
  // const todos = useSelector((state: any) => state.todo.todos ); 
  console.log(asyncTodoItem);
  return (
    <List>
      {asyncTodoItem.map((todo: IFetchedTodo, index: number) => {
        return <TodoItem todo={todo} key={todo.id + String(todo.completed)} index={index} />;
      })}
    </List>
  );
}

const mapStateToProps = (state: any) => ({
  asyncTodoItem: state.todo.todos
})
  
export default connect(mapStateToProps,null)(TodoList);


const List = styled.ul`
position: relative;
margin: 0;
padding: 40px;
`;