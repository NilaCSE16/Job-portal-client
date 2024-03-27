import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  // console.log("USer from Nav: ", user?.email);
  const [loggedUser, setLoggedUser] = useState(user ? user : null);

  useEffect(() => {
    fetch(`https://job-portal-api-rose.vercel.app/users?email=${user?.email}`, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        // console.log(data[0]?.photo);
        setLoggedUser(data[0]?.photo);
      });
  }, [user?.email]);

  const [isHover, setHover] = useState(false);

  const handleLogout = () => {
    logOut();
  };
  return (
    <div className="navbar bg-neutral text-white">
      <div className="flex-1 ml-4">
        <Link to="/">
          <img src={logo} alt="" className="w-14 h-14" />
        </Link>
        <Link to="/" className="text-xl font-bold">
          Job Portal
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-bold">
        <div className="menu menu-horizontal px-1">
          <Link to="/" className="mr-10">
            Home
          </Link>
          <Link to="/allJobs" className="mr-10">
            All Jobs
          </Link>
          {user && (
            <div>
              <Link to="/" className="mr-10">
                Applied Jobs
              </Link>
              <Link to="/addJob" className="mr-10">
                Add a Job
              </Link>
              <Link to="/myJobs" className="mr-10">
                My Jobs
              </Link>
            </div>
          )}
          <Link to="/" className="mr-10">
            BLogs
          </Link>
        </div>
      </div>
      <div className="flex-none gap-2 pr-4">
        <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div>
        {user ? (
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-12 rounded-full">
                <img
                  alt="Profile"
                  src={loggedUser}
                  onMouseEnter={() => setHover(true)}
                  onMouseLeave={() => setHover(false)}
                />
                {isHover && (
                  <div className="absolute transform -translate-x-1/2 bg-gray-800 text-white p-2 rounded-md">
                    {user?.email}
                  </div>
                )}
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow text-black menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Settings</a>
              </li>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </ul>
          </div>
        ) : (
          <Link to="/login">Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
