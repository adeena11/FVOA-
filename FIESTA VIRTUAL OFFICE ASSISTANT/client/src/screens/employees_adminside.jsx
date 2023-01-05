import AdminDashboardSidebar from "../components/adminDashboarrdSidebar/adminDashboardSidebar";
import Employees from "../components/employees/employees";
import Topbar from "../components/Topbar/topbar";

const EmployeesAdminSide = () => {
    return ( 
        <>
         <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <AdminDashboardSidebar/>
        <Employees/>
        </div>
        </>
     );
}
 
export default EmployeesAdminSide;