

import ManagerSidebar from "../components/ManagerSidebar/ManagerSidebar";
import Topbar from "../components/Topbar/topbar";
import UploadTask from "../components/UploadTask/UploadTask";
import UploadTaskAlternative from "../components/UploadTask/UploadTaskAlternative";

const ManagerUploadTask = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <ManagerSidebar/>
        <UploadTaskAlternative/>
        </div>
        </>
    );
}
 
export default ManagerUploadTask;