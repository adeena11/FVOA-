

import ManagerSidebar from "../components/ManagerSidebar/ManagerSidebar";
import ProjectTemplate from "../components/ProjectTemplate/ProjectTemplate.tsx";
import Topbar from "../components/Topbar/topbar";


const ManagerProject = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <ManagerSidebar/>
        <ProjectTemplate/>
        </div>
        </>
    );
}
 
export default ManagerProject;