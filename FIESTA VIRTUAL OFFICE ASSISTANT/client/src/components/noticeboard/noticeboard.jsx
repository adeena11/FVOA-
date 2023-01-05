import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import {AiFillDelete} from 'react-icons/ai'
import { useEffect } from 'react';
import { getNotices } from '../../actions/noticeboard';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { deleteNotice } from '../../api';


const Noticeboard = () => {
    const dispatch = useDispatch();
    const noticeboard = useSelector((state) => state.noticeboard);
    console.log(noticeboard);
    const navigate = useHistory();

    useEffect(()=> {
        dispatch(getNotices());
    }, [])

    const onAddNotice = () => {
        navigate.push('/admin/addnotice');
    }
    const onDelete = (id) => {
        dispatch(deleteNotice(id));
        
    }
    return ( 
        <div className='noticeboard_main_container'>
            <div style={{display: 'flex',justifyContent: 'flex-end', alignItems: 'center', width: '100%'}}>
            <h1>Noticeboard</h1>
            <button className='btn_add_notice' onClick={onAddNotice}>Add New Notice</button>
            </div>
            
            {noticeboard.map((notice) => ( 
               <div key={notice._id} className="notice">
                 <div style={{display: 'flex', justifyContent: 'space-between'}}>      
                <div style={{width: '80%', justifyContent: 'flex-start !IMPORTANT', textAlign:'left !important',alignItems:'flex-end' }}>
                <p className="notice_title"> {notice.nb_name} </p>
                </div>
                <div style={{width: '20%', display: 'flex', flexDirection:'row'}}>
                  <div style={{width: '100%', marginTop: '10%' ,justifyContent: 'right' , textAlign: 'right'}}>
                <button className="delete_btn" 
                      onClick={() => onDelete(notice._id)}      
                > <AiFillDelete/> </button>
                </div>
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
 
export default Noticeboard;