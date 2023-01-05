import * as api from '../api';

export const createReminder = (reminder) => async (dispatch) => {
    try{
        const {data} = await api.createReminder(reminder);
        dispatch ({type: 'CREATE', payload: data});
    } catch (error){
        console.log(error.message);
    } 
}

export const getReminder = () => async (dispatch) => {
    try {
        const {data} = await api.fetchReminders();
        dispatch({ type: 'FETCH_REMINDERS', payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
    
  
}
