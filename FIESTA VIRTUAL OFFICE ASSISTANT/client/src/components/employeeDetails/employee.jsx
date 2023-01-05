
import React, { useEffect, useState } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import './styles.css';
//import { useNavigate } from 'react-router-dom';
import { TextField } from '@material-ui/core';
import {useParams } from 'react-router-dom';
import { getEmployee, updateEmployee } from '../../actions/employee';

const Employee = () => {
    

    const [employeeData, setEmployeeData] = useState({emp_name: '', emp_qualification: '', emp_age: '', emp_email: '', emp_phone: '', emp_username: '', emp_password: '' });
    const employees = useSelector((state) => state.employees);
    const dispatch= useDispatch();

    //const navigate= useNavigate();

    const { id }= useParams();
    console.log("empid", id );
    console.log("user details", employees); 

    const handleSaveChanges = (e) => {
        e.preventDefault();
        console.log("saving");
        dispatch(updateEmployee(id, employeeData));
    }

    const findRecord = () => employees.find(element => {
        console.log("saving 1");
        if (element._id === id)
         setEmployeeData(element);
      });
    useEffect(()=> {
        findRecord();
    }, [])
    return ( 
            
      <div className='employeeDetailContainer'> {console.log(employeeData.emp_name)}
            <span className='user-profile-span'>USER PROFILE</span>
          
        <form action="post" >
            <div style={{'display': 'flex', 'justifyContent': 'center', 'gap': "1rem" , 'marginBottom': '1rem'}}>
           
            <TextField 
            variant='outlined' 
            label='Full Name'   
            type="text" 
            value={employeeData.emp_name} 
            onChange={(e) => setEmployeeData({ ...employeeData, emp_name: e.target.value})}/>
           
           
            <TextField 
            variant='outlined' 
            label='Qualification'    
            type="text" 
            value={employeeData.emp_qualification} 
            onChange={(e) => setEmployeeData({ ...employeeData, emp_qualification: e.target.value})}/>
            </div>

            <div style={{'display': 'flex', 'justifyContent': 'center', 'gap': "1rem" , 'marginBottom': '1rem'}}>
           
            <TextField 
            variant='outlined' 
            label='Age'   
            type="text" 
            value={employeeData.emp_age} 
            onChange={(e) => setEmployeeData({ ...employeeData, emp_age: e.target.value})}/>
           
            <TextField 
            variant='outlined' 
            label='Email'    
            type="text" 
            value={employeeData.emp_email} 
            onChange={(e) => setEmployeeData({ ...employeeData, emp_email: e.target.value})}/>
            </div>

            <div style={{'display': 'flex', 'justifyContent': 'center', 'gap': "1rem" , 'marginBottom': '1rem'}}>
            <TextField 
            variant='outlined' 
            label='Username'  
            type="text" 
            placeholder= {employeeData.emp_username}
            value={employeeData.emp_username} 
            onChange={(e) => setEmployeeData({ ...employeeData, emp_username: e.target.value})}/>
           
            <TextField 
            variant='outlined' 
            label='Password'   
            type="password" 
            value={employeeData.emp_password} 
            onChange={(e) => setEmployeeData({ ...employeeData, emp_password: e.target.value})}/>
            </div>
           
        </form> 
        <div className='user-profile-cont'>
            <button className="user-profile-btn" onClick={handleSaveChanges}>Save Changes</button>
            </div>
              </div>

          
           
        
        
     );
}
 
export default Employee;