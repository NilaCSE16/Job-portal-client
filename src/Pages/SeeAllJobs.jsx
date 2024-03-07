import FolderSharedIcon from "@mui/icons-material/FolderShared";
import { Link } from "react-router-dom";
const SeeAllJobs = ({ job }) => {
  //   console.log(job);
  const {
    _id,
    photo,
    title,
    username,
    salary,
    description,
    postDate,
    deadline,
  } = job;
  return (
    <div className=" mt-10 mb-6 bg-base-200 p-6 rounded-btn">
      <div className=" pl-4 ">
        <h1 className="text-3xl font-bold">{title}</h1>
        <p className="text-bold text-slate-600">Posted Date: {postDate}</p>
      </div>
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={photo}
          className="max-w-sm rounded-lg shadow-2xl w-full h-72"
        />
        <div className="p-4">
          <p className="py-2">{description}</p>
          <div className="flex">
            <p className="font-bold pr-4">Application Deadline: </p>
            <p>{deadline}</p>
          </div>
          <div className="flex pb-4">
            <p className="font-bold pr-4">Salary Range: </p>
            <p>{salary} Tk / month</p>
          </div>
          <Link to="/singleJob" state={{ id: _id }}>
            <button className="btn btn-primary">Details</button>
          </Link>
        </div>
      </div>
      <div className="flex text-slate-600">
        <FolderSharedIcon></FolderSharedIcon>
        <p className="bottom-0 left-1 pl-2">{username}</p>
      </div>
    </div>
  );
};

export default SeeAllJobs;
