import React, { useState, useContext } from "react";
import { EmployeeContext } from "../../EmployeeContext ";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./EmployeeForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import StepIndicator from "../StepIndicator";
import Step3 from "../Step3/Step3";
import Step2 from "../Step2/Step2";

const EmployeeForm = ({ onClose }) => {
  const { addEmployee } = useContext(EmployeeContext);
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [employeeData, setEmployeeData] = useState({
    employeeName: "",
    startDate: "",
    role: "",
    email: "",
    phone: "",
    image: "",
    active: true,
  });

  const validationSchema = Yup.object().shape({
    employeeName: Yup.string().required("Required"),
    startDate: Yup.date().required("Required"),
    role: Yup.string().required("Required"),
    email: Yup.string()
      .matches(
        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
        "Invalid email format"
      )
      .required("Required"),
    phone: Yup.string()
      .matches(/^01[0-9]{9}$/, "Invalid Egyptian phone number format")
      .required("Required"),
  });

  const handleNextStep = (values) => {
    setEmployeeData((prevData) => ({ ...prevData, ...values })); // Update employeeData with Formik values
    setStep((prev) => prev + 1);
  };

  const handlePrevStep = () => {
    setStep((prev) => prev - 1);
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setEmployeeData((prevData) => ({ ...prevData, image: reader.result }));
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleImageChange = () => {
    setEmployeeData((prevData) => ({ ...prevData, image: "" }));
  };

  const handleSubmit = () => {
    const newEmployee = {
      ...employeeData,
      id: Date.now(),
    };
    addEmployee(newEmployee);
    navigate(`/employee-details/${newEmployee.id}`);
    onClose();
  };

  return (
    <div className="modal relative z-40 font-poppins">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="relative z-50 bg-white rounded-lg shadow-xl w-96 h-auto md:w-[625px] md:h-max flex flex-col text-12px">
        {step === 1 && (
          <Formik
            initialValues={employeeData}
            validationSchema={validationSchema}
            onSubmit={handleNextStep}
          >
            {() => (
              <Form className="flex flex-col p-7">
                <div className="flex justify-between items-center mb-4 border-b-2 border-gray-100 pb-3">
                  <h2 className="text-16px text-gray-900 scale-y-105 font-semibold">
                    Add New Employee
                  </h2>
                  <button
                    type="button"
                    onClick={onClose}
                    className="text-black text-14px hover:text-gray-900"
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                </div>
                <StepIndicator currentStep={step} />
                <div className="flex flex-col">
                  {/* Form fields */}
                  <label className="flex mb-1">
                    Name <span className="text-primary me-3">*</span>
                    <ErrorMessage
                      name="employeeName"
                      component="div"
                      className="text-red-600"
                    />
                  </label>
                  <Field
                    type="text"
                    name="employeeName"
                    placeholder="Enter Employee Name"
                    className="border text-sm border-gray-300 rounded-2xl mb-4 px-2 py-1 placeholder:text-xs"
                  />

                  <label className="flex mb-1">
                    Start Date <span className="text-primary">*</span>
                    <ErrorMessage
                      name="startDate"
                      component="div"
                      className="text-red-600"
                    />
                  </label>
                  <div className="relative mb-4">
                    <Field
                      type="text"
                      name="startDate"
                      onFocus={(e) => (e.target.type = "date")}
                      onBlur={(e) => {
                        if (!e.target.value) e.target.type = "text";
                      }}
                      className="border text-sm border-gray-300 rounded-2xl px-2 py-1 placeholder:text-xs w-full"
                      placeholder="Start Date"
                    />
                    
                  </div>

                  <label className="flex mb-1">
                    Role <span className="text-primary me-3">*</span>
                    <ErrorMessage
                      name="role"
                      component="div"
                      className="text-red-600"
                    />
                  </label>
                  <Field
                    as="select"
                    name="role"
                    className="border border-gray-300 text-12px rounded-2xl mb-4"
                  >
                    <option value="" label="Select Role" />
                    <option value="IT" label="IT" />
                    <option value="Software" label="Software" />
                    <option value="Data Entry" label="Data Entry" />
                  </Field>

                  <label className="flex mb-1">
                    Email <span className="text-primary me-3">*</span>
                    <ErrorMessage
                      name="email"
                      component="div"
                      className="text-red-600"
                    />
                  </label>
                  <Field
                    type="email"
                    name="email"
                    placeholder="Enter Email"
                    className="border text-sm border-gray-300 rounded-2xl mb-4 px-2 py-1 placeholder:text-xs"
                  />

                  <label className="flex mb-1">
                    Phone <span className="text-primary me-3">*</span>
                    <ErrorMessage
                      name="phone"
                      component="div"
                      className="text-red-600"
                    />
                  </label>
                  <Field
                    type="tel"
                    name="phone"
                    placeholder="Enter Phone Number"
                    className="border text-sm border-gray-300 rounded-2xl mb-4 px-2 py-1 placeholder:text-xs"
                  />
                </div>

                <button
                  type="submit"
                  className="ms-auto block text-md w-1/5 rounded-3xl text-md font-medium px-4 py-3 duration-100 border border-white text-gray-50 bg-primary hover:bg-white hover:text-primary hover:border-primary"
                >
                  Next
                </button>
              </Form>
            )}
          </Formik>
        )}

        {/* Step 2 */}
        {step === 2 && (
          <div className="flex flex-col p-7">
            <div className="flex justify-between items-center mb-4 border-b-2 border-gray-100 pb-3">
              <h2 className="text-16px text-gray-900 scale-y-105 font-semibold">
                Add New Employee
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <StepIndicator currentStep={step} />
            <div>
              <Step2
                handleImageUpload={handleImageUpload}
                employeeData={employeeData}
                handleImageChange={handleImageChange}
                setEmployeeData={setEmployeeData}
              />
            </div>
            <div className="flex justify-between mt-5">
              <button
                onClick={handlePrevStep}
                className="text-md w-1/5 rounded-3xl text-md font-medium px-4 py-3 duration-100 border border-gray-600 text-gray-600 bg-white hover:bg-gray-600 hover:text-white hover:border-white"
              >
                Back
              </button>
              <button
                type="button"
                onClick={() => handleNextStep(employeeData)}
                className="text-md w-1/5 rounded-3xl text-md font-medium px-4 py-3 duration-100 border border-white text-gray-50 bg-primary hover:bg-white hover:text-primary hover:border-primary"
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 3 */}
        {step === 3 && (
          <div className="flex flex-col p-7">
            <div className="flex justify-between items-center mb-4 border-b-2 border-gray-100 pb-3">
              <h2 className="text-16px text-gray-900 scale-y-105 font-semibold">
                Add New Employee
              </h2>
              <button
                type="button"
                onClick={onClose}
                className="text-gray-600 hover:text-gray-900"
              >
                <FontAwesomeIcon icon={faXmark} />
              </button>
            </div>
            <StepIndicator currentStep={step} />
            <div>
              <Step3 employeeData={employeeData} />
            </div>
            <div className="flex justify-between mt-5">
              <button
                onClick={handlePrevStep}
                className="text-md w-1/5 rounded-3xl text-md font-medium px-4 py-3 duration-100 border border-gray-600 text-gray-600 bg-white hover:bg-gray-600 hover:text-white hover:border-white"
              >
                Back
              </button>
              <button
                onClick={handleSubmit}
                className="text-md w-1/5 rounded-3xl text-md font-medium px-4 py-3 duration-100 border border-white text-gray-50 bg-primary hover:bg-white hover:text-primary hover:border-primary"
              >
                Apply
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default EmployeeForm;
