import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/Logo.png";
import "./Sidebar.css";
function Sidebar({handleNavLink}) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen((prev) => !prev);
  };
  function selfClose() {
    setIsSidebarOpen(false);
  }
  return (
    <>
      <div className="flex font-poppins">
        <button
          onClick={toggleSidebar}
          className="fixed top-4 left-4 z-50 p-1 text-primary bg-white rounded-md md:hidden"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
        <aside
          id="logo-sidebar"
          className={`fixed w-56 flex flex-col items-center top-0 left-0 z-40 h-screen pt-16 transition-transform bg-primary border-r border-gray-200 md:translate-x-0 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <div className="mb-10 flex items-center">
            <div>
              <img src={Logo} alt="logo" className="w-24" />
            </div>
          </div>
          <div className="h-full px-3 pb-4 overflow-y-auto bg-primary ">
            <ul className="space-y-6 ">
              <li>
                <NavLink
                  onClick={()=>{
                    selfClose();
                    handleNavLink("Dashboard");}}
                  to={"/dashboard"}
                  className="flex items-center p-1 px-5  text-white hover:text-primary hover:bg-white group rounded-lg text-sm font-thin"
                >
                  <svg
                    className="w-5 h-5 text-white transition group-hover:text-primary  duration-75"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 22 21"
                  >
                    <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                    <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                  </svg>
                  <span className="ms-3 text-14px font-normal">Dashboard</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={()=>{
                    selfClose();
                    handleNavLink("Teams");}}
                  to={"/teams"}
                  className="flex items-center p-1 px-5 text-white hover:text-primary hover:bg-white  group rounded-lg text-sm"
                >
                  <svg
                    className="w-5 h-5 text-white transition group-hover:text-primary  duration-75"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path fill="none" d="M0 0h24v24H0z"></path>
                    <path
                      fillRule="nonzero"
                      d="M12 11a5 5 0 0 1 5 5v6h-2v-6a3 3 0 0 0-2.824-2.995L12 13a3 3 0 0 0-2.995 2.824L9 16v6H7v-6a5 5 0 0 1 5-5zm-6.5 3c.279 0 .55.033.81.094a5.947 5.947 0 0 0-.301 1.575L6 16v.086a1.492 1.492 0 0 0-.356-.08L5.5 16a1.5 1.5 0 0 0-1.493 1.356L4 17.5V22H2v-4.5A3.5 3.5 0 0 1 5.5 14zm13 0a3.5 3.5 0 0 1 3.5 3.5V22h-2v-4.5a1.5 1.5 0 0 0-1.356-1.493L18.5 16c-.175 0-.343.03-.5.085V16c0-.666-.108-1.306-.309-1.904.259-.063.53-.096.809-.096zm-13-6a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm13 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zm-13 2a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm13 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zM12 2a4 4 0 1 1 0 8 4 4 0 0 1 0-8zm0 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"
                    ></path>{" "}
                  </svg>
                  <span className="ms-3 text-14px font-normal">Teams</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={()=>{
                    selfClose();
                    handleNavLink("Employees");}}
                  to={"/employees"}
                  className="flex items-center p-1 px-5 text-white hover:text-primary hover:bg-white  group rounded-lg text-sm"
                >
                  <svg
                    className="w-5 h-5 text-white transition group-hover:text-primary  duration-75"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 36 36"
                  >
                    <path d="M16.43,16.69a7,7,0,1,1,7-7A7,7,0,0,1,16.43,16.69Zm0-11.92a5,5,0,1,0,5,5A5,5,0,0,0,16.43,4.77Z"></path>
                    <path d="M22,17.9A25.41,25.41,0,0,0,5.88,19.57a4.06,4.06,0,0,0-2.31,3.68V29.2a1,1,0,1,0,2,0V23.25a2,2,0,0,1,1.16-1.86,22.91,22.91,0,0,1,9.7-2.11,23.58,23.58,0,0,1,5.57.66Z"></path>
                    <rect x="22.14" y="27.41" width="6.14" height="1.4"></rect>
                    <path d="M33.17,21.47H28v2h4.17v8.37H18V23.47h6.3v.42a1,1,0,0,0,2,0V20a1,1,0,0,0-2,0v1.47H17a1,1,0,0,0-1,1V32.84a1,1,0,0,0,1,1H33.17a1,1,0,0,0,1-1V22.47A1,1,0,0,0,33.17,21.47Z"></path>
                  </svg>
                  <span className="ms-3 text-14px font-normal">Employees</span>
                </NavLink>
              </li>
              <li>
                <NavLink
                  onClick={()=>{
                    selfClose();
                    handleNavLink("Settings");}}
                  to={"/settings"}
                  className="flex items-center p-1 px-5 text-white hover:text-primary hover:bg-white  group rounded-lg text-sm"
                >
                  <svg
                    className="w-5 h-5 text-white transition group-hover:text-primary  duration-75"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 50 50"
                  >
                    <path
                      d="M10.18,27.452l2.396,0.263c0.318,1.3,0.832,2.531,1.531,3.675l-1.462,1.819
                        c-0.32,0.398-0.289,0.974,0.073,1.334l2.643,2.635c0.36,0.36,0.932,0.391,1.33,0.073l1.832-1.462c1.119,0.679,2.321,1.182,3.591,1.5
                        l0.266,2.415c0.056,0.507,0.484,0.891,0.994,0.891h3.737c0.51,0,0.938-0.384,0.994-0.89l0.261-2.366
                        c1.32-0.309,2.57-0.814,3.731-1.51l1.84,1.471c0.394,0.316,0.968,0.287,1.33-0.073l2.644-2.635c0.362-0.361,0.394-0.938,0.073-1.335
                        l-1.45-1.8c0.724-1.167,1.252-2.424,1.577-3.754l2.287-0.25c0.508-0.056,0.892-0.484,0.892-0.994v-3.726
                        c0-0.51-0.384-0.938-0.891-0.994l-2.281-0.25c-0.323-1.335-0.851-2.597-1.573-3.767l1.439-1.789c0.32-0.398,0.289-0.974-0.073-1.335
                        l-2.644-2.635c-0.361-0.36-0.936-0.389-1.33-0.073l-1.821,1.456c-1.166-0.701-2.423-1.211-3.751-1.521l-0.26-2.34
                        c-0.057-0.506-0.484-0.89-0.994-0.89h-3.737c-0.51,0-0.938,0.383-0.994,0.89l-0.265,2.389c-1.266,0.317-2.465,0.818-3.582,1.495
                        l-1.851-1.478c-0.397-0.318-0.97-0.286-1.33,0.073l-2.644,2.635c-0.362,0.361-0.394,0.937-0.073,1.335l1.476,1.835
                        c-0.706,1.152-1.223,2.394-1.542,3.707l-2.389,0.263c-0.507,0.056-0.891,0.484-0.891,0.994v3.726
                        C9.289,26.967,9.673,27.396,10.18,27.452z M11.289,23.627l2.216-0.244c0.439-0.048,0.794-0.379,0.874-0.813
                        c0.286-1.553,0.887-2.998,1.786-4.294c0.253-0.364,0.235-0.851-0.042-1.196l-1.366-1.7l1.374-1.37l1.715,1.369
                        c0.343,0.275,0.826,0.291,1.189,0.044c1.268-0.869,2.675-1.456,4.183-1.746c0.431-0.083,0.757-0.436,0.806-0.872l0.245-2.21h1.946
                        l0.241,2.174c0.049,0.442,0.384,0.798,0.822,0.875c1.568,0.274,3.028,0.866,4.339,1.758c0.362,0.248,0.845,0.229,1.187-0.045
                        l1.684-1.346l1.374,1.369l-1.333,1.656c-0.278,0.347-0.295,0.836-0.04,1.2c0.919,1.312,1.53,2.775,1.817,4.348
                        c0.079,0.435,0.435,0.766,0.874,0.814l2.109,0.231v1.933l-2.113,0.231c-0.439,0.048-0.795,0.378-0.875,0.813
                        c-0.289,1.567-0.902,3.026-1.822,4.335c-0.256,0.365-0.24,0.855,0.039,1.202l1.344,1.668l-1.374,1.369l-1.701-1.36
                        c-0.342-0.273-0.822-0.292-1.186-0.046c-1.306,0.886-2.76,1.473-4.321,1.746c-0.438,0.076-0.773,0.433-0.822,0.875l-0.242,2.2
                        h-1.946l-0.246-2.236c-0.048-0.436-0.375-0.79-0.806-0.873c-1.511-0.291-2.921-0.88-4.19-1.751c-0.365-0.25-0.848-0.233-1.19,0.043
                        l-1.696,1.354l-1.374-1.37l1.354-1.684c0.277-0.345,0.295-0.832,0.043-1.196c-0.895-1.291-1.492-2.726-1.778-4.265
                        c-0.081-0.434-0.436-0.763-0.874-0.812l-2.221-0.244V23.627z"
                    ></path>
                    <path
                      d="M25.289,28.586c2.207,0,4.002-1.791,4.002-3.992s-1.795-3.992-4.002-3.992c-2.206,0-4.001,1.791-4.001,3.992
                        S23.083,28.586,25.289,28.586z M25.289,22.603c1.104,0,2.002,0.894,2.002,1.992s-0.898,1.992-2.002,1.992s-2.001-0.894-2.001-1.992
                        S24.186,22.603,25.289,22.603z"
                    ></path>
                  </svg>
                  <span className="ms-3 text-14px font-normal">Settings</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;
