export default (manager = [], action) => {
    switch (action.type) {
        // case 'FETCH_WRITERS':
        //     return action.payload;
        case 'CREATE':
            return [...manager, action.payload];
        // case 'FETCH_ONE':
        //     return { ...trainee, trainee: action.payload };
        default:
            return manager;
    }
}