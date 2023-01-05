import mongoose from "mongoose";

const Schema = mongoose.Schema;

var trainingVideo = new Schema({
    video_name: String,
    video_description: String,
    video_link: String
})

const TrainingVideoM = mongoose.model('TrainingVideoM', trainingVideo);

export default TrainingVideoM;