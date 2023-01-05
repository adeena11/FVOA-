
import DisplayWriters from "../components/AssignTask/DisplayWriters";
import ManagerSidebar from "../components/ManagerSidebar/ManagerSidebar";
import Topbar from "../components/Topbar/topbar";

const ManagerAssignTaskWriters = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <ManagerSidebar/>
        <DisplayWriters/>
        </div>
        </>
    );
}
 
export default ManagerAssignTaskWriters;