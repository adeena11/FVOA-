import * as api from '../api';

export const getWriters = () => async (dispatch) => {
    try {
       
        const {data} = await api.fetchWriters();
      
        dispatch({ type: 'FETCH_WRITERS', payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
    
  
}
export const createWriter = (writer) => async (dispatch) => {
    try{
        const {data} = await api.addWriter(writer);
        dispatch ({type: 'CREATE', payload: data});
    } catch (error){
        console.log(error.message);
    } 
}

export const getaWriter = (id) => async (dispatch) => {
    try{
        const {data} = await api.fetchaWriter(id);
        dispatch({ type: 'FETCH_ONE', payload: data});
    }
    catch (error){
        console.log(error.message);
    }
}