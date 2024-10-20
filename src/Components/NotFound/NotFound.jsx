import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return <>
   <div className="bg-gray-50 flex flex-col font-poppins">
        <main className="flex-grow ml-0  md:ml-52 p-4 overflow-y-auto">
          <div className="w-100 h-96 flex justify-center items-center mt-12 ">
            <div className='flex flex-col items-center'>
              <h1 className="text-7xl mb-6 font-bold">404 </h1>
              <h2 className="text-3xl mb-3 font-bold">UH OH! You're lost.</h2>
              <p className='font-thin text-gray-700'>
                The page you are looking for does not exist. How you got here is
                a mystery. <br /> But you can click the button below to go back
                to the Employees Page.
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
  </>
}

export default NotFound