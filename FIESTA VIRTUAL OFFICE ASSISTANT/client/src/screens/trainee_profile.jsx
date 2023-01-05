import React from 'react'
import EmployeeProfile from '../components/employeeProfile/employeeProfile';
import Topbar from '../components/Topbar/topbar';
import TraineeSidebar from '../components/TraineeSidebar/traineeSidebar';

function TraineeProfile() {
  return(
    <>
    <Topbar />
    <div style={{display: 'flex', background: 'white', height: '88.5vh'}}>
    <TraineeSidebar />
   <EmployeeProfile/>
    </div>
</>
  )
}

export default TraineeProfile