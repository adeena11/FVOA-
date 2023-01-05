import Topbar from "../components/Topbar/topbar";
import WelcomeWriter from "../components/welcome_writer/WelcomeWriter";
import WriterSidebar from "../components/WriterSidebar/WriterSidebar";

const WriterDashboard = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <WriterSidebar/>
        <WelcomeWriter/>
        </div>
        </>);
}
 
export default WriterDashboard;