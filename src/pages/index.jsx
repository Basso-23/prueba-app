import React, { useState } from "react";
import Input from "@/components/Input";

import { useAtom } from "jotai";
import { atomInputData } from "@/atom";
import { FiTrash } from "react-icons/fi";

const Home = () => {
  const [inputData, setInputData] = useAtom(atomInputData);
  const [tasks, setTasks] = useState([]);

  // Función para agregar una nueva tarea
  const addTask = () => {
    const newTask = {
      nombre: inputData.nombre,
      id: Math.floor(10000 + Math.random() * 90000), // Generar un ID basado en la longitud actual
    };

    // Actualizar el estado de tasks con la nueva tarea
    setTasks([...tasks, newTask]);

    inputData.nombre = "";
    document.getElementById("nombre").value = "";
  };

  // Función para eliminar una tarea por su ID
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks); // Actualizar el estado con la lista filtrada
  };

  const toggleTaskCompletion = (taskId) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <main className=" min-h-[100dvh] w-full flex py-10">
      <section className="todo-container">
        <div className="h-full w-full overflow-auto">
          <div className="flex w-full gap-2 p-[18px]">
            <div className="input-container">
              <Input
                label={false}
                id={"nombre"}
                type={"text"}
                placeholder={"Ingresa una nueva tarea"}
              />
            </div>
            <button
              className={`add-btn ${
                !inputData.nombre ? " pointer-events-none brightness-75" : ""
              }`}
              onClick={addTask}
            >
              Añadir
            </button>
          </div>

          {/* Mostrar las tareas agregadas */}
          <div className="task-container">
            {tasks.map((task, index) => (
              <div key={index} className="task">
                <div className="task-info">
                  <input
                    className="checkbox"
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => toggleTaskCompletion(task.id)}
                  />
                  <span className={task.completed ? "line-through" : ""}>
                    {task.nombre}
                  </span>
                </div>

                {/* Botón para eliminar la tarea */}
                <button
                  className="delete-btn scale-105"
                  onClick={() => deleteTask(task.id)}
                >
                  <FiTrash />
                </button>
              </div>
            ))}
          </div>

          <div className="bottom-container">
            {tasks.length === 1 ? (
              <>Tienes {tasks.length} tarea pendiente</>
            ) : (
              <>Tienes {tasks.length} tareas pendientes</>
            )}
            <button className="clear-btn" onClick={() => setTasks([])}>
              Limpiar
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
