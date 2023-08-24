export const getTasks = async (signal) => {
  try {

    const res = await fetch(import.meta.env.VITE_API_URL + "/tasks/all",
    {
      method: "GET",
      signal,
    });

    // for data is directly returned as array of json objects
    //return await res.json();

    //this is done as data details are returned as object => pagination
    const data = await res.json();
    return data.content;

  } catch (err) {
    console.log(err);
  }
};
