import * as api from '../api';

//Action Creators 
export const getEmployee = () => async (dispatch) => {
    try {
        const {data} = await api.fetchEmployees();
        dispatch({ type: 'FETCH_ALL', payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
    
  
}

export const createEmployee = (employee) => async (dispatch) => {
    try{
        const {data} = await api.createEmployee(employee);
        dispatch ({type: 'CREATE', payload: data});
    } catch (error){
        console.log(error.message);
    } 
}

export const updateEmployee = (id, emp) => async (dispatch) => {
    try {
        
     console.log("in actin");
        const response = await api.updateEmployee(id, emp);
     
        dispatch({type: 'UPDATE', paylaod: response});
    }catch (error){
        console.log(error.message);
    }
}

export const deleteEmployee = (id) => async (dispatch) => {
    try{
       await api.deleteEmployee(id);

        dispatch({type: 'DELETE', payload: id});
    }
    catch (error){
        console.log(error.message);
    }
}