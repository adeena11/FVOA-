import Topbar from "../components/Topbar/topbar";
import AdminDashboardSidebar from "../components/adminDashboarrdSidebar/adminDashboardSidebar";
import Noticeboard from "../components/noticeboard/noticeboard";

const  NoticeboardAdmin= () => {
    return (  
        <>
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
       <AdminDashboardSidebar/>
       <Noticeboard  />
       </div>
       </>
    );
}
 
export default NoticeboardAdmin;