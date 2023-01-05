import mongoose from "mongoose";

const Schema = mongoose.Schema;

var noticeboardModel = new Schema({
    nb_name: String,
    nb_description: String,
    nb_createdDate: {
        type: Date,
        default: new Date(),
    } 
})

const Notice = mongoose.model('Notice', noticeboardModel);

export default Notice;