import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var managerSchema = new Schema({
    
    emp_name: String,
    emp_qualification: String,
    emp_age: Number,
    emp_email: String,
    emp_phone: String,
    emp_username: String,
    emp_password: String,
    emp_role: String,
    emp_manages: {
        type: [{
            tid: {
                type: mongoose.Types.ObjectId,
                ref: 'TraineeModel',
            },
            wid: {
                type: mongoose.Types.ObjectId,
                ref: 'WriterModel'
            } 

        }]
    }

});

const ManagerModel = mongoose.model('ManagerModel', managerSchema);

export default ManagerModel;