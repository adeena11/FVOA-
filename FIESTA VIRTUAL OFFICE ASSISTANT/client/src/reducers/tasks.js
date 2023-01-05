export default (tasks = [], action) => {
    switch (action.type){
        case 'CREATE_TASK':
            return [...tasks, action.payload];
        case 'FETCH_ALL':
            return action.payload;
        default:
            return tasks;
    }
}