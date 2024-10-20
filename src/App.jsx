import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Teams from './Components/Teams/Teams';
import Employees from './Components/Employees/Employees';
import NotFound from './Components/NotFound/NotFound';
import Layout from './Components/Layout/Layout';
import Settings from './Components/Settings/Settings';
import { EmployeeProvider } from './EmployeeContext ';
import EmployeeDetails from './Components/EmployeeDetails/EmployeeDetails';

function App() {
  const router = createBrowserRouter([
    {
      path: '', element: <Layout />, children: [
        { index: true, element: <Home /> },
        { path: 'dashboard', element: <Dashboard /> },
        { path: 'teams', element: <Teams /> },
        { path: 'employees', element: <Employees /> },
        { path: 'settings', element: <Settings /> }, 
        { path: 'employee-details/:id', element: <EmployeeDetails /> },
        { path: '*', element: <NotFound /> },
      ]
    }
  ])
  return (
    <>
    <EmployeeProvider>
      <RouterProvider router={router}></RouterProvider>
    </EmployeeProvider>
    </>
  );
}
export default App;
