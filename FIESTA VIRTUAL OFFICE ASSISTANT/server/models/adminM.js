import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var adminSchema = new Schema({
    name: String, 
    email: String, 
    role: String,   
    username: String, 
    password: String

});

const Admin = mongoose.model('Admin', adminSchema);

export default Admin;