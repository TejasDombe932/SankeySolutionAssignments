const SUGGESTED_TASKS = [
  "Drink Water",
  "Exercise",
  "Study",
  "Read for 30 minutes",
  "Check Emails",
  "Plan Tomorrow",
];

const SuggestedTasks = ({ addSuggestedTask }) => {
  return (
    <div className="flex flex-wrap gap-2">
      
      {SUGGESTED_TASKS.map((task) => (
        <button
          key={task}
          onClick={() => addSuggestedTask(task)}
          className="px-3 py-1 text-sm rounded-full
                     bg-gray-100 text-gray-700
                     hover:bg-blue-100 hover:text-blue-700
                     transition"
        >
          + {task}
        </button>
      ))}
    </div>
  );
};

export default SuggestedTasks;
