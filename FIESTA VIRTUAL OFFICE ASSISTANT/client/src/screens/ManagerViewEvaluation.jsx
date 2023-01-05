

import EvaluationGraphs from "../components/AssignTask/EvaluationGraphs";
import ManagerSidebar from "../components/ManagerSidebar/ManagerSidebar";
import Topbar from "../components/Topbar/topbar";

const ManagerViewEvaluation = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <ManagerSidebar/>
        <EvaluationGraphs/>
        </div>
        </>
    );
}
 
export default ManagerViewEvaluation;