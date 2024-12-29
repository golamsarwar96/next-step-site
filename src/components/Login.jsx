import { useContext, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { FaEye } from "react-icons/fa6";
import { BsGoogle } from "react-icons/bs";

const Login = () => {
  const { userLogin, setUser, signInWithGoogle, resetPassword } =
    useContext(AuthContext);
  const emailRef = useRef();
  const [error, setError] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  // console.log(location);
  const handleSignIn = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log(form, email, password);

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        toast.success("Login Successful");
        navigate(location?.state ? location.state : "/");
        // console.log(user);
        e.target.reset();
      })
      .catch((err) => {
        //Incorrect Password Validation
        setError({ ...error, login: err.code });
        toast.error(err.message);
      });
  };
  const handleGoogleSignIn = () => {
    // console.log("clicked");
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        toast.success("Google Login Successful");
        navigate("/");
        // console.log(user);
        setUser(user);
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };

  return (
    <div className="flex justify-center mb-10">
      <h1></h1>
      <div className="card bg-blue-600 w-full max-w-sm shrink-0 shadow-2xl relative ">
        <form onSubmit={handleSignIn} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              placeholder="email"
              name="email"
              ref={emailRef}
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />
            <button
              onClick={() => setShowPassword(!showPassword)}
              className="btn btn-sm absolute rounded-full right-10 top-[168px] bg-white border-none"
            >
              <FaEye></FaEye>
            </button>
            <label className="label cursor-pointer">
              <Link
                to="/resetpassword"
                className="label-text-alt link link-hover text-white"
              >
                Forgot password?
              </Link>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-600 text-white">Login</button>
          </div>
          <div className="form-control mt-2">
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-blue-600"
            >
              <BsGoogle></BsGoogle>Login with Google
            </button>
          </div>
          <div className="form-control mt-10">
            <p className="text-center text-white">
              Don't have an account ? <Link to="/register">Register</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
