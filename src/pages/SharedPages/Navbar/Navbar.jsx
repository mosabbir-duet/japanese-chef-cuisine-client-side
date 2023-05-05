import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import React, { useContext, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProviders";
import "./Navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { user, logOut, click } = useContext(AuthContext);
  console.log(click);
  const handleToSignOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <>
      <div className="container mx-auto py-7 bg-white border-b border-spacing-3">
        <div className="md:container mx-auto hidden lg:flex justify-between items-center ">
          <Link to="/">
            <h1 className="text-5xl font-semibold  text-[#ffc000] header-name">
              <span className="text-[#ff0018]">Japanese</span> Chef
              <span className="text-[#ff0018]">'</span>s
            </h1>
          </Link>
          <nav>
            <NavLink
              className={`header-link-style ${({ isActive }) =>
                isActive ? "active" : "default"}`}
              to="/"
            >
              Home
            </NavLink>
            {user && click ? (
              <></>
            ) : (
              <NavLink
                className={`header-link-style ${({ isActive }) =>
                  isActive ? "active" : "default"}`}
                to="/login"
              >
                Login
              </NavLink>
            )}
            <NavLink
              className={`header-link-style ${({ isActive }) =>
                isActive ? "active" : "default"}`}
              to="/register"
            >
              Register
            </NavLink>
            <NavLink
              className={`header-link-style ${({ isActive }) =>
                isActive ? "active" : "default"}`}
              to="/blog"
            >
              Blog
            </NavLink>
          </nav>
          <div>
            {user && click ? (
              <div className="flex items-center ">
                <img
                  style={{
                    height: "55px",
                    width: "55px",
                    borderRadius: "50%",
                    border: "2px dotted #ff0018",
                    padding: "2px",
                    marginRight: "15px",
                  }}
                  src={user.photoURL}
                  className="tooltip tooltip-open tooltip-bottom"
                  title={user.displayName}
                ></img>{" "}
                <button onClick={handleToSignOut} className="btn btn-warning">
                  Sign out
                </button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>

        {/* Mobile Navbar Section */}
        <div className="lg:hidden ">
          {/* Dropdown Open Button */}
          <div className="flex justify-between items-center px-4 ">
            <div>
              <Link to="/">
                <h1 className="text-3xl font-semibold  text-[#ffc000] header-name">
                  <span className="text-[#ff0018]">Japanese</span> Chef
                  <span className="text-[#ff0018]">'</span>s
                </h1>
              </Link>
            </div>

            <div>
              <button
                aria-label="Open Menu"
                title="Open Menu"
                onClick={() => setIsMenuOpen(true)}
              >
                <Bars3Icon className="w-6 text-[#ffc000]" />
              </button>
            </div>
            <>
              {user && click ? (
                <div className="flex items-center ">
                  <img
                    style={{
                      height: "55px",
                      width: "55px",
                      borderRadius: "50%",
                      border: "2px dotted #ff0018",
                      padding: "2px",
                      marginRight: "15px",
                    }}
                    src={user.photoURL}
                    className="tooltip tooltip-open tooltip-bottom"
                    title={user?.displayName}
                  ></img>{" "}
                  <button onClick={handleToSignOut} className="btn btn-warning">
                    Sign out
                  </button>
                </div>
              ) : (
                <></>
              )}
            </>
          </div>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full z-10">
              <div className="p-5 bg-white border rounded shadow-sm container mx-auto">
                {/* Logo & Button section */}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <Link to="/">
                      <h1 className="text-3xl font-semibold  text-[#ffc000] header-name">
                        <span className="text-[#ff0018]">Japanese</span> Chef
                        <span className="text-[#ff0018]">'</span>s
                      </h1>
                    </Link>
                  </div>
                  {/* Dropdown menu close button */}
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <XMarkIcon className="w-5 text-[#ff0018]" />
                    </button>
                  </div>
                </div>
                {/* Mobile Nav Items Section */}
                <nav className="text-center">
                  <ul className="space-y-2">
                    <li>
                      <Link to="/" className="header-mobile-style">
                        Home
                      </Link>
                    </li>
                    <li>
                      <Link to="/login" className="header-mobile-style">
                        Login
                      </Link>
                    </li>
                    <li>
                      <Link to="/Register" className="header-mobile-style">
                        Register
                      </Link>
                    </li>
                    <li>
                      <Link to="/blog" className="header-mobile-style">
                        Blog
                      </Link>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Navbar;
