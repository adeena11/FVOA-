
import AssignTaskMain from "../components/AssignTask/AssignTaskMain";
import ManagerSidebar from "../components/ManagerSidebar/ManagerSidebar";
import Topbar from "../components/Topbar/topbar";


const AssignTask = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <ManagerSidebar/>
        <AssignTaskMain/>
        </div>
        </>
    );
}
 
export default AssignTask;