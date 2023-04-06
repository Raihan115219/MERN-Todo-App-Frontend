import React from "react";

import { BiEdit } from "react-icons/bi";
import { AiFillDelete, AiOutlineEye } from "react-icons/ai";

const ToDo = ({ text, updateMode, deleteToDo, handleView }) => {
  return (
    <div className="todo">
      <div className="text">{text}</div>
      <div className="icons">
        <label htmlFor="my-modal-3">
          <AiOutlineEye
            className="icon"
            htmlFor="my-modal-3"
            onClick={handleView}
          />
        </label>
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={deleteToDo} />
      </div>

      {/* The button to open modal */}
    </div>
  );
};

export default ToDo;
