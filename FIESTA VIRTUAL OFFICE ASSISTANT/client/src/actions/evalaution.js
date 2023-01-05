import * as api from '../api';

export const createEvaluation = (evaluation) => async (dispatch) => {
    try{
        const {data} = await api.addEvaluation(evaluation);
        dispatch ({type: 'CREATE', payload: data});
    } catch (error){
        console.log(error.message);
    } 
}

export const getEvaluation = () => async (dispatch) => {
    try {
        const {data} = await api.fetchEvaluationResult();
        dispatch({ type: 'FETCH', payload: data});
    }
    catch(error) {
        console.log(error.message);
    }
}
