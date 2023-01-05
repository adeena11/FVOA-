import * as api from '../api';

//Action Creators 

export const createNotice = (notice) => async (dispatch) => {
    try{
        const {data} = await api.createNotice(notice);
        dispatch ({type: 'CREATE', payload: data});
    } catch (error){
        console.log(error.message);
    } 
}

export const getNotices = () => async (dispatch) => {
    try {
        const {data} = await api.fetchNotices();
        dispatch({ type: 'FETCH_ALL_NOTICE', payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
    
  
}
export const deleteEmployee = (id) => async (dispatch) => {
    try{
       await api.deleteNotice(id);

        dispatch({type: 'DELETE', payload: id});
    }
    catch (error){
        console.log(error.message);
    }
}

