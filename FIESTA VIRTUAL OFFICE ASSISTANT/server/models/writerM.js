import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var writerSchema = new Schema({
    emp_id: String,
    emp_name: String,
    emp_qualification: String,
    emp_age: Number,
    emp_email: String,
    emp_phone: String,
    emp_username: String,
    emp_password: String,
    emp_role: String,
    emp_manager: {
        type: mongoose.Types.ObjectId,
        ref: 'ManagerModel',
        default: null
    }

});

const WriterModel = mongoose.model('WriterModel', writerSchema);

export default WriterModel;