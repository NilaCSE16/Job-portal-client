import { Link } from "react-router-dom";
import login from "../assets/images/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const handleSignUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photo = form.photo.value;
    const currentUser = { name, email, password, photo };
    // console.log("User: ", currentUser);
    createUser(email, password)
      .then(() => {
        // console.log(res.user);
        fetch("http://localhost:5000/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(currentUser),
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log(data);
            if (data.insertedId) {
              Swal.fire({
                title: "Success!",
                text: "Now you are a member of our Job-portal team",
                icon: "success",
                confirmButtonColor: "#3085d6",
                confirmButtonText: "OK",
              });
              form.reset();
            }
          });
        form.reset();
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200 flex justify-center">
      <div>
        <img src={login} alt="" className="w-96 h-96 rounded-btn mt-20" />
      </div>
      <div className="hero-content flex-col w-[50%]">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold text-center">Sign Up now!</h1>
          <p className="py-6">
            Please sign up if you have are new to this site,,
          </p>
        </div>
        <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                name="password"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
                type="name"
                placeholder="Enter your photo URL"
                name="photo"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Sign Up</button>
              <p className="mt-2">
                Already have an account? Please,{" "}
                <Link to="/login" className="text-blue-700 font-bold">
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
