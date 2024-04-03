// import React from "react";

import { useState } from "react";

interface TaskProps {
  title: string;
  id: string;
  completed: boolean;
  handleDelete: () => void;
  toggleComplete: () => void;
  handleEdit: (newTitle: string) => void;
}

const Task = ({ title, completed, handleDelete, handleEdit, toggleComplete }: TaskProps) => {



  const [newTitle, setNewTitle] = useState<string>(title)

  const handleOnChange = async (event: React.ChangeEvent<HTMLInputElement>): Promise<void> => {
    if (completed === true) {
      setNewTitle(title)
    } else {
      title = ""; 
      setNewTitle(event.target.value)
    }

  }
  return (
    <div className="flex space-x-4 my-8">
      <input
        className="py-3 px-4 outline-none rounded-lg border border-gray-300 focus:border-blue-500"
        style={{ textDecoration: completed ? "line-through" : "none" }}
        value={newTitle}
        onChange={handleOnChange}
        type="text"
      />
      <button
        onClick={() => handleEdit(newTitle)}
        className="px-4 py-2 bg-zinc-500 text-white rounded-lg hover:bg-zinc-600 focus:outline-none focus:ring focus:ring-zinc-400 focus:ring-opacity-50">
        Editar
      </button>
      <button
        onClick={handleDelete}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-400 focus:ring-opacity-50">
        Eliminar
      </button>
      <button
        onClick={toggleComplete}
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400 focus:ring-opacity-50">
        Completar
      </button>
    </div>
  );
};

export default Task;