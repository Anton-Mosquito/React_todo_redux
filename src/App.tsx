import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodo } from "./redux/actions";
import Loader from "./components/loader/loader";
import TextLoader from "./components/loader/loaderText";

import styled from 'styled-components';

const TodoAddItem = React.lazy(() => import("./components/todo/todoAddItem"));
const TodoList = React.lazy(() => import("./components/todo/todoList"));

export const App = () =>  {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todo.todos );
  const loading = useSelector((state: any) => state.app.loading);
  
  useEffect(() => {
    dispatch(loadTodo())
  }, [dispatch]);

  return ( 
    <>
      {loading ? (
        <Loader />
      ) : (
        <AppWrapper>
          <Header>Todo List</Header>
          <React.Suspense fallback="">
            <TodoAddItem/>
          </React.Suspense>
          <React.Suspense fallback={<TextLoader />}>
            {todos.length ? (
              <TodoList/>
            ) : loading ? null : (
              <p>no data!</p>
            )}
          </React.Suspense>
        </AppWrapper>
      )}
    </>
  );
}

const AppWrapper = styled.div`
position: relative;
width: 500px;
background: #fff;
`;

const Header = styled.div`
background: #03a9f4;
color: #fff;
padding: 10px 20px;
font-weight: 600;
font-size: 2rem;
`