import Topbar from "../components/Topbar/topbar";
import EmployeeCreation from "../components/employeeCreation/EmployeeCreation";
import AdminDashboardSidebar from "../components/adminDashboarrdSidebar/adminDashboardSidebar";
const AddEmployeeAdmin = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <AdminDashboardSidebar/>
        <EmployeeCreation/>
        </div>
        </>
    );
}
 
export default AddEmployeeAdmin;