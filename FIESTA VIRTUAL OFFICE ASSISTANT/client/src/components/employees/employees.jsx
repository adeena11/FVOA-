import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {useHistory} from 'react-router-dom';

import './styles.css';


//icon imports
import {AiFillDelete, AiFillEye} from 'react-icons/ai';
import {GrView} from 'react-icons/gr';
import { deleteEmployee, getEmployee } from "../../actions/employee.js";
import { useEffect } from "react";
const Employees = ({ }) => {
    const dispatch = useDispatch();
    const employees = useSelector((state) => state.employees);
    console.log(employees);
    const navigate = useHistory(); 
    const onProfile = (id) => {
       navigate.push(`/admin/employeedetails/${id}`);
    }
    const onDelete = (id) => {
      dispatch(deleteEmployee(id));
    }
    const onAddEmployee = () => {
      navigate.push(`/admin/addemployee`);
    }
    useEffect(()=> {
      dispatch(getEmployee());
    }, []);
    var count= 1;
    return ( 
        <div className="employee_list_container">
        <div style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', alignText: 'center' }}>
        <h2 style={{ color: 'black', marginLeft: '30%'}}> EMPLOYEES LIST</h2>
        <button className="btn_add_emp" onClick={onAddEmployee}> Add New Employee</button>
        </div>
        <div class="header_fixed">
        <table>
            <thead>
                <tr>
                    <th>S No.</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Delete</th>
                    <th>View</th>
                </tr>
            </thead>
            <tbody>
                
                {employees.map((employee) => ( 
             
                <tr key={employee._id} >  
                  <td > {count++} </td>
                 <td> {employee.emp_name} </td>
                 <td> {employee.emp_email}</td>
                 <td>  {employee.emp_phone}</td>
                <td
                 className="emp_btn" 
                      onClick={()=> onDelete(employee._id)}      
                > <AiFillDelete/> 
               </td>
               <td>                <button className="emp_profile_btn"
                      onClick={() => {
                          console.log(employee._id)
                          onProfile(employee._id);
                        }  
                      }
                > <AiFillEye/></button>
                </td>
               </tr>
                
       ))}
                
            </tbody>
        </table>
    </div>
        

        </div>
     );
}
 
export default Employees;