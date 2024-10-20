const roles = ["IT", "Software", "Data Entry"];
const active = [true, false];


const employeeData = Array.from({ length: 23 }, (_, i) => ({
    id: i,
    employeeName: "Ahmed Ali",
    image: "assets/Admin.png",
    role: roles[i % roles.length],
    email: `example@gmail.com`, 
    phone: `01234567899`,
    startDate: "10/4/2024", 
    active: active[i % active.length],
}));

export default employeeData;
