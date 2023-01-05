import express from 'express';
import { getAdmin, 
    createEmployee,
    getEmployee, updateEmployee, deleteEmployee, createNotice, getNotices, deleteNotice, addAdmin, loginAdmin, getProjects, createProject, 
    updateProject, deleteProject, addProjectManager} from '../controller/adminC.js';

const router = express.Router();

router.get('/', getAdmin);
router.post('/login', loginAdmin);
router.post('/addadmin', addAdmin);
router.post('/addemployee', createEmployee);
router.get('/employees', getEmployee);
router.patch('/employeedetails/:id', updateEmployee);
router.delete('/deleteemployee/:id', deleteEmployee);
router.post('/addnotice', createNotice);
router.get('/noticeboard', getNotices);
router.delete('/deletenotice/:id', deleteNotice);
//router.get('/employeedetails/:id', getEmployeeDetails);

// project routes
router.get('/projects', getProjects);
router.post('/addproject', createProject);
router.patch('/projectdetails', updateProject);
router.put('/addproject/:pid/:mid', addProjectManager);
router.delete('/deleteproject', deleteProject);

export default router;