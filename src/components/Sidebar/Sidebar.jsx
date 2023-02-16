import React, { useState, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

// component
import Auth from "../Auth/Auth";

// icons
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { FiSearch, FiExternalLink } from "react-icons/fi";
import { BiFolderOpen, BiPlus, BiTime } from "react-icons/bi";

const Sidebar = () => {
  // loaction
  const location = useLocation();

  const [allowed, setAllowed] = useState(false);
  useEffect(() => {
    if (location.pathname === "/" || location.pathname.includes("/404")) {
      setAllowed(false);
    } else {
      setAllowed(true);
    }
  }, [location.pathname]);

  return (
    <>
      <Auth />
      {allowed && (
        <>
          <div className="sidebar">
            {/* heading */}
            <div className="heading">
              <Link to={"/app/home"}>
                <h1>Admin</h1>
              </Link>
            </div>

            {/* menu elements */}
            <ul className="menu-container">
              <Link to={"/app/home"}>
                <li
                  className={
                    location.pathname === "/app/home" ? "active-menu" : ""
                  }
                >
                  <AiOutlineHome />
                  <p>Home</p>
                </li>
              </Link>
              <Link to={"/app/all"}>
                <li
                  className={
                    location.pathname === "/app/all" ? "active-menu" : ""
                  }
                >
                  <BiFolderOpen />
                  <p>All ads</p>
                </li>
              </Link>
              <Link to={"/app/expired"}>
                <li
                  className={
                    location.pathname === "/app/expired" ? "active-menu" : ""
                  }
                >
                  <BiTime />
                  <p>Expired Ads</p>
                </li>
              </Link>
              <Link to={"/app/new"}>
                <li
                  className={
                    location.pathname === "/app/new" ? "active-menu" : ""
                  }
                >
                  <BiPlus />
                  <p>New ad</p>
                </li>
              </Link>

              {/* separator */}
              <span className="seperator-element"></span>

              <Link to={"/app/account"}>
                <li
                  className={
                    location.pathname === "/app/account" ||
                    location.pathname === "/app/account/new-account"
                      ? "active-menu"
                      : ""
                  }
                >
                  <AiOutlineUser />
                  <p>Account</p>
                </li>
              </Link>

              {/* logout */}
              <Link to={"/logout"} className="logout">
                <li className="btn btn-neutral ">
                  <FiExternalLink />
                  <p>Logout</p>
                </li>
              </Link>
            </ul>
          </div>
        </>
      )}
    </>
  );
};

export default Sidebar;
