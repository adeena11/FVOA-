import AdminDashboardSidebar from "../components/adminDashboarrdSidebar/adminDashboardSidebar";
import Employee from "../components/employeeDetails/employee";
import Topbar from "../components/Topbar/topbar";

const EmployeeDetailScreen = () => {
    return ( 
        <>
         <Topbar/>
         <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <AdminDashboardSidebar/>
        <Employee/>
        </div>
        </>
     );
}
 
export default EmployeeDetailScreen;
