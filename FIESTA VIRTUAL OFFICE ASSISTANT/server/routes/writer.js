import express from 'express';
import { addWriter } from '../controller/adminC.js';

import { downloadTask, getTask, login } from '../controller/writerC.js';

const router = express.Router();

router.post('/login', login);
router.post('/addwriter', addWriter);
router.get('/tasks', getTask);
router.get('/task/:id/download', downloadTask)

export default router;