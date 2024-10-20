const roles = ["IT", "Software", "Data Entry"];


const employeeData = Array.from({ length: 23 }, (_, i) => ({
    id: i,
    employeeName: "Ahmed Ali",
    image: "../assets/Admin.png",
    role: roles[i % roles.length],
    email: `example@gmail.com`, 
    phone: `01234567899`,
    startDate: "2024-01-04", 
    active: true,
}));

export default employeeData;
