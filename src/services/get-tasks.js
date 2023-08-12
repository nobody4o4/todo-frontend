export const getTasks = async (signal) => {
  try {

    const res = await fetch(import.meta.env.VITE_API_URL + "/tasks/all",
    {
      method: "GET",
      signal,
    });

    //return await res.json(); for data is directly returned as array of json objects



    //this is done as data details are returned as object => pagination
    const data = await res.json();
    return data.content;

  } catch (err) {
    console.log(err);
  }
};
