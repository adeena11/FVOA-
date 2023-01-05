export default (reminder = [], action) => {
    switch (action.type){
        case 'FETCH_REMINDER':
            return action.payload;
        case 'CREATE':
            return [...reminder, action.payload];
        default:
            return reminder;
    }
}