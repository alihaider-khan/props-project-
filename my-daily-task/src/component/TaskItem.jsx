import React from 'react';

export default function TaskItem({ task, onToggle, onDelete }) {
  return (
    <div className="flex items-center justify-between p-3.5 bg-white border border-gray-100 rounded-xl shadow-sm transition-all hover:shadow-md">
      <div className="flex items-center gap-3">
        {/* Checkbox */}
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => onToggle(task.id)}
          className="w-5 h-5 rounded-md border-gray-300 text-blue-600 focus:ring-blue-500 cursor-pointer"
        />
        {/* Task Text (Ternary operator for conditional styling) */}
        <span
          className={`text-sm font-medium transition-all ${
            task.completed ? 'line-through text-gray-400' : 'text-gray-700'
          }`}
        >
          {task.text}
        </span>
      </div>

      {/* Delete Button */}
      <button
        onClick={() => onDelete(task.id)}
        className="px-2.5 py-1 text-xs font-semibold text-red-500 hover:text-white bg-red-50 hover:bg-red-500 rounded-lg transition-colors duration-150"
      >
        Delete
      </button>
    </div>
  );
}