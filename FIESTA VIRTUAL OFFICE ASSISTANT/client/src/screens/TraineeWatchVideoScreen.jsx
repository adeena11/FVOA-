import Topbar from "../components/Topbar/topbar.jsx";
import TraineeSidebar from "../components/TraineeSidebar/traineeSidebar.jsx";
import WatchVideo from "../components/WatchVideo/watchVideo.jsx";

const TraineeWatchVideosScreen = () => {
    return (
        <>
            <Topbar />
            <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
            <TraineeSidebar />
           <WatchVideo/>
            </div>
        </>
    );
}

export default TraineeWatchVideosScreen;