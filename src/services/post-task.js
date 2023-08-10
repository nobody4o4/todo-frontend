export const postTask = async ({ taskName, taskDescription, taskStatus }) => {
  try {
    let res = await fetch(import.meta.env.VITE_API_URL + "/tasks/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        taskName,
        taskDescription,
        taskStatus,
      }),
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
