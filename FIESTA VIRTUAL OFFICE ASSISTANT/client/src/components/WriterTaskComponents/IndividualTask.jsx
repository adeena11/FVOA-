import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchTask } from "../../actions/task";
import Axios from 'axios';
import FileDownload from 'js-file-download';
import { useState } from "react";
import './styles.css';
const IndividualTask = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
   
    var tasks = useSelector((state) => state.tasks);
    
    useEffect(() => {
        dispatch(fetchTask());
    }, []);

    console.log(tasks)
    var actualTask = [];
    const findTask = () => {
         tasks.find(task => {
            if(task._id === id){
                console.log("in it")
                actualTask[0] = task;
               return;
             }
    })}
    console.log( "actual",actualTask)
    findTask();
    const download =( e) => {
        e.preventDefault();
        Axios({
            url: `http://localhost:5000/writer/task/${id}/download`,
            method: "GET",
            responseType: "blob"
        }).then((res)=> {
                 console.log(res);
                 FileDownload(res.data.filedata, actualTask[0].filedata);
        })
    }
    return ( 
        <div className="task_container_main">
           <div className=" task_details">
            <div>
           
           <div style={{color: '#1c2e4a', fontSize: '28px', fontWeight: '600', marginTop: '10%', marginBottom: '10%'}}> {actualTask[0].title}</div>
           </div>
           <div>
           <div style={{fontSize: '18px', fontWeight: '600', color: '#3a3b3c'}}> Task Description: </div>
           <div style={{fontSize: '16px',  color: '#3a3b3c', fontStyle: 'italic', marginBottom: '2%'}}> {actualTask[0].description}</div>
           </div>
           <div>
           <div style={{fontSize: '14px', color: '#3a3b3c', marginBottom: '7%'}}> Due Date:  {actualTask[0].dueDate.split('T')[0]} {(actualTask[0].dueDate.split('T')[1]).split('.')[0]}</div>
           </div>
          
           <div>
           <div style={{fontSize: '18px', fontWeight: '600', color: '#3a3b3c'}}> Attachments: </div>
           <div style={{fontSize: '14px', color: '#3a3b3c', marginLeft: '10%',marginTop: '2%', marginBottom: '10%'}}> {actualTask[0].filedata}</div>
          
           <button className='task_button' onClick={(e) => download(e)}> Download Attachment</button>
           </div>
           </div>
           <div>
           <div style={{fontSize: '16px', color: '#3a3b3c', marginTop: '50%'}}> Word Count:  {actualTask[0].wordCount} </div>
            
            </div>
        </div>
     );
}
 
export default IndividualTask;