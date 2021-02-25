import React from "react";
import { connect, useDispatch } from 'react-redux';
import { removeTodo, toggleTodo } from "../../redux/actions";
import sprite from "../../assets/sprite.svg";
import styled from 'styled-components';
import { IFetchedTodo } from "../../models/response";
import { ITodo } from "../../models/state";

interface IProps {
  todo: IFetchedTodo | ITodo;
  index: number
}

const TodoItem = ({ todo, index }: IProps) => {
  const dispatch = useDispatch();
  const classes = [];
  
  if (todo.completed) {
    classes.push("done");
  }
  
  return (
    <ListItem>
      <Label className={classes.join(" ")}>
        <Input
          type="checkbox"
          onChange={() => {dispatch(toggleTodo(todo.id))}}
          checked={todo.completed}
        />
        <Checkbox></Checkbox>
        <NumberTodo>{index + 1}</NumberTodo>&emsp;
        {todo.title}
      </Label>
      <Button onClick={() => dispatch(removeTodo(todo.id))}>
        <svg width="15px" height="15px">
          <use href={sprite + "#close"}></use>
        </svg>
      </Button>
    </ListItem>
  );
}


const mapDispatchToProps = {
  toggleTodo,
  removeTodo,
};

export default connect(null,mapDispatchToProps)(TodoItem);


const ListItem = styled.li`
position: relative;
padding: 15px 0;
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
border-bottom: 1px solid rgba(0,0,0,.1);
border-radius: 4px;
&:last-child {
  border-bottom: none;
}
`;

const Label = styled.label`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
cursor: pointer;
`;

const Input = styled.input`
visibility: hidden;
appearance: none;
&:checked ~ span{
  background: #03a9f4;
  border: 1px solid #03a9f4;
}
&:checked ~ span:before{
  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
}
`;


const NumberTodo = styled.p`
position: absolute;
`;

const Checkbox = styled.span`
position: absolute;
left: -30px;
width: 20px;
height: 20px;
border: 1px solid #ccc;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
&:before{
  content: "";
  position: absolute;
  top: 5px;
  width: 10px;
  height: 5px;
  border-left: 2px solid #ccc;
  border-bottom: 2px solid #ccc;
  transform: rotate(-40deg);
}
`;


const Button = styled.button`
display: flex;
justify-content: center;
align-items: center;
height: 30px;
width: 30px;
border-radius: 50%;
background-color: #fc3275;
cursor: pointer;
outline: none;
border: none;
padding: 0;
`;