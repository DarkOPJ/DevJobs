// const API_BASE_URL = "http://localhost:4000";

// Used to fetch jobs from the api
export const fetchJobs = async (endpoint) => {
  try {
    // For online data fetching when app is not hosted
    // const res = await fetch(`/jobApi${endpoint}`);

    // For online data fetching since proxy not working on vercel
    const res = await fetch(`/api${endpoint}`);
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
    const res = await fetch("/jobApi/jobs", {
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
  } catch (error) {
    console.error("An error occurred. Error code: ", error);
    throw error;
  }
};
// Used to add a new job to the api

// Used to delete a job
export const deleteJob = async (id) => {
  try {
    const res = await fetch(`/jobApi/jobs/${id}`, {
      method: "DELETE",
    });
    if (!res.ok) {
      throw new Error(
        "There was an error deleting this job, code: ",
        res.status
      );
    }
  } catch (error) {
    console.error("An error occurred. Error code: ", error);
    throw error;
  }
};
// Used to delete a job

// Used to edit a job
export const editJob = async (id, edittedJob) => {
  try {
    const res = await fetch(`/jobApi/jobs/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(edittedJob),
    });
    if (!res.ok) {
      throw new Error(
        "There was an error editing this job, code: ",
        res.status
      );
    }
  } catch (error) {
    console.error("An error occurred. Error code: ", error);
    throw error;
  }
};
// Used to edit a job