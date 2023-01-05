import React, { useState } from "react";
import './styles.css';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { createEmployee } from "../../actions/employee.js";
import { useHistory } from "react-router-dom";
import { TextField } from "@material-ui/core";
import { createManager } from "../../actions/manager";
import {createTrainee} from "../../actions/trainee";
import {createWriter} from "../../actions/writers";

const EmployeeCreation = () => {
    const [employeeData, setEmployeeData] = useState({ emp_name: '', emp_qualification: '', emp_age: '', emp_email: '', emp_phone: '',emp_role: '', emp_username: '', emp_password: '' });

    //getting data from reduxx
    const employees = useSelector((state) => state.employees);
    const navigate = useHistory();
    const dispatch = useDispatch();
    //dispatcing from data to backend through redux
    const handleSubmit = (e) => {
        console.log(employeeData);
        e.preventDefault();
        setEmployeeData(employeeData.emp_phone = "03339999999")
        dispatch(createEmployee(employeeData));
        if(document.getElementById("role_creation").value ==="manager"){
            setEmployeeData(employeeData.emp_role = "manager");
            dispatch(createManager(employeeData));
        }
        if(document.getElementById("role_creation").value === "trainee"){
            setEmployeeData(employeeData.emp_role = "trainee");
            dispatch(createTrainee(employeeData));
        }
        if(document.getElementById("role_creation").value === "writer"){
            setEmployeeData(employeeData.emp_role = "writer");
            dispatch(createWriter(employeeData));
        }
      
        navigate.push(`/admin/employees`);
        setEmployeeData({
            emp_name: '',
            emp_qualification: '', emp_age: '', emp_email: '', emp_phone: '', emp_username: '', emp_password: ''
        })
    }

    return (

        <div className="addEmployee">
            <h2 style={{ color: 'black', marginLeft: '40%'}}> CREATE EMPLOYEE</h2>
  
            <div className='form_container2'>

                <form action="post" onSubmit={handleSubmit}>
                <label className="role_label_creation">
                        Role:
                        <select id="role_creation">
                            
                            <option value="trainee">Trainee</option>
                            <option value="writer">Writer</option>
                            <option value="manager">Manager</option>
                        </select>
                    </label>
                <div style={{'display': 'flex', 'justifyContent': 'center', 'gap': "1rem" , 'marginBottom': '1rem'}}>
           
           <TextField 
           className="input_creation"
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
                    <div style={{ marginTop: '5%', alignItems: 'center', textAlign: 'center'}}>
                        <button className="btn_sub" onClick={handleSubmit}>Add Employee</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default EmployeeCreation;