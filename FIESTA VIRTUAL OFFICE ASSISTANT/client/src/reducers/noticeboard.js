export default (notice = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_NOTICE':
            return action.payload;
        case 'CREATE':
            return [...notice, action.payload];
        case 'DELETE': 
            return notice.filter((not) => not._id !== action.payload); 
        default:
            return notice;
    }
}