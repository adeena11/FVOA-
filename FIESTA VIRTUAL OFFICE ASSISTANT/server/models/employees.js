import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var employeeSchema = new Schema({
    emp_id: String,
    emp_name: String,
    emp_qualification: String,
    emp_age: Number,
    emp_email: String,
    emp_phone: String,
    emp_username: String,
    emp_password: String,
    emp_manager: {
        type: mongoose.Types.ObjectId,
        ref: 'Employee',
        default: null
    },
    emp_manages: {
        type: [{
            eid: {
                type: mongoose.Types.ObjectId,
                ref: 'Employee',
            }
        }]
    }

});

const Employee = mongoose.model('Employee', employeeSchema);

export default Employee;