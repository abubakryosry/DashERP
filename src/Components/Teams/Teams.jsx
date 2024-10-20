import React from "react";
import { NavLink } from "react-router-dom";

function Teams() {
  return <>
      <div className="bg-gray-50 flex flex-col font-poppins">
        <main className="flex-grow ml-0  md:ml-60 p-4 overflow-y-auto">
          <div className="w-100 h-96 flex justify-center items-center mt-12 ">
            <div className="flex flex-col items-center">
              <h2 className="text-xl md:text-3xl mb-2 font-bold">
              You took a detour to the Teams page.
              </h2>
              <h2 className="text-md md:text-xl mb-5 font-bold">
              I could’ve sworn I saw you in Dashboard Page!
              </h2>
              <p className="font-thin text-gray-700 text-center">
              Looks like the teams page is just the dashboard in disguise,<br />
                But you can head over to the Employees page in the meantime!
              </p>
              <div className="mt-7">
                <NavLink
                  className={
                    "border-2 border-primary text-primary bg-white rounded-xl text-xl font-bold px-5 py-2 hover:bg-primary hover:text-white hover:border-white duration-100"
                  }
                  to={"/employees"}
                >
                  Employees
                </NavLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>;
}

export default Teams;
