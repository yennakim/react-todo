/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/prop-types */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

const Todo = ({
  task, deleteTodo, editTodo, toggleComplete,
}) => (
  <div className="Todo">
    <p className={`${task.completed ? 'completed' : 'incompleted'}`} onClick={() => toggleComplete(task.id)}>{task.task}</p>
    <div>
      <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
      <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
    </div>
  </div>
);
export default Todo;
