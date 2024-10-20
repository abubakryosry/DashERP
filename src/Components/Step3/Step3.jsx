import React, { useContext } from "react";
import ToggleButton from "../ToggleButton/ToggleButton";
import { EmployeeContext } from "../../EmployeeContext ";

function Step3({ employeeData }) {

  const { toggleEmployeeActive } = useContext(EmployeeContext);

  const handleToggle = () => {
    toggleEmployeeActive(employeeData.id);
  };
  return (
    <>
      <div className="bg-white p-4 rounded-xl shadow w-full">
        <h3 className="bg-slate-50 p-2 rounded-xl text-14px font-medium">
          Summary
        </h3>
        <div className="flex gap-40 p-2 mb-2">
          <ul className="text-gray-500  space-y-2 text-12px">
            <li>
              <span>Employee</span>
            </li>
            <li>
              <span>Role</span>
            </li>
            <li>
              <span>E-mail</span>
            </li>
            <li>
              <span>Phone</span>
            </li>
          </ul>
          <ul className="text-12px space-y-2 font-medium">
            <li>
              <div className="flex items-center">
                <div className="relative w-6 h-6 overflow-hidden rounded-full me-2">
                  <img
                    src={employeeData.image}
                    alt="employeeImage"
                    className="w-full h-full object-cover"
                  />
                </div>

                <span>{employeeData.employeeName}</span>
              </div>
            </li>
            <li>
              <span>{employeeData.role}</span>
            </li>
            <li>
              <span>{employeeData.email}</span>
            </li>
            <li>
              <span>{employeeData.phone}</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col md:flex-row justify-center gap-3 items-center mt-2">
        <div className="bg-white p-4 rounded-xl shadow w-full">
          <h3 className="bg-slate-50 p-2 rounded-xl text-14px font-medium">
            Date
          </h3>
          <div className="flex gap-10 p-2">
            <ul className="text-gray-500 text-12px">
              <li>
                <span>Start Date</span>
              </li>
            </ul>
            <ul className="text-12px font-medium">
              <li>
                <span>{employeeData.startDate}</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="bg-white p-4 rounded-xl shadow w-full">
          <h3 className="bg-slate-50 p-2 rounded-xl text-14px font-medium">
            Active
          </h3>
          <div className="flex gap-10 p-2 justify-between items-center">
                  <ul className="text-gray-500 text-12px">
                    <li><span>Status</span></li>
                  </ul>
                  <ToggleButton isActive={employeeData.active} onToggle={handleToggle} />
                </div>
        </div>
      </div>
    </>
  );
}

export default Step3;
