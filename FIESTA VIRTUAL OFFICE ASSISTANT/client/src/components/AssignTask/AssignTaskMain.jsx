import './styles.css';
import { useHistory } from 'react-router-dom';
const AssignTaskMain = () => {
    const navigate = useHistory();
    const onClickWriter =() =>{
     
        navigate.push('/manager/assigntask/writers');
    }
    const onClickTrainee = () => {
       
        navigate.push('/manager/assigntask/trainee');
    }
    return (
        <div className='atm_container'>
            <h1 className='atm_header'>ASSIGN TASKS</h1>
            <p className="atm_paragraph"> Who do you want to assign the task to?</p>
            
            <div style={{ display: 'flex',   justifyContent: 'space-evenly' }}>
            
                <button className='atm_button' onClick={onClickWriter} > Writers</button>
               
              
                <button className='atm_button' onClick={onClickTrainee}> Trainee</button>
              
            </div>
        </div>
    );
}

export default AssignTaskMain;