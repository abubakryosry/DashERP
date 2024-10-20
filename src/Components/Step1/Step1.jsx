// Step1.js
import React from "react";

const Step1 = ({ employeeData, handleInputChange, handleNextStep }) => {
  return (
    <div className="flex flex-col p-4">
      <label className="flex mb-1">
        Name <span className="text-primary">*</span>
      </label>
      <input
        type="text"
        name="name"
        value={employeeData.name}
        onChange={handleInputChange}
        placeholder="Enter Employee Name"
        required
        className="border border-gray-300 rounded-2xl mb-4 px-2 py-1 placeholder:text-xs"
      />
      
      <label className="flex mb-1">
        Start Date <span className="text-primary">*</span>
      </label>
      <input
        type="date"
        name="startDate"
        value={employeeData.startDate}
        onChange={handleInputChange}
        required
        className="border border-gray-300 rounded-2xl mb-4 px-2 py-1"
      />

      <label className="flex mb-1">
        Role <span className="text-primary">*</span>
      </label>
      <select
        name="role"
        value={employeeData.role}
        onChange={handleInputChange}
        required
        className="border border-gray-300 rounded-2xl mb-4 px-2 py-1"
      >
        <option value="" disabled>Select Role</option>
        <option value="IT">IT</option>
        <option value="Software">Software</option>
        <option value="DataEntry">Data Entry</option>
      </select>

      <button
        onClick={handleNextStep}
        className="bg-blue-500 text-white rounded px-4 py-2"
      >
        Next
      </button>
    </div>
  );
};

export default Step1;
