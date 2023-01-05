import mongoose from 'mongoose';

const Schema = mongoose.Schema;

var evaluationSchema = new Schema({
    timeRating: Number,
    plagRating: Number,
    writingSkillRating: Number,
    csRating: Number,
    avgRating: Number,
    review: String,
    writerId: {
        type: mongoose.Types.ObjectId,
        ref: 'WriterModel'
    }, 
    rating_Date: {
        type: Date,
        default: new Date(),
    },

});

const Evaluation = mongoose.model('Evaluation', evaluationSchema);

export default Evaluation;