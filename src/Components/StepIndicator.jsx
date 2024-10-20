import React from "react";

const StepIndicator = ({ currentStep }) => {
  return (
    <>
      <div className="flex items-center justify-around mb-8">
        <div className={`flex flex-col items-center`}>
          <div
            className={`w-6 h-6 rounded-full ${
              currentStep === 1 ? "bg-primary" : "bg-gray-500"
            } border-2 border-white flex items-center justify-center`}
          ></div>
          <p className={currentStep === 1 ? "text-primary" : "text-gray-500"}>
          Personal Data
        </p>
        </div>

        {currentStep < 3 && (
          <div className="flex-grow">
            <div className="border-dotted border-b-2 border-gray-300 w-full mb-3"></div>
          </div>
          
        )}
        <div className={`flex flex-col items-center`}>
          <div
            className={`w-6 h-6 rounded-full ${
              currentStep == 2 ? "bg-primary" : "bg-gray-500"
            } border-2 border-white flex items-center justify-center`}
          ></div>
          <p className={currentStep >= 2 ? "text-primary" : "text-gray-500"}>
          Image
        </p>
        </div>

        {currentStep < 3 && (
          <div className="flex-grow">
            <div className="border-dotted border-b-2 border-gray-300 w-full mb-3"></div>
          </div>
        )}
        <div className={`flex flex-col items-center`}>
          <div
            className={`w-6 h-6 rounded-full ${
              currentStep >= 3 ? "bg-primary" : "bg-gray-500"
            } border-2 border-white flex items-center justify-center`}
          ></div>
          <p className={currentStep >= 3 ? "text-primary" : "text-gray-500"}>
          Preview
        </p>
        </div>
      </div>
     
    </>
  );
};

export default StepIndicator;
