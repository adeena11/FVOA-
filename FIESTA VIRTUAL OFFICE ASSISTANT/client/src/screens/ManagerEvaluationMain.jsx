
import DisplayWritersEvaluation from "../components/AssignTask/DisplayWritersEvaluation";
import ManagerSidebar from "../components/ManagerSidebar/ManagerSidebar";
import Topbar from "../components/Topbar/topbar";
import WelcomeManager from "../components/welcome_manager/WelcomeManager";

const ManagerEvaluation = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <ManagerSidebar/>
        <DisplayWritersEvaluation/>
        
        </div>
        </>
    );
}
 
export default ManagerEvaluation;