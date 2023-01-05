import mongoose from "mongoose";
import Employee from "../models/employees.js";
import Notice from "../models/noticeboard.js";
import ManagerModel from "../models/managerM.js";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import Admin from "../models/adminM.js";
import WriterModel from "../models/writerM.js";
import TraineeModel from "../models/traineeM.js";
import Project from "../models/projectM.js";

export const getAdmin = (req, res) => {
    res.send('This is admin!');
} 

export const createEmployee = async (req, res) => {
   const employee = req.body;

   const newEmployee = new Employee(employee);

   try{
        await newEmployee.save();
        res.status(201).json(newEmployee);
        console.log('Employee added');
   } catch (error){
        res.status(400).json({ message: error.message});
   }
}
export const getEmployee = async (req, res) => {
    try{
        const employees = await Employee.find();
        console.log(employees);
        res.status(200).json(employees);
    } catch (error){
        res.status(404).json({message: error.message})
    }
} 
export const updateEmployee = async (req, res) => {
       
        const { id } = req.params;
      
        const emp = req.body;
        if(!mongoose.Types.ObjectId.isValid(id))  
            return res.status(404).send('No employee with that id');
        const updateEmployee = await Employee.findByIdAndUpdate(id, emp, {new: true} );
        
         res.json(updateEmployee);
         
}
export const getEmployeeDetails= async(req, res)=>{
    const {id}= req.params;
    console.log(id)

    try{

        const data= await Employee.findById(id);

        res.status(200).json(data)
    }catch(error){

        res.status(404).json({message: error.message})

    }

}

export const deleteEmployee = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No user with this id");

    await Employee.findByIdAndRemove(id);

    res.json({message: "User deleted successfully"});

}

//noticeboard
export const createNotice = async (req, res) => {
    const notice = req.body;
 
    const newNotice = new Notice(notice);
 
    try{
         await newNotice.save();
         res.status(201).json(newNotice);
         console.log('Notice added');
    } catch (error){
         res.status(409).json({ message: error.message});
    }
 }

 export const getNotices = async (req, res) => {
    try{
        const notices = await Notice.find();
        console.log(notices);
        res.status(200).json(notices);
    } catch (error){
        res.status(404).json({message: error.message})
    }
} 

export const deleteNotice = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No user with this id");

    await Notice.findByIdAndRemove(id);

    res.json({message: "User deleted successfully"});

}
//projects
export const createProject = async (req, res) => {
    const project = req.body;
 
    const newProject = new Project(project);
 
    try{
         await newProject.save();
         res.status(201).json(newProject);
         console.log('Project Added');
    } catch (error){
         res.status(409).json({ message: error.message});
    }
 }
 export const getProjects =  (req, res) => {
    console.log("in getproject");
    Project.find({}).populate('project_manager').populate('project_team.wid').exec(function(error, results) {
                if (error) {
                    return next(error);
                }
                // Respond with valid data
                res.json(results);
            });
} 

export const updateProject= async (req, res) => {
       
        const { id } = req.params;
      
        const project = req.body;
        if(!mongoose.Types.ObjectId.isValid(id))  
            return res.status(404).send('No project with that id');
        const updateProject = await Project.findByIdAndUpdate(id, project, {new: true} );
        
         res.json(updateProject);
         
}
export const addProjectManager =  (req, res) => {
     Project.findOneAndUpdate({ _id: req.params.pid }, { project_manager: req.params.mid }, function(error, results) {
        if (error) {
            return next(error);
        }
        // Respond with valid data
        res.json(results);
    });
}


export const getProjectDetails= async(req, res)=>{
    const {id}= req.params;
    console.log(id)

    try{

        const data= await Project.findById(id);

        res.status(200).json(data)
    }catch(error){

        res.status(404).json({message: error.message})

    }

}

export const deleteProject = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No user with this id");

    await Project.findByIdAndRemove(id);

    res.json({message: "User deleted successfully"});

}
 // authentication
export const addManager = async (req, res) => {
    const { emp_name, emp_qualification, emp_age, emp_email, emp_phone, emp_role, emp_username, emp_password} = req.body;

    try {
        console.log(req.body);
        const existingUser = await ManagerModel.findOne({ emp_username });

        if (existingUser) return res.status(404).json({ message: "User already exist" });

        const hashedPassword = await bcrypt.hash(emp_password, 12);

        const result = await ManagerModel.create({ emp_name, emp_qualification, emp_age, emp_email, emp_phone, emp_role, emp_username, emp_password: hashedPassword })

        const token = jwt.sign({ emp_email: result.emp_email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong. ' });
    }
}
export const addWriter = async (req, res) => {
    const { emp_name, emp_qualification, emp_age, emp_email, emp_phone, emp_role, emp_username, emp_password} = req.body;

    try {
        console.log(req.body);
        const existingUser = await WriterModel.findOne({ emp_username });

        if (existingUser) return res.status(404).json({ message: "User already exist" });

        const hashedPassword = await bcrypt.hash(emp_password, 12);

        const result = await WriterModel.create({ emp_name, emp_qualification, emp_age, emp_email, emp_phone, emp_role, emp_username, emp_password: hashedPassword })

        const token = jwt.sign({ emp_email: result.emp_email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong. ' });
    }
}
export const addTrainee = async (req, res) => {
    const { emp_name, emp_qualification, emp_age, emp_email, emp_phone, emp_role, emp_username, emp_password} = req.body;

    try {
        console.log(req.body);
        const existingUser = await TraineeModel.findOne({ emp_username });

        if (existingUser) return res.status(404).json({ message: "User already exist" });

        const hashedPassword = await bcrypt.hash(emp_password, 12);

        const result = await TraineeModel.create({ emp_name, emp_qualification, emp_age, emp_email, emp_phone, emp_role, emp_username, emp_password: hashedPassword })

        const token = jwt.sign({ emp_email: result.emp_email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong. ' });
    }
}


export const addAdmin = async (req, res) => {
    const { name, email, role, username, password} = req.body;

    try {
        console.log(req.body);
        const existingUser = await Admin.findOne({ username });

        if (existingUser) return res.status(404).json({ message: "User already exist" });

        const hashedPassword = await bcrypt.hash(password, 12);

        const result = await Admin.create({ name, email, role: 'Admin', username, password: hashedPassword })

        const token = jwt.sign({ email: result.email, id: result._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result, token });

    } catch (error) {
        console.log(error)
        res.status(500).json({ message: 'Something went wrong. ' });
    }
}


export const loginAdmin = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await Admin.findOne({ username })
        console.log(existingUser)

        if (!existingUser) return res.status(404).json({ message: "User doesn't exists" });

        const isPasswordCorrect =  bcrypt.compare(password, existingUser.password)

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credential" });

        const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });

    } catch {
        res.status(500).json({ message: 'Something went wrong. ' });
    }

}