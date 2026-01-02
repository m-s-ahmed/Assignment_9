import React, { use } from "react";
import { Link, NavLink, useNavigate } from "react-router";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  // Je context ta baniyesilam setar use korlam
  const { user, logout } = use(AuthContext);

  //navigate korbo amra sejnno ata
  const navigate = useNavigate();

  //logout handle korar jonno akta function
  const handleLogout = () => {
    //console.log("user trying to logout");
    logout()
      .then(() => {
        alert("you logout successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // shob link gulo aksathe kore nilam jate handle kora faster hoy
  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/games"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          Games
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-primary font-bold" : ""
          }
        >
          About
        </NavLink>
      </li>
    </>
  );
  return (
    <div className="w-full bg-base-200 border-b border-base-300">
      <div className="h-1.5 w-full bg-gradient-to-r from-primary via-secondary to-accent" />
      <div className="navbar max-w-7xl mx-auto px-4">
        {/* Left Side: Logo */}
        <div className="navbar-start">
          {/* Mobile dropdown */}
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden md:hidden">
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
              {!user && (
                <>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>

          <Link to="/" className="btn btn-ghost text-xl tracking-wide">
            <span className="text-primary font-bold">GAME</span>
            <span className="text-secondary font-bold">PLAY</span>
          </Link>
        </div>

        {/* Center Side: Desktop Menu */}
        <div className="navbar-center hidden lg:flex md:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>

        {/* Right Side: Auth buttons / Profile */}
        <div className="navbar-end gap-2">
          {!user ? (
            <>
              <Link to="/login" className="btn btn-outline btn-primary btn-sm">
                Login
              </Link>
              <Link to="/register" className="btn btn-primary btn-sm">
                Register
              </Link>
            </>
          ) : (
            <>
              <button
                onClick={() => navigate("/my-profile")}
                className="btn btn-ghost btn-circle avatar"
                title={user?.displayName || "My Profile"}
              >
                <div className="w-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img
                    src={`${
                      user
                        ? user.photoURL
                        : "https://i.ibb.co/ZYW3VTp/brown-brim.png"
                    }`}
                    alt="profile"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </button>

              <button onClick={handleLogout} className="btn btn-error btn-sm">
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
