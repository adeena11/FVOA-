import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import mongoose from "mongoose";
import WriterModel from '../models/writerM.js';
import Task from '../models/taskM.js';
import path  from 'path';
export const login = async (req, res) => {
    const { username, password } = req.body;

    try {
        const existingUser = await WriterModel.findOne({ username })
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
export const getTask = async (req, res) => {
    try{
        const task = await Task.find();
        console.log(task);
        res.status(200).json(task);
    } catch (error){
        res.status(404).json({message: error.message})
    }
} 


export const downloadTask = async(req, res)=>{
    const {id}= req.params;
    console.log(id)

    try{

        const data= await Task.findById(id);
        // const filepath = path.resolve();
        // console.log(filepath)
        res.download("./../client/public/uploads/"+data.filedata);
        console.log("../../client/public/uploads/"+data.filedata);
        res.status(200);
    }catch(error){

        res.status(404).json({message: error.message})

    }

}
