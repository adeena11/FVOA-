import Topbar from "../components/Topbar/topbar";
import WelcomeWriter from "../components/welcome_writer/WelcomeWriter";
import WriterSidebar from "../components/WriterSidebar/WriterSidebar";
import WriterTasks from "../components/WriterTaskComponents/WriterTasks";

const WriterTaskScreen = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <WriterSidebar/>
        <WriterTasks/>
        </div>
        </>);
}
 
export default WriterTaskScreen;