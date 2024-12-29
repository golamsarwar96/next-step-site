import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";
import { BsGoogle } from "react-icons/bs";

const Register = () => {
  const { createNewUser, setUser, updateUserProfile, signInWithGoogle } =
    useContext(AuthContext);
  const [error, setError] = useState({});
  const navigate = useNavigate();
  const handleRegister = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);

    const name = form.get("name");
    //Name length validation
    if (name.length < 5) {
      setError({ ...error, name: "Name must be at least 5 characters long." });
      toast.error("Name must be more than 5 characters long.");
      return;
    }
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    // console.log(form, name, photo, email, password);

    //One uppercase, One lowercase and 6 characters long
    const regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d).{6,}$/;
    if (!regex.test(password)) {
      setError({
        ...error,
        message:
          "The password must be 6 characters & should contain at least one uppercase letter and one lowercase letter.",
      });
      toast.error(
        "The password must be 6 characters & should contain at least one uppercase letter and one lowercase letter."
      );
      return;
    }

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({
          displayName: name,
          photoURL: photo,
        })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            // console.log(err);
          });
        toast.success("Registration Successful");
        // console.log(user);
        e.target.reset();
      })
      .catch((error) => {
        setError(error.message);
        toast.error(error.message);
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
      <div className="card bg-blue-600 w-full max-w-sm shrink-0 shadow-2xl ">
        <form onSubmit={handleRegister} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Name</span>
            </label>
            <input
              type="text"
              placeholder="Name"
              name="name"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Photo</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              name="photo"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
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
              <span className="label-text text-white">Password</span>
            </label>
            <input
              type="password"
              placeholder="password"
              name="password"
              className="input input-bordered"
              required
            />{" "}
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-blue-600 text-white">Register</button>
          </div>
          <div className="form-control mt-2">
            <button
              onClick={handleGoogleSignIn}
              className="btn bg-white text-blue-600"
            >
              <BsGoogle></BsGoogle>Register with Google
            </button>
          </div>
          <div className="form-control mt-6">
            <p className="text-center text-white">
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
