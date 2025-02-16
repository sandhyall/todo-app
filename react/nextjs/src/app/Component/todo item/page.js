import React from 'react';
import { FaCheck, FaCircle } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const TodoItem = ({ text, id, isComplete, deleteTodo, toggle }) => {
  return (
    <div className="flex items-center my-3 gap-2">
      {/* Check or Circle Icon based on task completion */}
      <div onClick={() => { toggle(id) }} className="flex items-center cursor-pointer">
        {isComplete ? (
          <FaCheck size={20} className="text-green-500" />
        ) : (
          <FaCircle size={20} className="text-gray-500" />
        )}

        {/* Todo Text */}
        <p className={`ml-3 flex-1 ${isComplete ? 'line-through text-gray-500' : 'text-black'}`}>
          {text}
        </p>
      </div>

      {/* Delete Icon (aligned to the end of the row) */}
      <div className="ml-auto">
        <MdDelete
          size={20}
          className="text-black cursor-pointer hover:text-blue-400"
          onClick={() => { deleteTodo(id) }}
        />
      </div>
    </div>
  );
};

export default TodoItem;
