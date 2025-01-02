// const API_TO_USE = '/jobApi'
// const API_TO_USE = 'https://jsondevdessert.onrender.com/jobs'
const API_TO_USE = 'http://localhost:3000/jobs'

// Used to fetch jobs from the api
export const fetchJobs = async (endpoint) => {
  try {
    // For online data fetching when app is not hosted
    // const res = await fetch(`/jobApi`);

    // For online data fetching since proxy not working on vercel
    const res = await fetch(`${API_TO_USE}${endpoint}`);
    // const res = await fetch(`${API_TO_USE}`);
    if (!res.ok) {
      throw new Error("HTTP Error! Error code: ", res.status);
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("An error occurred fetching the data.", error);
    throw error;
  }
};
// Used to fetch jobs from the api

// Used to add a new job to the api
export const addNewJob = async (newJob) => {
  try {
    const res = await fetch(`${API_TO_USE}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newJob),
    });

    if (!res.ok) {
      throw new Error(
        "There was an error sending the data, code: ",
        res.status
      );
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("An error occurred. Error code: ", error);
    throw error;
  }
};
// Used to add a new job to the api

// Used to delete a job
export const deleteJob = async (id) => {
  try {
    const res = await fetch(`${API_TO_USE}/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(
        "There was an error deleting this job, code: ",
        res.status
      );
    }

    const data = await res.json();
    return data;

  } catch (error) {
    console.error("An error occurred. Error code: ", error);
    throw error;
  }
};
// Used to delete a job

// Used to edit a job
export const editJob = async (id, edittedJob) => {
  try {
    const res = await fetch(`${API_TO_USE}/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edittedJob),
    });
    if (!res.ok) {
      throw new Error(
        "There was an error editing this job, code: ",
        res.status
      );
    }

    const data = await res.json();
    return data;
    
  } catch (error) {
    console.error("An error occurred. Error code: ", error);
    throw error;
  }
};
// Used to edit a job
