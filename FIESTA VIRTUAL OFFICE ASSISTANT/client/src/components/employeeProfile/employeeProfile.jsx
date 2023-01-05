import React, { Profiler } from 'react';
import {Form, Button} from 'react-bootstrap';
import './style.css'
import { TextField } from '@material-ui/core';
import { useState } from 'react';
const EmployeeProfile = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
  return (
    <div className='user-profile-container'>

<span className='user-profile-span'>USER PROFILE</span>
       <form action="post" >
            <div style={{'display': 'flex', 'justifyContent': 'center', 'gap': "1rem" , 'marginBottom': '1rem'}}>
           
            <TextField 
            variant='outlined' 
            label='Full Name'   
            type="text" 
            value={user.result.emp_name} 
            disabled
            />
           
           
            <TextField 
            variant='outlined' 
            label='Qualification'    
            type="text" 
            value={user.result.emp_qualification} 
            disabled/>
            </div>

            <div style={{'display': 'flex', 'justifyContent': 'center', 'gap': "1rem" , 'marginBottom': '1rem'}}>
           
            <TextField 
            variant='outlined' 
            label='Age'   
            type="text" 
            value={user.result.emp_age} 
           disabled/>
           
            <TextField 
            variant='outlined' 
            label='Email'    
            type="text" 
            value={user.result.emp_email} 
            disabled/>
            </div>

            <div style={{'display': 'flex', 'justifyContent': 'center', 'gap': "1rem" , 'marginBottom': '1rem'}}>
            <TextField 
            variant='outlined' 
            label='Username'  
            type="text" 
           
            value={user.result.emp_username} 
            disabled/>
           
            <TextField 
            variant='outlined' 
            label='Password'   
            type="password" 
            value={user.result.emp_phone} 
            disabled/>
            </div>
           
        </form> 
       
    
    </div>
  )
}

export default EmployeeProfile
