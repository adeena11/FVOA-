import * as api from '../api';


export const getVideos = () => async (dispatch) => {
    try {
        const {data} = await api.fetchTrainingVideos();
        dispatch({ type: 'FETCH_ALL_VIDEOS', payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
    
  
}

export const getaVideo = (id) => async (dispatch) => {
    try{
        const {data} = await api.fetchOneVideo();
        dispatch({ type: 'FETCH_ONE_VIDEO', payload: data});
    }
    catch (error){
        console.log(error.message);
    }
}