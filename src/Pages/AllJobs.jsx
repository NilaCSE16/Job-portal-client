// import { useLoaderData } from "react-router-dom";
import SeeAllJobs from "./SeeAllJobs";
import { useEffect, useState } from "react";
// import { useEffect, useState } from "react";

const AllJobs = () => {
  // const jobs = useLoaderData();
  const [currentPage, setCurrentPage] = useState(0);
  const [jobLength, setJobLength] = useState(0);
  // const [itemsPerPage, setItemsPerPage] = useState(6);

  const [jobs, setJobs] = useState(null);
  // console.log(jobs.length);
  useEffect(() => {
    fetch("https://job-portal-api-rose.vercel.app/jobCount", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("data Count: ", data);
        setJobLength(data.result);
      });
  }, []);

  const itemsPerPage = 6;
  const numberOfJobs = Math.ceil(jobLength / itemsPerPage);
  const pages = [...Array(numberOfJobs ? numberOfJobs : null).keys()];
  // console.log("Pages: ", pages);

  useEffect(() => {
    jobs &
      fetch(
        `https://job-portal-api-rose.vercel.app/allJobs?page=${currentPage}&size=${itemsPerPage}`
      )
        .then((res) => res.json())
        .then((data) => {
          // console.log(data);
          setJobs(data);
        });
  }, [currentPage, itemsPerPage, jobs]);

  return (
    <div className="m-4">
      <h1 className="text-5xl font-bold text-center mb-4">All jobs here</h1>
      <div>
        {jobs?.map((job) => (
          <SeeAllJobs key={job._id} job={job}></SeeAllJobs>
        ))}
      </div>
      <div className="grid place-content-center w-screen">
        <div className="pagination">
          {/* <p>Current Page: {itemsPerPage}</p> */}
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={currentPage === page ? "btn selected" : "btn"}
            >
              {page}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllJobs;
