import React, { useCallback, useEffect, useState } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Header = () => {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("todoUser");
    setUserName(name);
  }, [userName]);

  const handleLogOut = useCallback(() => {
    localStorage.removeItem("todoUser");
    setUserName("");
  }, []);

  return (
    <div>
      <div className="navbar bg-sky-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
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
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign up</NavLink>
              </li>
              <li>
                {userName ? (
                  <NavLink to="#" className="ms-1" onClick={handleLogOut}>
                    Log Out
                  </NavLink>
                ) : (
                  <NavLink to="login">Login</NavLink>
                )}
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <NavLink to="/">Todo App</NavLink>
        </div>
        <div className="navbar-end">
          <NavLink className="btn">{userName ? userName : "Test"}</NavLink>
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Header;
