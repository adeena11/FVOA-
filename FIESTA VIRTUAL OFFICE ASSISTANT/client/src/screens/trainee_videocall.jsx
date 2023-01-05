import Topbar from "../components/Topbar/topbar";
import TraineeSidebar from "../components/TraineeSidebar/traineeSidebar";
import VideoChat from "../components/Videochat/Videochat";
import { ContextProvider } from "../components/Videochat/SocketContext";

const TraineeVideoCall = () => {
    return (  
        <>
        <Topbar/>
        <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
        <TraineeSidebar/>
        <ContextProvider><VideoChat/></ContextProvider>

        </div>
        </>
    );
}
 
export default TraineeVideoCall;