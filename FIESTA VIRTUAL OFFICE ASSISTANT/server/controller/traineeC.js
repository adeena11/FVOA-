import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import Reminder from '../models/reminderM.js';
import TraineeModel from '../models/traineeM.js';
import TrainingVideoM from '../models/trainingVideoM.js';

export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await TraineeModel.findOne({ username })
        console.log(existingUser)
 
        if (!existingUser) return res.status(404).json({ message: "User doesn't exists" });
        
        const isPasswordCorrect = await bcrypt.compare(password, existingUser.emp_password)

        if (!isPasswordCorrect) return res.status(400).json({ message: "Invalid Credential" });
        

        const token = jwt.sign({ username: existingUser.emp_username, id: existingUser._id }, 'test', { expiresIn: "1h" });

        res.status(200).json({ result: existingUser, token });

    } catch {
        res.status(500).json({ message: 'Something went wrong. ' });
    }

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
// add a reminder
export const createReminder = async (req, res) => {
    const reminder = req.body;
 
    const newReminder = new Reminder(reminder);
 
    try{
         await newReminder.save();
         res.status(201).json(newReminder);
         console.log('Reminder Added');
    } catch (error){
         res.status(409).json({ message: error.message});
    }
 }

// get reminders
// export const getReminder = async (req, res) => {
//     const {id}= req.params;
  
//     try{
//         const remind = await Reminder.findById(id);
//         console.log(remind);
//         res.status(200).json(remind);
//     } catch (error){
//         res.status(404).json({message: error.message})
//     }
// } 
export const getReminder = async (req, res) => {
    try{
        const reminder = await Reminder.find();
        console.log(reminder);
        res.status(200).json(reminder);
    } catch (error){
        res.status(404).json({message: error.message})
    }
} 