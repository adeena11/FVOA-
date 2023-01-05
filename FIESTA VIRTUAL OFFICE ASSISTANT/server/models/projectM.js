import mongoose, { Mongoose } from 'mongoose';

const Schema = mongoose.Schema;

var ProjectSchema = new Schema({
    project_name: String, 
    project_type: String, 
    project_budget: String,   
    project_completion: { 
        type: Number,
        default: 0
    }, 
    project_creationDate: {
        type: Date,
        default: new Date(),
    },
    project_manager: {
        type: mongoose.Types.ObjectId,
        ref: 'ManagerModel',
        default: null
    },
    project_team: {
        type: [{
            wid:{
                type: mongoose.Types.ObjectId,
                ref: 'WriterModel'
            }
        }]
    }

});

const Project = mongoose.model('ProjectModel', ProjectSchema);

export default Project;