import { useState, useEffect } from "react";
import Header from "./comps/Header";
import TaskInput from "./comps/TaskInput";
import TaskList from "./comps/TaskList";
import ProgressBar from "./comps/ProgressBar";
import SuggestedTasks from "./comps/SuggestedTasks";
import JokeBanner from "./comps/JokeBanner";
import Swal from "sweetalert2";

const App = () => {
  
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

  const [input, setInput] = useState("");

 
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
  if (!input.trim()) {
    Swal.fire({
      toast: true,
      position: "top-end",
      icon: "warning",
      title: "Task cannot be empty",
      showConfirmButton: false,
      timer: 1500,
    });
    return;
  }

  setTasks([
    ...tasks,
    {
      id: Date.now(),
      text: input.trim(),
      completed: false,
    },
  ]);

  setInput("");

  Swal.fire({
    toast: true,
    position: "top-end",
    icon: "success",
    title: "Task added",
    showConfirmButton: false,
    timer: 1500,
  });
};


  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

 
  const updateTask = (id, newText) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, text: newText } : task
      )
    );
  };

  const deleteTask = (id) => {
  Swal.fire({
    title: "Delete task?",
    text: "Do You Really Want To Delete This Task",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#d33",
    cancelButtonColor: "#3085d6",
    confirmButtonText: "Yes, delete",
  }).then((result) => {
    if (result.isConfirmed) {
      setTasks(tasks.filter((task) => task.id !== id));

      Swal.fire({
        toast: true,
        position: "top-end",
        icon: "success",
        title: "Task deleted",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  });
};


  const addSuggestedTask = (text) => {
    setTasks([
      ...tasks,
      {
        id: Date.now(),
        text,
        completed: false,
      },
    ]);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;

  return (
    
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black flex items-center justify-center">

      <div className="bg-white w-full max-w-xl rounded-2xl shadow-lg p-6 space-y-6">

        <Header/>
        <JokeBanner />

        <ProgressBar total={totalTasks} completed={completedTasks} />
        <SuggestedTasks addSuggestedTask={addSuggestedTask} />
        <TaskInput input={input} setInput={setInput} addTask={addTask} />

       
        <TaskList
          tasks={tasks}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  );
};

export default App;
