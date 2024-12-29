import { useContext } from "react";
import { IoFootstepsSharp } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const links = (
    <>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-white bg-blue-600 px-4 py-2 rounded-3xl" : ""
        }
        to="/"
      >
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-white bg-blue-600 px-4 py-2 rounded-3xl" : ""
        }
        to="/profile"
      >
        My Profile
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "text-white bg-blue-600 px-4 py-2 rounded-3xl" : ""
        }
        to="/extrasection"
      >
        Blog
      </NavLink>
    </>
  );
  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown z-10">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link to="/" className="font-bold md:text-3xl text-2xl">
          <span className="text-blue-600">Next</span> Step
        </Link>
        <IoFootstepsSharp className="text-3xl md:ml-2 hidden md:block text-blue-600" />
      </div>
      <div className="navbar-center">
        <ul className="menu menu-horizontal md:hidden px-1 space-x-5 hidden lg:block">
          {links}
        </ul>
      </div>
      <div className="navbar-end flex gap-5">
        {user && user?.email ? (
          <button onClick={logOut} className="btn">
            Sign Out
          </button>
        ) : (
          <Link to="/login" className="btn">
            Login
          </Link>
        )}
        {user && user?.email ? (
          <div className="flex text-sm items-center gap-2 bg-blue-600 text-white px-4 py-3 font-semibold rounded-3xl">
            <img
              title={user?.displayName}
              className="w-10 rounded-full"
              src={user?.photoURL}
              alt=""
            />
            <p className="text-xs">{user.displayName}</p>
          </div>
        ) : (
          " "
        )}
        {/* <p>{user && user?.email}</p> */}
      </div>
    </div>
  );
};

export default Navbar;
