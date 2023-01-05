import Topbar from "../components/Topbar/topbar.jsx";
import TraineeSidebar from "../components/TraineeSidebar/traineeSidebar.jsx";
import TraineeNoticeboard from "../components/trainee_noticeboard/trainee_noticeboard.jsx";
const TraineeNoticeboardScreen = () => {
    return (
        <>
            <Topbar />
            <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
            <TraineeSidebar />
            <TraineeNoticeboard/>
            </div>
        </>
    );
}

export default TraineeNoticeboardScreen;