import Topbar from "../components/Topbar/topbar";
import WelcomeWriter from "../components/welcome_writer/WelcomeWriter";
import WriterSidebar from "../components/WriterSidebar/WriterSidebar";
import IndividualTask from "../components/WriterTaskComponents/IndividualTask";

const WriterTaskScreenIndividual = () => {
    return (  
        <>
        
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <WriterSidebar/>
        <IndividualTask/>
        </div>
        </>);
}
 
export default WriterTaskScreenIndividual;