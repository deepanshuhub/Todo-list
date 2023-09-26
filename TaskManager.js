import React, { useState } from 'react';

function TaskManager() {
    // State to manage tasks
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    // Function to handle task creation
    const handleAddTask = () => {
        if (taskInput.trim() === '') {
            return; // Prevent adding empty tasks
        }

        // Create a new task object with a unique ID and the task description
        const newTask = {
            id: Date.now(),
            description: taskInput,
        };

        // Add the new task to the tasks state
        setTasks([...tasks, newTask]);

        // Clear the task input field
        setTaskInput('');
    };

    // Function to handle task deletion
    const handleDeleteTask = (taskId) => {
        // Filter out the task with the specified ID
        const updatedTasks = tasks.filter((task) => task.id !== taskId);

        // Update the tasks state
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h2>Task Manager</h2>
            <div>
                <input
                    type="text"
                    placeholder="Add a new task"
                    value={taskInput}
                    onChange={(e) => setTaskInput(e.target.value)}
                />
                <button onClick={handleAddTask}>Add Task</button>
            </div>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id}>
                        {task.description}
                        <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskManager;
