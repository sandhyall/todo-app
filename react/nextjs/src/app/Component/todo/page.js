'use client'

import { BiSolidCommentAdd } from "react-icons/bi";
import React, { useEffect, useRef, useState } from 'react';
import Todoitem from '../todo item/page';
import { CardBody,Card,Button } from '@heroui/react';

const Todo = () => {
  // State to hold the list of todos
  const [todolist, setTodolist] = useState([]);
  
  // Ref for the input field
  const inputRef = useRef();

  // Function to add a todo
  const add = () => {
    const inputText = inputRef.current.value.trim();
    
    // If input is empty, return early
    if (inputText === "") return;
    
    const newTodo = {
      id: Date.now(),   // Unique ID for the todo
      text: inputText,  // The todo text
      isComplete: false, // Completion state of the todo
    };
    
    // Add the new todo to the list
    setTodolist((prev) => [...prev, newTodo]);
    
    // Clear the input field after adding the todo
    inputRef.current.value = "";
  };

  // Function to toggle completion of a todo
  const toggleComplete = (id) => {
    setTodolist((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, isComplete: !todo.isComplete } : todo
      )
    );
  };

  // Function to delete a todo
  const deleteTodo = (id) => {
    setTodolist((prev) => prev.filter((todo) => todo.id !== id));
  };

  const toggle =(id) =>{
    setTodolist((prevtodo)=>{
      return prevtodo.map((todo)=>{
        if (todo.id == id){
          return{...todo ,isComplete:!todo.isComplete}
        }
        return todo;
      })
    })
  }
   useEffect(()=>{
    console.log(todolist);
   },[todolist])

  return (
    <div className='place-self-center bg-white w-10/12 max-w-md flex flex-col p-7 rounded-xl min-h-[500px]'>
      <Card className="shadow-lg">
        <CardBody>
          {/* Header Section */}
          <div className='flex items-center text-black gap-2 mb-4'>
            <BiSolidCommentAdd size={30} />
            <h1  className='text-2xl font-semibold'>To-Do List</h1>
          </div>
          
          {/* Input Box for adding todos */}
          <div className='flex items-center my-7 bg-gray-200 rounded-full'>
            <input
              ref={inputRef}
              className='bg-transparent text-black border-0 outline-none flex-1 h-10 pl-4 pr-3 placeholder:text-purple-500'
              type='text'
              placeholder='Add your task'
            />
            <Button
              onClick={add}
              className='bg-red-500 cursor-pointer h-11 w-32 rounded-full font-medium'
              auto
            >
              ADD +
            </Button>
          </div>

          {/* Todo List Rendering */}
          <div className="space-y-4">
            {todolist.map((item) => (
              <Todoitem
                key={item.id}
                text={item.text}
                id={item.id}
                isComplete={item.isComplete}
                toggleComplete={toggleComplete}
                deleteTodo={deleteTodo}
                toggle = {toggle}
              />
            ))}
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Todo;
