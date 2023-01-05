import React, {useState} from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import {useHistory} from 'react-router-dom';

import './styles.css';
import { useEffect } from "react";
import { getVideos } from "../../actions/trainingvideos";
const TrainingVideos = ({ }) => {
    const dispatch = useDispatch();
    const videos = useSelector((state) => state.trainingVideos);
    console.log(videos);
    const navigate = useHistory(); 
    const onWatchVideo = (id) => {
       navigate.push(`/trainee/trainingvideos/${id}`);
    }
    useEffect(()=> {
      dispatch(getVideos());
    }, []);
    
    return ( 
        <div className="empinfo_container">
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', alignText: 'center' }}>
        <h1 style={{textAlign: 'center'}}> Training Videos </h1>
         </div>
        {videos.map((video) => ( 
               <div key={video._id} className="employee_record" >
                 <div style={{display: 'flex', justifyContent: 'space-between'}}>      
                <div style={{width: '70%', justifyContent: 'flex-start !IMPORTANT', textAlign:'left !important',alignItems:'flex-end' }}>
                <p className="video_name"> {video.video_name} </p>
                </div>
                <div style={{width: '30%', display: 'flex', flexDirection:'row'}}>
                
                <div style={{width: '70%', justifyContent: 'flex-end', textAlign: 'right', marginTop: '5%', marginRight: '5%'}}> 
                <button className="watch_video_btn"
                      onClick={() => {
                          console.log(video._id)
                          onWatchVideo(video._id);
                        }  
                      }
                > Watch Video</button>
                </div>
                </div>
                </div>
                <div className="video_description"> {video.video_description} </div>
              
                
                
                
                
               
                </div>
       ))}
     
        </div>
     );
}
 
export default TrainingVideos;