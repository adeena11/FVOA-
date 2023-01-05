import {useState} from 'react';
import './style.css';
import { TextField } from '@material-ui/core';
import DateFnsUtils from '@date-io/date-fns';
import { DateTimePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { createTask } from '../../actions/task';
import axios from "axios";
const UploadTaskAlternative = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const [file, setFile] = useState('');
    const [filename, setFilename] = useState('Choose File');
    
    
    const [selectedDate, handleDateChange] = useState(new Date());
    const [data, setdata] = useState({
        filedata: '',  title: '', description: '', wordCount: '', writerId: id, dueDate: selectedDate
      });
    const [assignee, setassignee] = useState('');
    const [uploadedFile, setUploadedFile] = useState({});
    const [message, setMessage] = useState('');
    const [uploadPercentage, setUploadPercentage] = useState(0);
   
    const onChange = e => {
      console.log(e.target.files);
      setFile(e.target.files[0]);
      setFilename(e.target.files[0].name);
      // e.target.files[0].append('assignee', assignee)
      setdata({ ...data, filedata: e.target.files[0].name});
      console.log(data)
     
    };
  
    const onSubmit = async e => {
      e.preventDefault();
      console.log(data)
      setdata(data.dueDate=selectedDate)
      console.log(selectedDate);
     dispatch(createTask(data));
      // console.log(assignee)
        const formData = new FormData();
        formData.append(file, file);

        try {
            const res = await axios.post('http://localhost:5000/manager/uploadtask', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                },
                onUploadProgress: ProgressEvent => {
                    setUploadPercentage(parseInt(Math.round((ProgressEvent * 100) / ProgressEvent.total)));

                    
                }
            });
            console.log(res.data);
            const { fileName, filePath } = res.data;
            console.log(res.data);
            setUploadedFile({ fileName, filePath });

            setMessage('File uploaded');
        }
        catch (err) {
            console.log(err);
            if (err.response.status === 500) {
                setMessage('Something is wrong with the server');
            }
            else {
                setMessage(err.response.data.msg);
            }
            


        }
        console.log(message);
    };
  
    return (
      <div className='upload_task_container'>
        <h2 style={{marginLeft: '40%'}}>ASSIGNING A TASK</h2>
        {/* {message ? <Message msg={message} /> : null} */}
        <form onSubmit={onSubmit}>
          <div className='task_form_container'>
          
            {/* <input
              type='text'
              value={data.assignee}
              onChange={(e) => setdata({ ...data, assignee: e.target.value})}
            />
            <input
              type='text'
              value={data.assignee}
              onChange={(e) => setdata({ ...data, assignee: e.target.value})}
            /> */}
            <div className='label_container'> 
               <div className='labeling'> Task Title:</div>
               <div className='labeling'>Task Description:</div>
               <div className='labeling'>Word Count:</div>
               <div className='labeling'>Select Due Date:</div>
               <div className='labeling'>Attach Helping Material:</div>
               
            </div>
            <div>
             <div className='input_task'>
            <TextField 
            
           variant='outlined' 
           label='Task Title'   
           type="text" 
           value={data.title}
           onChange={(e) => setdata({...data, title: e.target.value})} 
         />
         </div>
         <div className='input_task'>
            <TextField 
               
           variant='outlined' 
           label='Task Description'   
           type="text" 
           value={data.description}
           onChange={(e) => setdata({...data, description: e.target.value})} 
           />
           </div>
           <div className='input_task'>
            <TextField 
               
           variant='outlined' 
           label='Word Count'   
           type="text" 
           value={data.wordCount} 
           onChange={(e) => setdata({...data, wordCount: e.target.value})}
        />
        </div>
        <div className='input_task'>

         <MuiPickersUtilsProvider utils={DateFnsUtils}>
 <DateTimePicker
   
        label="DateTimePicker"
        inputVariant="outlined"
        value={selectedDate}
        onChange={handleDateChange}
      />
      
           </MuiPickersUtilsProvider>
           </div>
           <div className='input_task'>
           <input 
              className='file_input'
              type='file'
              
              id='customFile'
              onChange={onChange}
            
         />
         </div>
         </div>
            {/* <label className='custom-file-label' htmlFor='customFile'>
              {filename}
            </label> */}
          </div>
  
          {/* <Progress percentage={uploadPercentage} /> */}
  <div style={{justifyContent: 'center', textAlign: 'center'}}>
          <input

            type='submit'
            value='Upload'
            className='task_upload_button'
          />
          </div>
        </form>
        {uploadedFile ? (
          <div className='row mt-5'>
            <div className='col-md-6 m-auto'>
              <h3 className='text-center'>{uploadedFile.fileName}</h3>
              <img style={{ width: '100%' }} src={uploadedFile.filePath} alt='' />
              <h3 className='text-center'>{uploadedFile.assignee}</h3>
            </div>
          </div>
        ) : null}
      </div>
    );
}
 
export default UploadTaskAlternative;