export default (evaluation = [], action) => {
    switch (action.type){
        case 'FETCH':
            return action.payload;
        case 'CREATE':
            return [...evaluation, action.payload];
        default:
            return evaluation;
    }
}