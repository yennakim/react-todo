import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';

// eslint-disable-next-line react/prop-types
const TodoForm = ({ addTodo }) => {
  const [value, setValue] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (value) {
      // add todo
      addTodo(value);
      // clear form after submission
      setValue('');
    }
  };

  return (
    <Form onSubmit={handleSubmit} className="TodoForm">
      <Form.Group className="mb-3">
        <input type="text" value={value} className="todo-input" placeholder="What is the task today?" onChange={(e) => setValue(e.target.value)} />
        <Button variant="primary" type="submit" className="todo-btn">Add task</Button>
      </Form.Group>
    </Form>
  );
};

export default TodoForm;
