import WelcomeTrainee from "../components/welcome_trainee/welcome_trainee.jsx";
import Topbar from "../components/Topbar/topbar.jsx";
import TraineeSidebar from "../components/TraineeSidebar/traineeSidebar.jsx";
const TraineeDashboard = () => {
    return (
        <>
            <Topbar />
            <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
            <TraineeSidebar />
            <WelcomeTrainee />
            </div>
        </>
    );
}

export default TraineeDashboard;