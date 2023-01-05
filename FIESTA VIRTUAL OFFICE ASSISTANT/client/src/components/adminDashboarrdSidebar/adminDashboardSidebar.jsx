import React from "react";
import './styles.css';

import {GoProject} from 'react-icons/go';
import {MdOutlinePayments} from 'react-icons/md';
import {HiClipboardList} from 'react-icons/hi';
import {FaUserAlt} from 'react-icons/fa';
import {BsFillCalendar2Fill} from 'react-icons/bs';
import {Link} from 'react-router-dom';

const AdminDashboardSidebar = () => {
    return ( 
        <>
        <div className="sidebar_container">
                   <Link to={'/admin/employees'}>
                   <div className="sidebar_element">
                          <FaUserAlt/>  
                          <div className="sidebar_text"> 
                          <p>Employees</p>
                          </div>
                          </div>
                    </Link> 
                    <Link to={'/admin/projects'}>                 
                         <div className="sidebar_element">
                          <GoProject/> 
                          
                          <div className="sidebar_text"> 
                          <p>Projects</p>
                          </div>
                          </div> 
                          </Link>
                 
 
                    <Link to={'/admin/noticeboard'}>
                          <div className="sidebar_element">
                          <HiClipboardList/> 
                       
                          <div className="sidebar_text"> 
                          <p>Notice Board</p>
                          </div></div> 
                    </Link >
                    <Link to={'/admin/calender'}>      
                          <div className="sidebar_element">
                          <BsFillCalendar2Fill/> 
                       
                          <div className="sidebar_text"> 
                          <p>Calender</p>
                          </div></div> 
                  </Link>
 </div>
        </>
     );
}
 
export default AdminDashboardSidebar;