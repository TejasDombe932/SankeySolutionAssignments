import Swal from "sweetalert2";

const TaskItem = ({ task, toggleTask, deleteTask, updateTask }) => {

  const handleUpdate = () => {
    Swal.fire({
      title: "Update Task",
      input: "text",
      inputValue: task.text,
      showCancelButton: true,
      confirmButtonText: "Update",
      inputValidator: (value) => {
        if (!value.trim()) {
          return "Task name cannot be empty";
        }
      },
    }).then((result) => {
      if (result.isConfirmed) {
        if (result.value.trim() === task.text) return;

        updateTask(task.id, result.value.trim());

        Swal.fire({
          toast: true,
          position: "top-end",
          icon: "success",
          title: "Task updated",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  return (
    <div
      className={`flex items-center justify-between p-4 rounded-xl transition
        ${task.completed ? "bg-green-50" : "bg-gray-50 hover:shadow"}`}
    >
     
      <div
        onClick={() => toggleTask(task.id)}
        className="flex items-center gap-3 cursor-pointer"
      >
        <input
          type="checkbox"
          checked={task.completed}
          readOnly
          className="accent-green-600"
        />
        <span className={task.completed ? "line-through text-gray-400" : ""}>
          {task.text}
        </span>
      </div>

      
      <div className="flex items-center gap-3">
        <button
          onClick={handleUpdate}
          className="text-blue-600 hover:underline text-sm"
        >
          Update
        </button>

        <button
          onClick={() => deleteTask(task.id)}
          className="text-red-500 hover:text-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskItem;
