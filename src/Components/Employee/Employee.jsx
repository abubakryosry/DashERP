import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleCheck, faCircleXmark, faTrashCan } from "@fortawesome/free-solid-svg-icons";

import React from "react";
import { Link } from 'react-router-dom';

function Employee({employee, deleteEmployee}) {
  return (
    <>
      <tr className="hover:bg-gray-50 cursor-pointer">
      <td className="border-b border-gray-200 p-2">
        <Link to={`/employee-details/${employee.id}`} className="block w-full h-full">
          <div className="flex items-center">
          <div className="relative w-6 h-6 overflow-hidden rounded-full me-2">
                  <img
                    src={employee.image || Admin}
                    alt="employeeImage"
                    className="w-full h-full object-cover"
                  />
                </div>
            <span>{employee.employeeName}</span>
          </div>
        </Link>
      </td>
      <td className="border-b border-gray-200 p-2">
        <Link to={`/employee-details/${employee.id}`} className="block w-full h-full">
          {employee.role}
        </Link>
      </td>
      <td className="border-b border-gray-200 p-2">
        <Link to={`/employee-details/${employee.id}`} className="block w-full h-full">
          {employee.email}
        </Link>
      </td>
      <td className="border-b border-gray-200 p-2">
        <Link to={`/employee-details/${employee.id}`} className="block w-full h-full">
          {employee.phone}
        </Link>
      </td>
      <td className="border-b border-gray-200 p-2">
        <Link to={`/employee-details/${employee.id}`} className="block w-full h-full">
          {employee.startDate}
        </Link>
      </td>
      <td className="border-b border-gray-200 p-2 text-xl">
        <Link to={`/employee-details/${employee.id}`} className="block w-full h-full">
          {employee.active ? (
            <FontAwesomeIcon className='text-right' icon={faCircleCheck} />
          ) : (
            <FontAwesomeIcon className='text-wrong' icon={faCircleXmark} />
          )}
        </Link>
      </td>
      <td className="border-b border-gray-200 p-2">
        <button onClick={() => deleteEmployee(employee.id)} className="text-gray-400 hover:text-red-700">
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
      </td>
    </tr>
    </>
  );
}

export default Employee;
