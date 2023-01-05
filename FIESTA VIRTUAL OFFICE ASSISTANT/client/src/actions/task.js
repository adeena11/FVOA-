import * as api from '../api';


export const createTask = (task) => async (dispatch) => {
    try{
        const {data} = await api.assignTask(task);
        dispatch ({type: 'CREATE_TASK', payload: data});
    } catch (error){
        console.log(error.message);
    } 
}

export const fetchTask = () => async (dispatch) => {
    console.log('going in action')
    try {
        const {data} = await api.getTask();
        dispatch({ type: 'FETCH_ALL', payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
    
  
}
