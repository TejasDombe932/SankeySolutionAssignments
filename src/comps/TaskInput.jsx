const TaskInput = ({ input, setInput, addTask }) => {
  
  return (
    <div className="flex items-center gap-3 bg-gray-50 p-3 rounded-xl">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What do you need to get done?"
        className="flex-1 bg-transparent outline-none text-gray-700"
      />

      <button
        onClick={addTask}
        disabled={!input.trim()}
        className={`px-4 py-2 rounded-lg font-medium transition
          ${
            input.trim()
              ? "bg-blue-600 text-white hover:bg-blue-700"
              : "bg-gray-300 text-gray-500 cursor-not-allowed"
          }`}
      >
        + Add
      </button>
    </div>
  );
};

export default TaskInput;
