import express from 'express';
import { addManager} from '../controller/adminC.js';
import { addEvaluation, addTrainingVideo, assignTask, deleteVideo, getavideo, getaWriter, getEvaluation, getVideos, getWriters, login, uploadTask } from '../controller/managerC.js';
const router = express.Router();

router.get('/', (req, res) => {
       res.send('This is manager!');
});
 router.post('/addmanager', addManager);
 router.post('/login', login);
 router.post('/addvideo', addTrainingVideo);
 router.get('/trainingvideos', getVideos);
 router.delete('/deletevideo', deleteVideo);
 router.get('/trainingvideos/:id', getavideo );
 router.post('/uploadtask', uploadTask);
 router.get('/getwriters', getWriters);
 router.get('/getwriter/:id', getaWriter);
 router.post('/assigntaskwriter', assignTask);
 router.post('/addevaluation', addEvaluation);
 router.get('/evaluationresult', getEvaluation);
export default router;