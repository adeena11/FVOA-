import Topbar from "../components/Topbar/topbar";
import Calendarschedule from "../components/Calender/Calender";
import AdminDashboardSidebar from "../components/adminDashboarrdSidebar/adminDashboardSidebar";
import CalendarScheduler from "../components/Calender/Calendar";

const AdminCalendar = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <AdminDashboardSidebar/>
        <CalendarScheduler/>
       
        </div>
        </>
    );
}
 
export default AdminCalendar;