import toast from 'react-hot-toast';
import * as api from '../api'



export const loginAdmin = (userData, toast, navigate) => async (dispatch)=>{
    try{
        const {data} = await api.adminLogin(userData);

        dispatch({type: 'AUTH_ADMIN', data});
        navigate.push('/admin/dashboard');
        
    }catch(error){
        console.log(error.response.status);
        if(error.response.status == 404) {
            return toast.error("User Not Found");
        }
        if(error.response.status == 500){
            return toast.status("Something Went Wrong");
        }
    }
}

export const loginManager = (userData, toast, navigate) => async (dispatch)=>{
    try{
        const {data} = await api.managerLogin(userData);

        dispatch({type: 'AUTH_MANAGER', data})
        navigate.push('/manager/dashboard');
        
    }catch(error){
        console.log(error.response.status);
        if(error.response.status == 404) {
            return toast.error("User Not Found");
        }
        if(error.response.status == 500){
            return toast.status("Something Went Wrong");
        }
    }
}

export const loginWriter = (userData, toast, navigate) => async (dispatch)=>{
    try{
        const {data} = await api.writerLogin(userData);

        dispatch({type: 'AUTH_WRITER', data})
        navigate.push('/writer/dashboard');
        
    }catch(error){
        console.log(error.response.status);
        if(error.response.status == 404) {
            return toast.error("User Not Found");
        }
        if(error.response.status == 500){
            return toast.status("Something Went Wrong");
        }
    }
}
export const loginTrainee = (userData, toast, navigate) => async (dispatch)=>{
    try{
        const {data} = await api.traineeLogin(userData);

        dispatch({type: 'AUTH_TRAINEE', data})
        navigate.push('/trainee/dashboard');
    }catch(error){
        console.log(error.response.status);
        if(error.response.status == 404) {
            return toast.error("User Not Found");
        }
        if(error.response.status == 500){
            return toast.status("Something Went Wrong");
        }
    }
}