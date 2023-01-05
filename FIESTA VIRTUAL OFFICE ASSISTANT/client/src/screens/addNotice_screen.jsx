import Topbar from "../components/Topbar/topbar";

import AdminDashboardSidebar from "../components/adminDashboarrdSidebar/adminDashboardSidebar";
import AddNoticeForm from "../components/AddNotice/AddNotice";
const AddNoticeAdmin = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex'}}>
        <AdminDashboardSidebar/>
        <AddNoticeForm/>
        </div>
        </>
    );
}
 
export default AddNoticeAdmin;