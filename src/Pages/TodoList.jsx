import { useState, useEffect } from "react";

function TodoList() {
  const [tasks, setTasks] = useState(() => {
    const saveTask = localStorage.getItem("tasks");
    return saveTask ? JSON.parse(saveTask) : [];
  });

  const [todo, setTodo] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  function addTask() {
    if (todo.trim() === "") return;

    if (editIndex !== null) {
      const updatedTasks = tasks.map((t, i) => (i === editIndex ? todo : t));
      setTasks(updatedTasks);
      setEditIndex(null);
    } else {
      setTasks([...tasks, todo]);
    }

    setTodo("");
  }

  function deleteTask(index) {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  }

  function editTask(index) {
    setTodo(tasks[index]);
    setEditIndex(index);
  }

  return (
    <div className="bg-orange-100 h-[100vh] flex items-center justify-center">
      <div className="bg-red-200 p-10 flex flex-col w-2xl items-center justify-center">
        <h1 className="font-bold text-4xl text-center mb-5">Todo List</h1>
        <div className="w-full mb-10">
          <input
            value={todo}
            onChange={(e) => setTodo(e.target.value)}
            className="border w-[80%] outline-none px-5 py-2 border-e-0"
            type="text"
          />
          <button
            onClick={addTask}
            className="border border-green-800 bg-green-800 w-[20%] cursor-pointer border-s-0 px-5 py-2 text-white"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        {tasks.map((t, index) => (
          <div key={index} className="border py-2 px-2 w-full flex mb-5">
            <div className="px-2 py-2 w-[80%] text-black">
              <p>{t}</p>
            </div>
            <div className="flex w-[20%] justify-end items-center gap-2">
              <button
                className="px-5 py-2 border bg-yellow-500 cursor-pointer text-white border-yellow-500"
                onClick={() => editTask(index)}
              >
                Edit
              </button>
              <button
                className="px-5 py-2 border bg-red-900 cursor-pointer text-white border-red-900"
                onClick={() => deleteTask(index)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TodoList;
