import { useEffect, useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import { getTasks } from "./services/get-tasks";
import TaskCard from "./components/task-card";
import { postTask } from "./services/post-task";

function App() {

  const [tasks, setTasks] = useState([]);


  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [status, setStatus] = useState("pending");

  const [isAdding, setIsAdding] = useState(false);
  

  const onSubmit = async (e) => {
    e.preventDefault();
    setIsAdding(true);
    await postTask({ taskName, taskDescription, taskStatus: status })
      .then((data) => {
        setTasks([...tasks, data]);
        setTaskName("");
        setTaskDescription("");
      });
    setIsAdding(false);
  };

  useEffect(() => {
    const ac = new AbortController();
    const signal = ac.signal;

    getTasks(signal).then((data) => {
      setTasks(data);
    });
  }, []);


  return (
    <div className="p-8">
      <h1>Todo Application</h1>

      <form onSubmit={onSubmit}>
        <Input
          label="Task Name:"
          type="text"
          placeholder="Eg: Buy Milk"
          value={taskName}
          onChange={setTaskName}
        />
        <Input
          label="Task Description:"
          type="text"
          placeholder="Eg: Buy Milk"
          value={taskDescription}
          onChange={setTaskDescription}
        />
        <Button text="Add Task" loading={isAdding} />
      </form>

      <hr className="my-8" />
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

            updateTask={UpdateTask}
            onUpdate={onUpdate} // Pass the onUpdate function
          />
        ))}

      </div>
    </div>
  );
}

export default App;
