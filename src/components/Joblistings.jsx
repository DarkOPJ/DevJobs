import React, { useEffect, useState } from "react";
import JobListingsCard from "./JobListingsCard";
import { fetchJobs } from "../services/ProductApi";
import Spinner from "./Spinner";

const Joblistings = ({ isHome = true }) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  let sliceJobs = jobs;
  if (isHome) {
    sliceJobs = jobs.slice(0, 3);
  }

  useEffect(() => {
    const fetchingJobs = async () => {
      try {
        const data = await fetchJobs("/jobs");
        setJobs(data.reverse());
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchingJobs();
    // // Add a timer before fetching the data
    // const timer = setTimeout(() => {
    //   fetchingJobs();
    // }, 2000);
    // // Cleanup the timer when the component unmounts
    // return () => clearTimeout(timer);
  }, []);

  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHome ? "Recent Jobs" : "Browse Jobs"}
        </h2>

        {loading ? (
          <div className="py-5 flex justify-center">
            <Spinner loading={loading} />
          </div>
        ) : jobs.length === 0 ? ( // Check if jobs array is empty
          <div className="py-5 flex justify-center">
            <p className="text-gray-500 text-lg font-semibold">
              No jobs at the moment.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {sliceJobs.map((job) => (
              <JobListingsCard
                key={job.id}
                type={job.type}
                title={job.title}
                description={job.description}
                salary={job.salary}
                location={job.location}
                id={job.id}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Joblistings;
