// import { useEffect, useState } from "react";
// import SeeAllJobs from "./SeeAllJobs";

const CategoryList = ({ category }) => {
  console.log(category);
  //   const [jobs, setJobs] = useState(null);
  //   useEffect(() => {
  //     fetch(`https://job-portal-api-rose.vercel.app/allJobs?category=${category}`)
  //       .then((res) => res.json())
  //       .then((data) => {
  //         // console.log(data);
  //         setJobs(data);
  //       });
  //   }, [category]);
  return (
    <div>
      {/* {jobs?.map((job) => (
        <SeeAllJobs key={job._id} job={job}></SeeAllJobs>
      ))} */}
    </div>
  );
};

export default CategoryList;
