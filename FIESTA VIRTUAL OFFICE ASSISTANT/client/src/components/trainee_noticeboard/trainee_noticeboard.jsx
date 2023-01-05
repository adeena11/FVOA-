import './styles.css';
import { useSelector, useDispatch } from 'react-redux';

import { useEffect } from 'react';
import { getNotices } from '../../actions/noticeboard';


const TraineeNoticeboard = () => {
    const dispatch = useDispatch();
    const noticeboard = useSelector((state) => state.noticeboard);
    console.log(noticeboard);
  

    useEffect(()=> {
        dispatch(getNotices());
    }, [])

    return ( 
        <div className='noticeboard_main_container'>
            <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center', width: '100%'}}>
            <h1>Noticeboard</h1>
             </div>
            
            {noticeboard.map((notice) => ( 
               <div key={notice._id} className="notice">
                 <div style={{display: 'flex', justifyContent: 'space-between'}}>      
                <div style={{width: '80%', justifyContent: 'flex-start !IMPORTANT', textAlign:'left !important',alignItems:'flex-end' }}>
                <p className="notice_title"> {notice.nb_name} </p>
                </div>
                <div style={{width: '20%', display: 'flex', flexDirection:'row'}}>
                  
                </div>
                </div>
                <div className="notice_desc"> {notice.nb_description} </div>
              
                <div style={{display: 'flex', width: '90%', marginBottom: '2%'}}>
              
                <div className="notice_date"> {notice.nb_createdDate.split('T')[0]}</div>
                
                </div>
                
                
                
               
                </div>
       ))}
            </div>
        
     );
}
 
export default TraineeNoticeboard;