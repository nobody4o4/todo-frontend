import React, { useState } from "react";
import Button from "./button";
import { deleteTask } from "../services/delete-task";

export default function TaskCard({
  id = 0,
  name = "",
  description = "",
  status = "",
  tasks = [],
  setTasks = () => {},
}) {
  const [isDeleting, setIsDeleting] = useState(false);
  const handleDelete = async (id) => {
    setIsDeleting(true);
    await deleteTask(id).then(() => {
      setTasks(tasks.filter((task) => task.id !== id));
    });
    setIsDeleting(false);
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
    </div>
  );
}
