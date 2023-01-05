import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var traineeSchema = new Schema({
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

const TraineeModel = mongoose.model('TraineeModel', traineeSchema);

export default TraineeModel;