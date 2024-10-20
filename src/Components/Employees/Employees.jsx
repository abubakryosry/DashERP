import React, { useContext, useState } from "react";
import { EmployeeContext } from "../../EmployeeContext ";
import Employee from "../Employee/Employee";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import Pagination from "../Pagination/Pagination";
import EmployeeForm from '../EmployeeForm/EmployeeForm'; 

function Employees() {
  const { employees, deleteEmployee } = useContext(EmployeeContext);
  const [currenPage, setCurrenPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [isFormOpen, setFormOpen] = useState(false);

  console.log(isFormOpen);
  
  let lastIndex = currenPage * rowsPerPage;
  let firstIndex = lastIndex - rowsPerPage;
  let employeesPagination = employees.slice(firstIndex, lastIndex);

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-poppins">
        <main className="flex-grow ml-0 md:ml-60 p-4 overflow-y-auto">
          <div className="bg-white p-3 rounded-2xl">
            <div className="flex flex-col md:flex-row md:justify-between items-center py-3">
              <div className="md:w-8/12 lg:w-9/12">
                <div className="relative">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800"
                  />
                  <input
                    className="w-full pl-10 pr-3 rounded-3xl border border-gray-300 focus:outline-none focus:ring-primary focus:border-primary"
                    type="text"
                    placeholder="Search Employees"
                  />
                </div>
              </div>
              <div className="w-10/12 md:w-4/12 lg:w-3/12 mt-5 md:mt-0 md:ms-3 text-center">
                <button
                  className="rounded-3xl text-12px font-medium px-8 md:px-1 lg:px-2 xl:px-4 py-3 duration-100 border border-white text-gray-50 bg-primary hover:bg-white hover:text-primary hover:border-primary"
                  onClick={() => setFormOpen(true)}
                >
                  <FontAwesomeIcon icon={faPlus} />
                  <span className="ms-3">New Employee</span>
                </button>
              </div>
            </div>
            <table className="w-full text-12px mt-3 p-3">
              <thead>
                <tr className="text-left">
                  <th className="border-b-2 border-t-2 border-gray-100 p-2">Employee</th>
                  <th className="border-b-2 border-t-2 border-gray-100 p-2">Role</th>
                  <th className="border-b-2 border-t-2 border-gray-100 p-2">E-mail</th>
                  <th className="border-b-2 border-t-2 border-gray-100 p-2">Phone</th>
                  <th className="border-b-2 border-t-2 border-gray-100 p-2">Start Date</th>
                  <th className="border-b-2 border-t-2 border-gray-100 p-2">Active</th>
                  <th className="border-b-2 border-t-2 border-gray-100 p-2"></th>
                </tr>
              </thead>
              <tbody>
                {employeesPagination.map((employee) => {
                  return (
                    <Employee
                      key={employee.id}
                      employee={employee}
                      deleteEmployee={deleteEmployee}
                      currenPage={currenPage}
                    />
                  );
                })}
              </tbody>
            </table>
            <Pagination setCurrenPage={setCurrenPage} currenPage={currenPage} totalRows={employees.length} />
          </div>
        </main>
        {isFormOpen && <EmployeeForm onClose={() => setFormOpen(false)} />} 
      </div>
    </>
  );
}

export default Employees;
