import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import { EmployeeContext } from "../../EmployeeContext ";
import Admin from "../assets/Admin.png"; 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import ToggleButton from '../ToggleButton/ToggleButton'; 

function EmployeeDetails() {
  const { id } = useParams();
  const { employees, toggleEmployeeActive } = useContext(EmployeeContext);
  const employee = employees.find((emp) => emp.id === parseInt(id));

  if (!employee) {
    return <div>Employee not found</div>;
  }

  const handleToggle = () => {
    toggleEmployeeActive(employee.id);
  };

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins">
        <main className="flex-grow ml-0 md:ml-52 p-4 py-0 overflow-y-auto">
          <div className="w-100 h-96 space-y-3 p-4">
            <div className="flex justify-between">
              <h3>
                Employees{" "}
                <span className="ms-5 text-12px text-gray-500">
                  <FontAwesomeIcon icon={faChevronRight} className="me-2" /> {employee.employeeName}
                </span>
              </h3>
              <div className="w-10/12 md:w-4/12 lg:w-3/12 text-center">
                <button className="rounded-3xl text-12px font-medium px-5 py-2 duration-100 border border-white text-gray-50 bg-primary hover:bg-white hover:text-primary hover:border-primary">
                  <span>Edit Employee</span>
                </button>
              </div>
            </div>
            <div className="bg-white p-4 rounded-xl shadow w-full">
              <h3 className="bg-slate-50 p-2 rounded-xl text-14px font-medium">Summary</h3>
              <div className="flex gap-40 p-2">
                <ul className="text-gray-500 space-y-2 text-12px">
                  <li><span>Employee</span></li>
                  <li><span>Role</span></li>
                  <li><span>E-mail</span></li>
                  <li><span>Phone</span></li>
                </ul>
                <ul className="text-12px space-y-2 font-medium">
                  <li>
                    <div className="flex items-center">
                      <div className="relative w-6 h-6 overflow-hidden rounded-full me-2">
                        <img
                          src={employee.image} 
                          alt="employeeImage"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span>{employee.employeeName}</span>
                    </div>
                  </li>
                  <li><span>{employee.role}</span></li>
                  <li><span>{employee.email}</span></li>
                  <li><span>{employee.phone}</span></li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-center gap-3 items-center">
              <div className="bg-white p-4 rounded-xl shadow w-full">
                <h3 className="bg-slate-50 p-2 rounded-xl text-14px font-medium">Date</h3>
                <div className="flex gap-10 p-2">
                  <ul className="text-gray-500 text-12px">
                    <li><span>Start Date</span></li>
                  </ul>
                  <ul className="text-12px font-medium">
                    <li><span>{employee.startDate}</span></li>
                  </ul>
                </div>
              </div>
              <div className="bg-white p-4 rounded-xl shadow w-full">
                <h3 className="bg-slate-50 p-2 rounded-xl text-14px font-medium">Active</h3>
                <div className="flex gap-10 p-2 items-center">
                  <ul className="text-gray-500 text-12px">
                    <li><span>Status</span></li>
                  </ul>
                  <ToggleButton isActive={employee.active} onToggle={handleToggle} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default EmployeeDetails;
