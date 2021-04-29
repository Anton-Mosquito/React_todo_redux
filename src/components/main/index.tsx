import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadTodo } from "../../redux/actions";
import { Loader } from "../loader/loader";
import { TextLoader } from "../loader/loaderText";

import styled from 'styled-components';
import { RootState } from "../../redux/rootReducer";

const TodoAddItem = React.lazy(() => import("../todoAddItem"));
const TodoList = React.lazy(() => import("../todoList"));

export const Main: React.FC = () =>  {
  const dispatch = useDispatch();
  const todos = useSelector((state: RootState) => state.todo.todos );
  const loading = useSelector((state: RootState) => state.app.loading);
  
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
max-width: 500px;
background: #fff;
`;

const Header = styled.div`
background: #03a9f4;
color: #fff;
padding: 10px 20px;
font-weight: 600;
font-size: 2rem;
`