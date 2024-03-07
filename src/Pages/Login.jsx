import { Link, useLocation, useNavigate } from "react-router-dom";
import login from "../assets/images/login.jpg";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const currentUser = { email, password };
    console.log("User: ", currentUser);
    signIn(email, password)
      .then((res) => {
        navigate(location?.state ? location.state.from : "/", {
          replace: true,
        });
        console.log("Logged user: ", res.user);
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
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <p className="py-6">Please login to see detailed information</p>
        </div>
        <div className="card  shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <button className="btn btn-primary">Login</button>
              <p className="mt-2">
                Did not have an account? Please,{" "}
                <Link to="/signUp" className="text-blue-700 font-bold">
                  Sign Up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
