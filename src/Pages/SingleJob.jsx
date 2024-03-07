import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const SingleJob = () => {
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { id } = location.state;
  //   id = JSON.stringify(id);
  const [job, setJob] = useState(null);
  //   const [name, setName] = useState(null);

  const [loggedUser, setLoggedUser] = useState(user ? user : null);

  //   console.log(id);
  useEffect(() => {
    fetch(`http://localhost:5000/allJobs/${id}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0]);
        setJob(data[0]);
      });
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/users?email=${job?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0]?.photo);
        setLoggedUser(data[0]);
      });
  }, [job?.email]);

  return (
    <div className="mt-4 ml-4 mb-4">
      <div className="flex">
        <img
          className="w-12 h-12 p-1 rounded-full"
          alt="Profile"
          src={loggedUser?.photo}
        />
        <div className="pl-2">
          <p className="font-bold">{loggedUser?.name}</p>
          <p className="text-slate-600">{job?.postDate}</p>
        </div>
      </div>
      <img className="w-1/2 h-80 mt-2" src={job?.photo} alt="" />
      <div className="mt-2 mb-2">
        <p>
          <span className="font-bold">Job Position: </span> {job?.title}
        </p>
        <p>
          <span className="font-bold">About: </span> {job?.description}
        </p>
        <p>
          <span className="font-bold">Salary: </span> {job?.salary} Tk/month
        </p>
        <p>
          <span className="font-bold">Vacancy: </span> {job?.vacancy}
        </p>
        <p>
          <span className="font-bold">Category: </span> {job?.category}
        </p>
      </div>
      <button className="btn btn-primary">Apply Now</button>
    </div>
  );
};

export default SingleJob;
