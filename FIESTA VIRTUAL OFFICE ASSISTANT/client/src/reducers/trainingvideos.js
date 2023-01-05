export default (video = [], action) => {
    switch (action.type){
        case 'FETCH_ALL_VIDEOS':
            return action.payload;
         case 'FETCH_ONE_VIDEO':
                return { ...video, video: action.payload };
        default:
            return video;
    }
}

