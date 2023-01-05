import AdminDashboardSidebar from "../components/adminDashboarrdSidebar/adminDashboardSidebar";
import Topbar from "../components/Topbar/topbar";
import WelcomeAdmin from "../components/welcome_admin/welcome_Admin";

const AdminDashboard = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <AdminDashboardSidebar/>
        <WelcomeAdmin/>
        </div>
        </>
    );
}
 
export default AdminDashboard;