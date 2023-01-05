
import EvaluateWriter from "../components/AssignTask/EvaluateWriter";
import ManagerSidebar from "../components/ManagerSidebar/ManagerSidebar";
import Topbar from "../components/Topbar/topbar";
import WelcomeManager from "../components/welcome_manager/WelcomeManager";

const ManagerRateWriter = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <ManagerSidebar/>
        <EvaluateWriter/>
        </div>
        </>
    );
}
 
export default ManagerRateWriter;