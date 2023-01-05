
import Topbar from "../components/Topbar/topbar.jsx";
import TraineeSidebar from "../components/TraineeSidebar/traineeSidebar.jsx";
import QuizMain from "../components/Quizes/QuizMain.jsx";
const TraineeQuizScreen = () => {
    return (
        <>
            <Topbar />
            <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
            <TraineeSidebar />
            <QuizMain/>
            </div>
        </>
    );
}

export default TraineeQuizScreen;