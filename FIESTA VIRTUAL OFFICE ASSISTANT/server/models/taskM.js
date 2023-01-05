import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var taskSchema = new Schema({
    filedata: String,
    title: String,
    description: String,
    wordCount: String,
    writerId: {
        type: mongoose.Types.ObjectId,
        ref: 'WriterModel'
    },
    dueDate: Date

});

const Task = mongoose.model('Task', taskSchema);

export default Task;