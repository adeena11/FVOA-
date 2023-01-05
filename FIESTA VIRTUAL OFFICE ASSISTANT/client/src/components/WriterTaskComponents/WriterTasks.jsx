import {useDispatch, useSelector} from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchTask } from '../../actions/task';
import { useHistory } from 'react-router-dom';
const WriterTasks = () => {
    const dispatch = useDispatch();
    const navigate = useHistory();
    var tasks = useSelector((state) => state.tasks);
    var count = 1; 
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    
    useEffect(() => {
        dispatch(fetchTask());
    }, []);

    const onClickTask = (id) => {
        navigate.push(`/writer/tasks/${id}`);
    }
    var tempTask = [];
    var count = 0;
    var yourTasks = () => {
        tasks.find((task) => {
            if(task.writerId === user.result._id )
                 tempTask[count++] = task;
        })
    }
    yourTasks();
    tasks = tempTask;
    console.log(tempTask);
    return ( 
        <div className='task_container_main'>
           
             <div class="header_fixed">
                    <table>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Title</th>
                                <th>Word Count</th>
                                <th>Date</th>
                                <th>Time</th>
                                <th>View</th>
                            </tr>
                        </thead>
                        <tbody>

                            {tasks.map((task) => (

                                <tr key={task._id} >
                                    <td > {count++} </td>
                                    <td> {task.title} </td>
                                    <td> {task.wordCount} </td>
                                    <td> {task.dueDate.split('T')[0]} </td>
                                    <td> {(task.dueDate.split('T')[1]).split('.')[0]} </td>
                                    <td>
                                        <button className="edit"
                                           onClick={ ()=>{
                                                console.log(task._id);
                                            onClickTask(task._id);
                                           }}
                                        > View</button>
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
        </div>
        </div>
     );
}
 
export default WriterTasks;