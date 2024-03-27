// import CategoryList from "./CategoryList";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SeeAllJobs from "./SeeAllJobs";
// import AllJobs from "./AllJobs";

const JobCategory = () => {
  const [isSubMenuOpen, setSubMenuOpen] = useState(false);

  const [jobs, setJobs] = useState(null);
  const [getJobs, setGetJobs] = useState(false);

  const toggleSubMenu = () => {
    setSubMenuOpen(!isSubMenuOpen);
  };

  const [viewJobs, setViewJobs] = useState(null);
  useEffect(() => {
    fetch("https://job-portal-api-rose.vercel.app/allJobs")
      .then((res) => res.json())
      .then((data) => {
        setViewJobs(data);
      });
  }, []);

  const handleCategory = (category) => {
    // console.log("Index: ", index);
    fetch(
      `https://job-portal-api-rose.vercel.app/allJobs?category=${category}`,
      {
        method: "GET",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setJobs(data);
        setGetJobs(true);
      });
  };
  return (
    <div className="m-4">
      <h1 className="text-4xl font-bold text-cyan-950 font-serif text-center">
        Job Category
      </h1>
      <div className="flex">
        <div className="w-64 mt-4 mb-4">
          <p className="font-bold">All Category</p>
          <ul className="border-r border-gray-300">
            <li className="p-4 border-b border-gray-300">
              <Link to="/">React Developer</Link>
            </li>
            <li
              className="p-4 border-b border-gray-300 cursor-pointer"
              onClick={toggleSubMenu}
            >
              Full Stack Developer
              {isSubMenuOpen ? (
                <span className="ml-2">&#9650;</span>
              ) : (
                <span className="ml-2">&#9660;</span>
              )}
            </li>
            {isSubMenuOpen && (
              <ul className="pl-8 border-b border-gray-300">
                <li className="p-4">
                  <Link to="/" onClick={() => handleCategory("OnSite")}>
                    On Site
                  </Link>
                </li>
                <li className="p-4">
                  <Link
                    to="/"
                    id="Remote"
                    onClick={() => handleCategory("Remote")}
                  >
                    Remote
                  </Link>
                </li>
                <li className="p-4">
                  <Link to="/" onClick={() => handleCategory("PartTime")}>
                    Part Time
                  </Link>
                </li>
                <li className="p-4">
                  <Link to="/" onClick={() => handleCategory("Hybrid")}>
                    Hybrid
                  </Link>
                </li>
              </ul>
            )}
            <li className="p-4">
              <Link to="/">Java Developer</Link>
            </li>
          </ul>
        </div>
        <div>
          {getJobs &&
            jobs.map((job) => (
              <div key={job._id} className="mx-20">
                <SeeAllJobs job={job}></SeeAllJobs>
              </div>
            ))}
          {!isSubMenuOpen && (
            <div>
              {viewJobs?.map((job) => (
                <div key={job._id} className="mx-20">
                  <SeeAllJobs job={job}></SeeAllJobs>
                </div>
              ))}
            </div>
            // <AllJobs></AllJobs>
          )}
        </div>
      </div>
    </div>
  );
};

export default JobCategory;
