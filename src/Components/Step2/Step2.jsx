import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage, faTrashAlt, faRedo } from "@fortawesome/free-solid-svg-icons"; // Import the icons

const Step2 = ({
  handleImageUpload,
  employeeData,
  handleImageChange,
  setEmployeeData,
}) => {
  // Function to get the file name from the uploaded file
  const getFileName = () => {
    if (employeeData.image) {
      const parts = employeeData.image.split("/");
      return parts[parts.length - 1]; // Get the last part (the file name)
    }
    return "";
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-16px scale-y-105 font-semibold text-gray-900 mb-3">
        Add Image
      </h2>
      <div className="border border-dashed rounded-2xl flex p-8">
        <div className="flex-shrink-0 mr-4">
          {employeeData.image && (
            <img src={employeeData.image} alt="Preview" className="w-24" />
          )}
        </div>
        <div className="flex-grow flex flex-col items-center justify-center">
          {!employeeData.image && (
            <label className="  text-center cursor-pointer t flex flex-col items-center">
              <FontAwesomeIcon
                icon={faImage}
                className="text-primary text-3xl mb-2"
              /> <span className="bg-primary text-white ext-white rounded-2xl border border-gray-300 px-4 py-2">
                + Add image
              </span>
              
              <input
                type="file"
                onChange={handleImageUpload}
                accept="image/*"
                required
                className="hidden"
              />
            </label>
          )}
          {employeeData.image && (
            <div className="flex flex-col items-center text-center space-y-2">
              <span className="text-gray-700">{getFileName()}</span>{" "}
              {/* Display file name */}
              <div className="flex space-x-2">
                <button
                  onClick={handleImageChange}
                  className="text-primary rounded px-2 py-2 flex items-center"
                >
                  <FontAwesomeIcon icon={faRedo} className="mr-1" />
                  <span className="text-gray-400">Change</span>
                </button>
                <button
                  onClick={() =>
                    setEmployeeData((prev) => ({ ...prev, image: "" }))
                  }
                  className="text-primary rounded px-2 py-2 flex items-center"
                >
                  <FontAwesomeIcon icon={faTrashAlt} className="mr-1" />
                  <span className="text-gray-400">Remove</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Step2;
