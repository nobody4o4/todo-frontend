import React from 'react'
import TaskCard from './task-card'

export default function TasksSection(
    {
        tasks = [],
        setTasks = () => {}
    }
) {
    return (
        <div className="gap-6 grid grid-cols-3">
            {tasks.map((task) => (
                <TaskCard
                    key={task.id}
                    id={task.id}
                    name={task.taskName}
                    description={task.taskDescription}
                    status={task.taskStatus}

                    //for passing the tasks array to the child component 
                    //used to update the tasks array in the parent component
                    // like delete
                    tasks={tasks}
                    setTasks={setTasks}

                // updateTask={UpdateTask}
                // onUpdate={onUpdate} // Pass the onUpdate function
                />
            ))}
        </div>
    )
}
