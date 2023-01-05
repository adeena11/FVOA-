import Topbar from "../components/Topbar/topbar.jsx";
import TraineeSidebar from "../components/TraineeSidebar/traineeSidebar.jsx";
import TrainingVideos from "../components/trainee_TrainingVideos/trainee_TrainingVideos.jsx";
const TraineeVideosScreen = () => {
    return (
        <>
            <Topbar />
            <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
            <TraineeSidebar />
           <TrainingVideos/>
            </div>
        </>
    );
}

export default TraineeVideosScreen;