import React, { useState } from "react";
import { Link } from "react-router-dom";
import Admin from "../assets/Admin.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Navbar({ title,handleNavLink }) {
  const [isOpen, setIsOpen] = useState(false);
  function selfClose() {
    setIsOpen(false);
  }
  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <>
      <nav className="relative top-0 z-30 w-full bg-white pt-4 font-poppins">
        <div className="px-5 py-3 lg:px-5 lg:pl-3">
          <div className="flex flex-col md:flex-row items-center  md:items-start justify-center md:justify-between">
            <div className="ms-0 md:ms-60 mb-5 md:mb-0">
              <h2 className="text-gray-900 font-medium text-xl">{title}</h2>
            </div>
            <div className="flex flex-col-reverse gap-4 justify-between md:flex-row items-center md:items-start ms-3">
              <div className="flex items-center gap-3 me-5">
                <div className="bg-gray-300 rounded-full p-3 flex items-center justify-center relative" >
                  <div className="flex items-center justify-center bg-primary p-0.5 rounded-full absolute bottom-6 left-5" style={{width:"24px",height: "24px"}}>
                    <p className="text-white text-12px font-mono">+9</p>
                  </div>
                  <Link>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                        className="w-4 h-4"
                      >
                        <path d="M12 13.414l6.293-6.293 1.414 1.414L12 16.414 4.293 8.535 5.707 7.121 12 13.414zM22 4H2c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h20c1.104 0 2-.896 2-2V6c0-1.104-.896-2-2-2zm0 16H2V6h20v14z" />
                      </svg>
                    </div>
                  </Link>
                </div>
                <div className="bg-gray-300 rounded-full p-3 flex items-center justify-center relative">
                  <div className="flex items-center justify-center bg-primary p-0.5 rounded-full absolute bottom-6 left-5" style={{width:"24px",height: "24px"}}>
                    <p className="text-white text-12px font-mono">+3</p>
                  </div>
                  <Link>
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 50 50"
                        className="w-4 h-4 font-bold"
                      >
                        <path d="M 25 0 C 22.800781 0 21 1.800781 21 4 C 21 4.515625 21.101563 5.015625 21.28125 5.46875 C 15.65625 6.929688 12 11.816406 12 18 C 12 25.832031 10.078125 29.398438 8.25 31.40625 C 7.335938 32.410156 6.433594 33.019531 5.65625 33.59375 C 5.265625 33.878906 4.910156 34.164063 4.59375 34.53125 C 4.277344 34.898438 4 35.421875 4 36 C 4 37.375 4.84375 38.542969 6.03125 39.3125 C 7.21875 40.082031 8.777344 40.578125 10.65625 40.96875 C 13.09375 41.472656 16.101563 41.738281 19.40625 41.875 C 19.15625 42.539063 19 43.253906 19 44 C 19 47.300781 21.699219 50 25 50 C 28.300781 50 31 47.300781 31 44 C 31 43.25 30.847656 42.535156 30.59375 41.875 C 33.898438 41.738281 36.90625 41.472656 39.34375 40.96875 C 41.222656 40.578125 42.78125 40.082031 43.96875 39.3125 C 45.15625 38.542969 46 37.375 46 36 C 46 35.421875 45.722656 34.898438 45.40625 34.53125 C 45.089844 34.164063 44.734375 33.878906 44.34375 33.59375 C 43.566406 33.019531 42.664063 32.410156 41.75 31.40625 C 39.921875 29.398438 38 25.832031 38 18 C 38 11.820313 34.335938 6.9375 28.71875 5.46875 C 28.898438 5.015625 29 4.515625 29 4 C 29 1.800781 27.199219 0 25 0 Z M 25 2 C 26.117188 2 27 2.882813 27 4 C 27 5.117188 26.117188 6 25 6 C 23.882813 6 23 5.117188 23 4 C 23 2.882813 23.882813 2 25 2 Z M 27.34375 7.1875 C 32.675781 8.136719 36 12.257813 36 18 C 36 26.167969 38.078125 30.363281 40.25 32.75 C 41.335938 33.941406 42.433594 34.6875 43.15625 35.21875 C 43.515625 35.484375 43.785156 35.707031 43.90625 35.84375 C 44.027344 35.980469 44 35.96875 44 36 C 44 36.625 43.710938 37.082031 42.875 37.625 C 42.039063 38.167969 40.679688 38.671875 38.9375 39.03125 C 35.453125 39.753906 30.492188 40 25 40 C 19.507813 40 14.546875 39.753906 11.0625 39.03125 C 9.320313 38.671875 7.960938 38.167969 7.125 37.625 C 6.289063 37.082031 6 36.625 6 36 C 6 35.96875 5.972656 35.980469 6.09375 35.84375 C 6.214844 35.707031 6.484375 35.484375 6.84375 35.21875 C 7.566406 34.6875 8.664063 33.941406 9.75 32.75 C 11.921875 30.363281 14 26.167969 14 18 C 14 12.261719 17.328125 8.171875 22.65625 7.21875 C 23.320313 7.707031 24.121094 8 25 8 C 25.886719 8 26.679688 7.683594 27.34375 7.1875 Z M 21.5625 41.9375 C 22.683594 41.960938 23.824219 42 25 42 C 26.175781 42 27.316406 41.960938 28.4375 41.9375 C 28.792969 42.539063 29 43.25 29 44 C 29 46.222656 27.222656 48 25 48 C 22.777344 48 21 46.222656 21 44 C 21 43.242188 21.199219 42.539063 21.5625 41.9375 Z" />
                      </svg>
                    </div>
                  </Link>
                </div>
              </div>
              <div>
                <button
                  type="button"
                  className="flex text-sm rounded-full me-0 md:me-6"
                  aria-expanded={isOpen}
                  onClick={toggleDropdown}
                >
                  <span className="sr-only">Open user menu</span>
                  <img
                    className="w-8 h-8 rounded-full me-3"
                    src={Admin}
                    alt="user photo"
                  />
                  <div className="flex flex-col items-start">
                    <h3 className="text-gray-800 font-semibold">
                      Moahmed Kamal
                    </h3>
                    <p className="text-gray-500">Admin</p>
                    
                  </div>
                  <FontAwesomeIcon className="hidden md:block ms-3" icon={faAngleDown} />
                </button>

                {isOpen && (
                  <div className="absolute right-0 me-2 z-50 my-4 text-base list-none bg-white divide-y divide-gray-100 rounded shadow">
                    <div className="px-4 py-3">
                      <p className="text-sm text-gray-900">Mohamed Kamal</p>
                      <p className="text-sm font-medium text-gray-900 truncate">
                        example@gmail.com
                      </p>
                    </div>
                    <ul className="py-3">
                      <li>
                        <Link
                          to="/"
                          onClick={()=> {selfClose();handleNavLink("Home")}}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Home
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/dashboard"
                          onClick={()=> {selfClose();handleNavLink("Dashboard")}}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Dashboard
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/employees"
                          onClick={()=> {selfClose();handleNavLink("Employees")}}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          Employees
                        </Link>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
