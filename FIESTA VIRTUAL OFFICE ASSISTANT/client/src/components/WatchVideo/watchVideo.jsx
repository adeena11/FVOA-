import React, {useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ReactPlayer from 'react-player/youtube'
import { useParams } from 'react-router-dom';
import { getaVideo } from '../../actions/trainingvideos';
import './styles.css';
const WatchVideo = () => {

    const [videoData, setVideoData] = useState({video_name: '', video_description: '', video_link: ''})
    console.log("in watch a video");
    const dispatch= useDispatch();
    const { id }= useParams();
    console.log("Video ID", id );
    const videos = useSelector((state) => state.trainingVideos);
    console.log(videos);

    const findRecord = () => videos.find(element => {
        console.log("saving 1");
        if (element._id === id)
         setVideoData(element);
      });

    useEffect(() => {
          findRecord();
    }, [])

    console.log(videoData);
    return (  
        
        <div className='video'>
         <p className='video_title'>{videoData.video_name}</p> 
        <div className='video_link'>
       <ReactPlayer url={videoData.video_link} />
       </div>
    </div>
    );
}
 
export default WatchVideo;