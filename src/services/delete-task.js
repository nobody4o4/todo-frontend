export const deleteTask = async (id) => {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + `/tasks/delete/${id}`,
      {
        method: "DELETE",
      }
    );

    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
