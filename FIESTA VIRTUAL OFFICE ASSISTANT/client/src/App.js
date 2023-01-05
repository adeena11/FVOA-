import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Employees from './components/employees/employees.jsx';
import EmployeeCreation from './components/employeeCreation/EmployeeCreation.jsx';
import { getEmployee } from './actions/employee.js';
import './App.css';
// import for routes


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Employee from './components/employeeDetails/employee.jsx';
import LoginScreen from './screens/loginscreen.jsx';
import AboutusScreen from './screens/aboutus.jsx';
import AdminDashboard from './screens/adminDashboard.jsx';
import AddEmployeeAdmin from './screens/admin_addEmployee.jsx';
import EmployeesAdminSide from './screens/employees_adminside.jsx';
import NoticeboardAdmin from './screens/noticeboard_admin.jsx';
import AddNoticeAdmin from './screens/addNotice_screen.jsx';
import ManagerDashboard from './screens/managerDashboard.jsx';
import TraineeDashboard from './screens/traineeDashboard.jsx';
import WriterDashboard from './screens/writerDashboard.jsx';
import TraineeVideosScreen from './screens/trainee_trainingvideos.jsx';
import TraineeWatchVideosScreen from './screens/TraineeWatchVideoScreen.jsx';
import TraineeNoticeboardScreen from './screens/trainee_noticeboard.jsx';
import EmployeeDetailScreen from './screens/employeeDetailsScreen.jsx';
import VideoChat from './components/Videochat/Videochat.jsx';
import { ContextProvider } from './components/Videochat/SocketContext.js';
import TraineeVideocall from './screens/trainee_videocall.jsx';
import TraineeProfile from './screens/trainee_profile.jsx';
import Ganttchart from './components/GanttChart/Ganttchart.jsx';
import Calendar from './components/Calender/Calender.jsx';
import Calendarschedule from './components/Calender/Calender.jsx';
import AdminCalendar from './screens/admin_calendar.jsx';
import UploadTask from './components/UploadTask/UploadTask.jsx';
import AssignTaskMain from './components/AssignTask/AssignTaskMain.jsx';
import AssignTask from './screens/assignTasks.jsx';
import DisplayWriter from './components/AssignTask/DisplayWriters.jsx';
import DisplayWriters from './components/AssignTask/DisplayWriters.jsx';
import ManagerAssignTaskWriters from './screens/ManagerAssignTaskWriters.jsx';
import ManagerUploadTask from './screens/ManagerUploadTask.jsx';
import EvaluateWriter from './components/AssignTask/EvaluateWriter.jsx';
import ManagerRateWriter from './screens/ManagerRateWriter.jsx';
import ManagerEvaluation from './screens/ManagerEvaluationMain.jsx';
import ManagerViewEvaluation from './screens/ManagerViewEvaluation.jsx';
import TraineeQuizScreen from './screens/TraineeQuizesscreen.jsx';
import WriterTaskScreen from './screens/WriterTaskScreen.jsx';
import IndividualTask from './components/WriterTaskComponents/IndividualTask.jsx';
import Chat from './screens/Chat/Chat.jsx';
import WriterTaskScreenIndividual from './screens/WriterTaskScreenIndividual.jsx';
import ProjectTemplate from './components/ProjectTemplate/ProjectTemplate.tsx';
import ManagerProject from './screens/ManagerProject.jsx';


const App = () => {


    return (
        <div style={{ minHeight: '100%' }}>
            <Router>


                <Switch>
                    <Route exact path='/' render={() => { return (<LoginScreen />) }} />
                    <Route exact path='/aboutus' render={() => { return (<AboutusScreen />) }} />
                    <Route exact path='/admin/dashboard' render={() => { return (<AdminDashboard />) }} />
                    <Route exact path='/admin/employeedetails/:id' render={() => { return (<EmployeeDetailScreen />) }} />
                    <Route exact path='/admin/employees' render={() => { return (<EmployeesAdminSide />) }} />
                    <Route exact path='/admin/addemployee' render={() => { return (<AddEmployeeAdmin />) }} />
                    <Route exact path='/admin/noticeboard' render={() => { return (<NoticeboardAdmin />) }} />
                    <Route exact path ='/admin/calender'  render={() => { return (<AdminCalendar/>) }}/>
                    <Route exact path='/trainee/noticeboard' render={() => { return (<TraineeNoticeboardScreen />) }} />
                    <Route exact path='/admin/addnotice' render={() => { return (<AddNoticeAdmin />) }} />
                    <Route exact path='/manager/dashboard' render={() => { return (<ManagerDashboard />) }} />
                    <Route exact path='/trainee/dashboard' render={() => { return (<TraineeDashboard />) }} />
                    <Route exact path='/writer/dashboard' render={() => { return (<WriterDashboard />) }} />
                    <Route exact path='/trainee/profile' render={() => { return (<TraineeProfile />) }} />
                    {/* training video routes  */}
                    <Route exact path='/trainee/trainingvideos' render={() => { return (<TraineeVideosScreen />) }} />
                    <Route exact path='/trainee/trainingvideos/:id' render={() => { return (<TraineeWatchVideosScreen />) }} />
                    {/* Video call  */}
                    <Route exact path='/trainee/videocall' render={() => { return (<TraineeVideocall />) }} />
                    <Route exact path='/ganttchart' render={() => { return (<Ganttchart />) }} />
                    <Route exact path='/calender' render={() => { return (<Calendarschedule />) }} />
                    {/* UploadTask  */}
                    {/* need to correct later*/}
                    <Route exact path='/manager/tasks' render={() => { return (<AssignTask/>) }} />
                    <Route exact path='/manager/assigntask/writers' render={() => { return (<ManagerAssignTaskWriters/>) }} />
                    <Route exact path='/manager/assigntask/:id' render={() => { return (<ManagerUploadTask/>) }} />
                   {/* Star Rating */}
                   <Route exact path='/manager/employeeperformance' render={() => { return (<ManagerEvaluation/>) }} />
                   <Route exact path='/manager/employeeperformance/:id/addreview' render={() => { return (<ManagerRateWriter/>) }} />
                   <Route exact path='/manager/employeeperformance/:id' render={() => { return (<ManagerViewEvaluation/>) }} />
                   {/* traine quiz */}
                   <Route exact path='/trainee/quizes' render={() => { return (<TraineeQuizScreen/>) }} />
                  {/* task */}
                  <Route exact path='/writer/tasks' render={() => { return (<WriterTaskScreen/>) }} />
                  <Route exact path='/writer/tasks/:id' render={() => { return (<WriterTaskScreenIndividual/>) }} />
                 {/* Projectss */}
                    <Route exact path='/manager/project' render={() => { return (<ManagerProject/>) }} />

                  <Route exact path='/manager/checking' render={() => { return (<UploadTask/>) }} />
                  <Route exact path='/chat' render={() => { return (<Chat/>) }} />
                  

                </Switch>

            </Router>
        </div>
    );
}

export default App;