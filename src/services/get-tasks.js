export const getTasks = async (signal) => {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL + "/tasks/all", {
      method: "GET",
      signal,
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};
