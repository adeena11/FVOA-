import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import cors from 'cors';
import fileUpload from 'express-fileupload';



import ChatRoute from './routes/ChatRoute.js';
import MessageRoute from './routes/MessageRoute.js';


import managerRoutes from './routes/manager.js';
import adminRoutes from './routes/admin.js';
import writerRoutes from './routes/writer.js';
import traineeRoutes from './routes/trainee.js';

const app = express();

app.use(bodyParser.json({limit: "30mb", extended:true }));
app.use(bodyParser.urlencoded({limit: "30mb", extended:true }));
app.use(cors());
app.use(fileUpload());

app.use('/manager', managerRoutes);
app.use('/admin', adminRoutes);
app.use('/trainee', traineeRoutes);
app.use('/writer', writerRoutes);
app.use('/chat', ChatRoute);
app.use('/message', MessageRoute);

const CONNECTION_URL = 'mongodb+srv://adeenamasood10:adeena11@cluster0.0buyqkl.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true} )
.then(() => app.listen(PORT, () => console.log('Server running on port: ' + PORT)))
.catch((error) => console.log(error.message));
