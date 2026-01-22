const ProgressBar = ({ total, completed }) => {
  const percentage =
    total === 0 ? 0 : Math.round((completed / total) * 100);

  return (
    <div className="space-y-2">
    
      <div className="flex justify-between text-sm text-gray-600">
        <span>
          Completed {completed} of {total} tasks
        </span>
        <span>{percentage}%</span>
      </div>

      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full bg-green-500 transition-all duration-300"
          style={{ width: `${percentage}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;
