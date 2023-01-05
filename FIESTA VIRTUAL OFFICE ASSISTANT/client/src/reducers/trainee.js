export default (trainee = [], action) => {
    switch (action.type) {
        // case 'FETCH_WRITERS':
        //     return action.payload;
        case 'CREATE':
            return [...trainee, action.payload];
        // case 'FETCH_ONE':
        //     return { ...trainee, trainee: action.payload };
        default:
            return trainee;
    }
}