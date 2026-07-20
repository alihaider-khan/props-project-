import React, { useState, useEffect } from 'react';
import TaskItem from './component/TaskItem';

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // 1. Load & Initialize Flow (Page load hone par execute hoga)
  // useEffect(() => {
  //   const savedTasks = localStorage.getItem('my-day-tasks');
  //   if (savedTasks) {
  //     try {
  //       setTasks(JSON.parse(savedTasks));
  //     } catch (error) {
  //       console.error("Error parsing local storage data", error);
  //       setTasks([]);
  //     }
  //   } else {
  //     setTasks([]);
  //   }
  // }, []);

  // // 5. Auto-Save Flow (Jab bhi tasks change honge, local storage mein save hoga)
  // useEffect(() => {
  //   localStorage.setItem('my-day-tasks', JSON.stringify(tasks));
  // }, [tasks]);

  // 2. Add Task Flow
  const handleAddTask = (e) => {
    e.preventDefault(); // Page refresh hone se rokna
    const trimmedInput = inputValue.trim();

    // Validation Check
    if (trimmedInput === '') return;

    // New Task Object Creation
    const newTask = {
      id: Date.now(),
      text: trimmedInput,
      completed: false
    };

    // State Update (Immutable spread operator)
    setTasks([...tasks, newTask]);
    setInputValue(''); // Input box clear karna
  };

  // 3. Toggle Task Completion Flow
  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((item) => {
      if (item.id === id) {
        return { ...item, completed: !item.completed };
      }
      return item;
    });
    setTasks(updatedTasks);
  };

  // 4. Delete Task Flow
  const handleDeleteTask = (id) => {
    const filteredTasks = tasks.filter((item) => item.id !== id);
    setTasks(filteredTasks);
  };

  return (
    <div className="min-h-screen bg-slate-50 py-10 px-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg overflow-hidden p-6 border border-slate-100">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-slate-800">My Day</h1>
          <p className="text-sm text-slate-400">Stay organized and get things done</p>
        </div>

        {/* Form (Controlled Input) */}
        <form onSubmit={handleAddTask} className="flex gap-2 mb-6">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="flex-1 px-4 py-2.5 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
          <button
            type="submit"
            className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold rounded-xl transition-colors"
          >
            Add
          </button>
        </form>

        {/* Task List */}
        <div className="space-y-3">
          {tasks.length > 0 ? (
            tasks.map((task) => (
              // Best Practice: Hamesha unique ID ko key banayein, index ko nahi
              <TaskItem
                key={task.id}
                task={task}
                onToggle={handleToggleTask}
                onDelete={handleDeleteTask}
              />
            ))
          ) : (
            <div className="text-center py-8 text-slate-400 text-sm">
              No tasks for today. Add one above!
            </div>
          )}
        </div>

      </div>
    </div>
  );
}