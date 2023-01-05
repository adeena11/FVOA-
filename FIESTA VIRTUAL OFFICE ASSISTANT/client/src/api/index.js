import axios from 'axios';

const url = 'http://localhost:5000/admin/employees';
const urlAddEmployee = 'http://localhost:5000/admin/addemployee';
const urlEditEmployee = 'http://localhost:5000/admin/employee/:id';

export const fetchEmployees = () => axios.get(url); 
export const createEmployee = (newEmployee) => axios.post(urlAddEmployee, newEmployee); 
export const updateEmployee = (id, updateEmployee) => axios.patch(`/admin/employeedetails/${id}`, updateEmployee);
export const deleteEmployee = (id) => axios.delete(`/admin/deleteemployee/${id}`);
//noticeboard
export const createNotice = (newNotice) => axios.post(`/admin/addnotice`, newNotice );
export const fetchNotices = () => axios.get('/admin/noticeboard');
export const deleteNotice = (id) => axios.delete(`/admin/deletenotice/${id}`);
//dashboards
export const adminLogin = (credentials) => axios.post('/admin/login', credentials );
export const managerLogin = (credentials) => axios.post('/manager/login', credentials );
export const writerLogin = (credentials) => axios.post('http://localhost:5000/writer/login', credentials );
export const traineeLogin = (credentials) => axios.post('/trainee/login', credentials );
//trainingvideos
//for trainee
export const fetchTrainingVideos = () => axios.get('/trainee/trainingvideos');
export const fetchOneVideo = (id) => axios.get(`/trainee/trainingvideos/${id}`);
// calender
export const addReminder = (newReminder) => axios.post('/trainee/calender/addreminder', newReminder);
export const fetchReminders = () => axios.get('/trainee/calender');
//manager 
//get writers for task allocation
export const fetchWriters = () => axios.get('http://localhost:5000/manager/getwriters');
export const assignTask = (newTask) => axios.post('http://localhost:5000/manager/assigntaskwriter', newTask);
export const getTask = () => axios.get('http://localhost:5000/writer/tasks');

//evaluations 
export const fetchaWriter = (id) => axios.get(`http://localhost:5000/manager/getwriter/${id}`);
export const fetchEvaluationResult = () => axios.get('http://localhost:5000/manager/evaluationresult');
export const addEvaluation = (newEvaluation) => axios.post('http://localhost:5000/manager/addevaluation', newEvaluation);

//export const fetchEmployeeDetails= (id)=> axios.get(`/admin/employeedetails/${id}`);
export const addWriter = (newWriter) => axios.post('http://localhost:5000/writer/addwriter', newWriter);
export const addTrainee = (newTrainee) => axios.post('http://localhost:5000/trainee/addtrainee', newTrainee);
export const addManager = (newManager) => axios.post('http://localhost:5000/manager/addmanager', newManager);

//chats


export const createChat = (data) => API.post('http://localhost:5000/chat/', data);

export const userChats = (id) => API.get(`http://localhost:5000/chat/${id}`);

export const findChat = (firstId, secondId) => API.get(`http://localhost:5000/chat/find/${firstId}/${secondId}`);

//message
export const getMessages = (id) => API.get(`http://localhost:5000/message/${id}`);

export const addMessage = (data) => API.post('http://localhost:5000/message/', data);