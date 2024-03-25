import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import SeeAllJobs from "./SeeAllJobs";

const MyJobs = () => {
  const { user } = useContext(AuthContext);
  console.log(user?.email);
  const [jobs, setJobs] = useState(null);
  useEffect(() => {
    fetch(`http://localhost:5000/myJobs?email=${user?.email}`, {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setJobs(data);
      });
  }, [user?.email]);
  return (
    <div className="m-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        You Posted total {jobs?.length} Jobs
      </h1>
      {jobs?.map((job) => (
        <SeeAllJobs key={job._id} job={job}></SeeAllJobs>
      ))}
    </div>
  );
};

export default MyJobs;
