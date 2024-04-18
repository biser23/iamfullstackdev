import React, { useState } from 'react';

const InputCreate = () => {
  const [taskTitle, setTaskTitle] = useState('');

  const handleInputChange = (event) => {
    setTaskTitle(event.target.value);
  };

  const handleAddTask = async () => {
    try {
      const response = await fetch('http://localhost:3000/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: taskTitle }),
      });
      const data = await response.json();
      console.log(data); 
      setTaskTitle(''); 
    } catch (error) {
      console.error('Error al agregar tarea:', error);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskTitle}
        onChange={handleInputChange}
        placeholder="Ingrese el título de la tarea"
      />
      <button onClick={handleAddTask}>Agregar tu tarea</button>
    </div>
  );
};

export default InputCreate;