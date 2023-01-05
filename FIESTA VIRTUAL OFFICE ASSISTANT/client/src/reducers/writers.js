export default (writers = [], action) => {
    switch (action.type){
        case 'FETCH_WRITERS':
            return action.payload;
        case 'FETCH_ONE':
                return { ...writers, writers: action.payload };
        default:
            return writers;
    }
}