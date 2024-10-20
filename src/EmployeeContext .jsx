import React, { createContext, useState, useEffect } from 'react';
import employeeData from './Components/Data';

export const EmployeeContext = createContext();

export const EmployeeProvider = ({ children }) => {
    const [employees, setEmployees] = useState(() => {
        const savedEmployees = localStorage.getItem('employees');
        return savedEmployees ? JSON.parse(savedEmployees) : employeeData;
    });

    useEffect(() => {
        localStorage.setItem('employees', JSON.stringify(employees));
    }, [employees]);

    function addEmployee(newEmployee) {
        setEmployees((prevEmployees) => [...prevEmployees, newEmployee]);
    }

    function updateEmployee(updatedEmployee) {
        setEmployees((prevEmployees) =>
            prevEmployees.map((emp) =>
                emp.id === updatedEmployee.id ? updatedEmployee : emp
            )
        );
    }

    function deleteEmployee(id) {
        setEmployees((prevEmployees) =>
            prevEmployees.filter((emp) => emp.id !== id)
        );
    }

    function toggleEmployeeActive(id) {
        setEmployees((prevEmployees) =>
            prevEmployees.map((emp) =>
                emp.id === id ? { ...emp, active: !emp.active } : emp
            )
        );
    }

    return (
        <EmployeeContext.Provider value={{ employees, addEmployee, updateEmployee, deleteEmployee, toggleEmployeeActive }}>
            {children}
        </EmployeeContext.Provider>
    );
};
