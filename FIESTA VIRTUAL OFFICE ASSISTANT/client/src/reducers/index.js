import { combineReducers } from "redux";

import employees from './employee.js';
import noticeboard from "./noticeboard.js";
import authReducer from "./auth.js";
import trainingVideos from "./trainingvideos.js";
import calender from "./calender.js";
import writers from "./writers.js";
import tasks from "./tasks.js";
import evaluation from "./evaluation.js";
import manager from "./manager.js";
import trainee from "./trainee.js";
import chatReducer from "./ChatUserReducer.js";

export default combineReducers({employees: employees,
     noticeboard: noticeboard, 
     trainingVideos: trainingVideos, 
     writers: writers, 
     manager: manager,
     trainee: trainee,
     tasks: tasks,
     calender: calender,
     evaluation: evaluation,  
     chatReducer,
     authReducer});
