
import ManagerSidebar from "../components/ManagerSidebar/ManagerSidebar";
import Topbar from "../components/Topbar/topbar";
import WelcomeManager from "../components/welcome_manager/WelcomeManager";

const ManagerDashboard = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <ManagerSidebar/>
        <WelcomeManager/>
        </div>
        </>
    );
}
 
export default ManagerDashboard;