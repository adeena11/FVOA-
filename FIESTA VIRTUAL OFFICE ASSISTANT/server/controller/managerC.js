import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import Evaluation from '../models/evaluation.js';
import ManagerModel from "../models/managerM.js";
import Task from '../models/taskM.js';
import TrainingVideoM from '../models/trainingVideoM.js';
import WriterModel from '../models/writerM.js';
// import multer from 'multer';

// var storage = multer.diskStorage({
//     destination: function(req, file, cb){
//         cb(null, '../taskfiles/')
//     },
//     filename: function(req, file, cb){
//         cb(null, Date.now() + file.originalname)
//     }
// })

// var storage = multer({storage: storage})

// -----------------------------------------------------------
// import path from 'path';
// import {fileURLToPath} from 'url';
// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);

export const login = async (req, res) => {
    const { username, password } = req.body;
    
    try {
       
        const existingUser = await ManagerModel.findOne({ username })
        console.log(existingUser)
 
        if (!existingUser) {
            return res.status(404).json({ message: "User doesn't exists" });}
         
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.emp_password)
       
        if (!isPasswordCorrect) return res.status(404).json({ message: "Invalid Credential" });
        

        const token = jwt.sign({ username: existingUser.username, id: existingUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });

    } catch {
        res.status(500).json({ message: 'Something went wrong. ' });
    }

}

//add a training video
export const addTrainingVideo = async (req, res) => {
    const trainingvideo = req.body;
 
    const newTrainingVideo = new TrainingVideoM(trainingvideo);
 
    try{
         await newTrainingVideo.save();
         res.status(200).json(newTrainingVideo);
         console.log('Training Video Added');
    } catch (error){
         res.status(404).json({ message: error.message});
    }
 }
 //list of training videos
 
 export const getVideos = async (req, res) => {
    try{
        const videos = await TrainingVideoM.find();
        console.log(videos);
        res.status(200).json(videos);
    } catch (error){
        res.status(404).json({message: error.message})
    }
} 
//delete video
export const deleteVideo = async (req, res) => {
    const { id } = req.params;
    if(!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No user with this id");

    await TrainingVideoM.findByIdAndRemove(id);

    res.json({message: "User deleted successfully"});

}
//get a single video
export const getavideo= async(req, res)=>{
    const {id}= req.params;
    console.log(id)

    try{

        const data= await TrainingVideoM.findById(id);

        res.status(200).json(data)
    }catch(error){

        res.status(404).json({message: error.message})

    }

}
export const uploadTask = (req, res) => {
    console.log(req.files);
 if(req.files === null) {
    return res.status(400).json({ msg: 'No file uploaded'});
 }

 console.log(req.files);
 const file = req.files['[object File]'];
 console.log(file);
 file.mv(`.././client/public/uploads/${file.name}`), err=> {
    if(err){
        console.error(err);
        return res.status(500).send(err);
    }
    res.json({ fileName: file.name, filePath: `uploads/${file.name}}`});
    res.status(200);
 }
}
//get writers
export const getWriters = async (req, res) => {
    try{
        const writers = await WriterModel.find();
        console.log(writers);
        res.status(200).json(writers);
    } catch (error){
        res.status(404).json({message: error.message})
    }
} 
// add task
export const assignTask = async (req, res) => {
    const task = req.body;
 
    const newTask = new Task(task);
 
    try{
         await newTask.save();
         res.status(200).json(newTask);
         console.log('Task Added');
    } catch (error){
         res.status(404).json({ message: error.message});
    }
 }
 export const getTask = async (req, res) => {
    try{
        const task = await Task.find();
        console.log(task);
        res.status(200).json(task);
    } catch (error){
        res.status(404).json({message: error.message})
    }
} 
// add evaluation
export const addEvaluation = async (req, res) => {
    const evaluation = req.body;
 
    const newEvaluation = new Evaluation(evaluation);
 
    try{
         await newEvaluation.save();
         res.status(200).json(newEvaluation);
         console.log('Evaluation Added');
    } catch (error){
         res.status(404).json({ message: error.message});
    }
 }
 // view evaluation
 export const getEvaluation = async (req, res) => {
    try{
        const evaluation = await Evaluation.find();
        console.log(evaluation);
        res.status(200).json(evaluation);
    } catch (error){
        res.status(404).json({message: error.message})
    }
 }
//getWriter 
export const getaWriter= async(req, res)=>{
    const {id}= req.params;
    console.log(id)

    try{

        const data= await WriterModel.findById(id);

        res.status(200).json(data)
    }catch(error){

        res.status(404).json({message: error.message})

    }

}