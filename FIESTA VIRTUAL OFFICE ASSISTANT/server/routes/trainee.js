import express from 'express';
import { addTrainee } from '../controller/adminC.js';
import { createReminder, getavideo, getReminder, getVideos } from '../controller/traineeC.js';
import { login } from '../controller/traineeC.js';

const router = express.Router();

router.post('/login', login);
router.post('/addtrainee', addTrainee);
router.get('/trainingvideos', getVideos);
router.get('/trainingvideos/:id', getavideo);
router.post('/calender/addreminder', createReminder);
router.get('/calender', getReminder);

export default router;

