import React, { useState } from "react";
import Button from "./button";
import { deleteTask } from "../services/delete-task";
import { UpdateTask } from "../services/update-task";

export default function TaskCard({
  id = 0,
  name = "",
  description = "",
  status = "",
  tasks = [],
  //setTasks is an empty function by default
  //it is an function that takes an array of tasks as an argument
  setTasks = () => {},
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isUpdating, setIsUpdating] = useState(false);

  //delete task of a particular task id
  const handleDelete = async (id) => {
    setIsDeleting(true);
    await deleteTask(id).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
    setIsDeleting(false);
  };

  //update task of a particular task id
  const handleUpdate = async (id) => {
    setIsUpdating(true);

    await UpdateTask({ taskId: id, taskName: name, taskDescription: description, taskStatus: status })
      .then(() => {
      // Update the tasks state with the updated task
      const newUpdatedTasks = tasks.map((task) =>
        task.id === id ? { ...task, taskName: name, taskDescription: description, taskStatus: status } : task
      );
      setTasks(newUpdatedTasks);
    });
    setIsUpdating(false);
  };
  
  return (
    <div className="flex py-4 px-8 bg-neutral-700 rounded-md gap-8 relative">
      <span className="text-2xl font-semibold">{id}.</span>
      <div className="flex flex-col">
        <h1 className="font-semibold text-lg">
          Name: <span className="text-base font-normal">{name}</span>
        </h1>
        <p className="font-semibold text-lg">
          Description:{" "}
          <span className="text-base font-normal">{description}</span>
        </p>
        <span className="font-semibold text-lg">
          Status: <span className="text-base font-normal">{status}</span>
        </span>
      </div>
      <Button
        text="-"
        type="button"
        className="text-base h-fit w-fit absolute top-4 right-4 rounded-md"
        onClick={() => handleDelete(id)}
        loading={isDeleting}
      />
      <Button
        text="Edit"
        type="button"
        className="text-base h-fit w-fit absolute bottom-4 right-4 rounded-md"
        onClick={() => {handleUpdate(id)}}
        loading={isUpdating}
      />
    </div>
  );
}
