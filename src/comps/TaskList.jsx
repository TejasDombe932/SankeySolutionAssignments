import TaskItem from "./TaskItem";

const TaskList = ({ tasks, toggleTask, deleteTask, updateTask }) => {
  if (tasks.length === 0) {
    return (
      <div className="text-center text-gray-400 py-6">
        No tasks yet 
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          toggleTask={toggleTask}
          deleteTask={deleteTask}
          updateTask={updateTask}   
        />
      ))}
    </div>
  );
};

export default TaskList;
