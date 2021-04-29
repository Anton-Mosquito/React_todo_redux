import React, { ChangeEvent, FormEvent, FormEventHandler, useCallback, useState } from "react";
import { connect, useDispatch } from 'react-redux';
import { addTodo } from "../../redux/actions";
import styled from 'styled-components';

const TodoAddItem = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();

  const submitHandler: FormEventHandler<HTMLFormElement> = useCallback((event: FormEvent) => {
    event.preventDefault();
    if (value.trim()) {
      const newTodo = { title: value, id: Date.now(), completed: false }
      dispatch(addTodo(newTodo));
      setValue(" ");
    }
  },[dispatch, value]);

  return (
    <Form action="" onSubmit={submitHandler}>
      <Input
        type="text"
        value={value}
        onChange={(event: ChangeEvent) => setValue((event.target as HTMLInputElement).value)}
      />
      <Button type="submit" >
        <Span>Add todo</Span>
      </Button>
    </Form>
  );
}

const mapDispatchToProps = {
  addTodo
};

export default connect(null,mapDispatchToProps)(TodoAddItem);



const Form = styled.form`
width: 80%;
margin: 10px auto;
display: flex;
justify-content: space-between;
`;


const Input = styled.input`
background-color: #fff;
font-size: 1.15rem;
border-bottom: 2px solid #ccc;
padding: 0 0 0 1rem;
outline: none;
border-top: none;
border-left: none;
border-right: none;
`;


const Button = styled.button`
position: relative;
display: inline-block;
padding: 15px 30px;
border: 2px solid #03a9f4;
text-transform: uppercase;
font-weight: 600;
text-decoration: none;
letter-spacing: 2px;
color:#03a9f4;
-webkit-box-reflect: below 0px linear-gradient(transparent,#0002);
transition: .5s;
outline: none;
cursor: pointer;
transition-delay: 0s;
&:hover  {
  transition-delay: 1.5s;
  color: #fff;
  box-shadow: 0 0 10px  #03a9f4,
              0 0 20px  #03a9f4,
              0 0 40px  #03a9f4,
              0 0 80px  #03a9f4,
              0 0 160px  #03a9f4,
}
&::before{
  content: '';
  position: absolute;
  left: -20px;
  top: 50%;
  transform:  translateY(-50%);
  width: 20px;
  height: 2px;
  background:  #03a9f4;
  box-shadow: 5px -8px 0  #03a9f4,
              5px 8px 0 #03a9f4;
  transition: width .5s, left .5s, height .5s,box-shadow .5s;
  transition-delay: 1s,.5s,0s,0s;
}
&:hover::before{
  width: 60%;
  height: 100%;
  left: -2px;
  box-shadow: 5px 0 0  #03a9f4,
              5px 0 0  #03a9f4;
  transition-delay: 0s,.5s,1s,1s;
}
&::after{
  content: '';
  position: absolute;
  right: -20px;
  top: 50%;
  transform:  translateY(-50%);
  width: 20px;
  height: 2px;
  background:  #03a9f4;
  box-shadow: -5px -8px 0  #03a9f4,
              -5px 8px 0 #03a9f4;
  transition: width .5s, left .5s, height .5s,box-shadow .5s;
  transition-delay: 1s,.5s,0s,0s;
}
&:hover::after{
  width: 60%;
  height: 100%;
  right: -2px;
  box-shadow: -5px 0 0  #03a9f4,
              -5px 0 0  #03a9f4;
  transition-delay: 0s,.5s,1s,1s;
}
`;

const Span = styled.span`
position: relative;
z-index: 100;
`;


