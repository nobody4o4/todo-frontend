import { useEffect, useState } from "react";
import Input from "./components/input";
import Button from "./components/button";
import { getTasks } from "./services/get-tasks";
import TaskCard from "./components/task-card";
import { postTask } from "./services/post-task";
import TasksSection from "./components/tasks-section";

function App() {

  //task to be populated
  const [tasks, setTasks] = useState([]);

  //individual fields for the form
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

  console.log(tasks)
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
        <Button
          text="Add Task"
          loading={isAdding} />
      </form>

      <hr className="my-8" />

      <TasksSection
        tasks={tasks}
        setTasks={setTasks}
      />

    </div>
  );
}

export default App;
