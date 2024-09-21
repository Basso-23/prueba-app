import React, { useState } from "react";
import Input from "@/components/Input";

import { useAtom } from "jotai";
import { atomInputData } from "@/atom";

const Home = () => {
  const [inputData, setInputData] = useAtom(atomInputData);
  const [tasks, setTasks] = useState([]);

  // Función para agregar una nueva tarea
  const addTask = () => {
    const newTask = {
      title: inputData.title,
      nombre: inputData.nombre,
      id: Math.floor(10000 + Math.random() * 90000), // Generar un ID basado en la longitud actual
    };

    // Actualizar el estado de tasks con la nueva tarea
    setTasks([...tasks, newTask]);
  };

  // Función para eliminar una tarea por su ID
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); // Actualizar el estado con la lista filtrada
  };

  return (
    <section>
      <div>Contenido title: {inputData.title}</div>
      <Input label={"Título"} id={"title"} type={"text"} />
      <div>Contenido nombre: {inputData.nombre}</div>
      <Input label={"Nombre"} id={"nombre"} type={"text"} />

      <button onClick={addTask}>Add</button>

      {/* Mostrar las tareas agregadas */}
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <p>ID: {task.id}</p>
            <p>Título: {task.title}</p>
            <p>Nombre: {task.nombre}</p>
            {/* Botón para eliminar la tarea */}
            <button onClick={() => deleteTask(task.id)}>Eliminar</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Home;
