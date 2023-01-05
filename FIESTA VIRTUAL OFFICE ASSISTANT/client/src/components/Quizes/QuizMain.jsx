import { useHistory } from "react-router-dom";
const QuizMain = () => {
    const navigate = useHistory();
    const onClickBWQ = () => {
        navigate.push('/trainee/quiz/beginnerwiterquiz');
    }

    return ( 
        <div>        <h2>SELECT A QUIZ</h2>
        <div>
            <button onClick={onClickBWQ}> Beginner Writer Quiz</button>
            <button> Beginner English Quiz</button>
            <button> Advanced English Quiz</button>
        </div>
        </div>

     );
}
 
export default QuizMain;