import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import DatePicker from "react-datepicker/dist/react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Swal from "sweetalert2";
// import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const AddJob = () => {
  const { user } = useContext(AuthContext);
  const startDate = new Date();
  const [startDead, setStartDead] = useState(new Date());
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    fetch(`https://job-portal-api-rose.vercel.app/users?email=${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0]);
        setCurrentUser(data[0]);
      });
  }, [user?.email]);

  const handleAddJob = (event) => {
    event.preventDefault();
    const form = event.target;
    const photo = form.photo.value;
    const title = form.title.value;
    const username = form.username.value;
    const category = form.category.value;
    const salary = form.salary.value;
    const description = form.description.value;
    const postDate = form.postDate.value;
    const deadline = form.deadline.value;
    const vacancy = form.vacancy.value;
    const email = user?.email;
    const singleJob = {
      photo,
      title,
      username,
      category,
      salary,
      description,
      postDate,
      deadline,
      vacancy,
      email,
    };
    //   console.log(singleJob);

    fetch("https://job-portal-api-rose.vercel.app/addJob", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(singleJob),
    }).then((data) => {
      // console.log(data);
      if (data.insertedId) {
        Swal.fire({
          title: "Success!",
          text: "You added a job for your company.",
          icon: "success",
          confirmButtonColor: "#3085d6",
          confirmButtonText: "OK",
        });
        form.reset();
      }
    });
  };

  return (
    <div className="w-[60%] my-auto mx-auto mt-4">
      <h1 className="text-5xl font-bold text-center">Job Recruitment</h1>
      <form onSubmit={handleAddJob} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Picture URL of the Job Banner</span>
          </label>
          <input
            type="name"
            placeholder="Place photo URL"
            name="photo"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Title</span>
          </label>
          <input
            type="name"
            placeholder="Job Title"
            name="title"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Logged User </span>
          </label>
          <input
            type="name"
            defaultValue={currentUser?.name}
            name="username"
            className="input input-bordered"
            required
            readOnly
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Category </span>
          </label>
          <select className="select select-bordered w-full" name="category">
            <option>OnSite</option>
            <option>Remote</option>
            <option>PartTime</option>
            <option>Hybrid</option>
          </select>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Salary Range </span>
          </label>
          <input
            type="name"
            placeholder="Salary Range"
            name="salary"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Description </span>
          </label>
          <textarea
            className="textarea textarea-bordered"
            placeholder="Description"
            name="description"
          ></textarea>
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Job Posting Date</span>
          </label>
          <DatePicker
            selected={startDate}
            name="postDate"
            readOnly
            className="input input-bordered w-full"
          />
          {/* <CalendarMonthIcon className="absolute p-2 text-6xl"></CalendarMonthIcon> */}
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Application Deadline</span>
          </label>
          <DatePicker
            name="deadline"
            className="input input-bordered w-full pl-4"
            showIcon
            toggleCalendarOnIconClick
            selected={startDead}
            onChange={(date) => setStartDead(date)}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Post Vacancy</span>
          </label>
          <input
            type="number"
            defaultValue="0"
            name="vacancy"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn bg-neutral hover:bg-slate-600 font-bold text-sm text-white">
            Add Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddJob;
