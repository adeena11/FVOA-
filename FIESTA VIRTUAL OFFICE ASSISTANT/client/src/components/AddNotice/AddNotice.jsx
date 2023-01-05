import React, {useState} from 'react';
import './styles.css';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createNotice } from '../../actions/noticeboard';
const AddNoticeForm = () => {
    const [notice, setNotice] = useState({nb_name: '', nb_description: '', nb_createdDate: Date})
    const navigate = useHistory();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        console.log(notice);
        e.preventDefault();
        setNotice({nb_createdDate: new Date()});
        dispatch(createNotice(notice));
        setNotice({ nb_name: '', nb_description: ''});
        navigate.push('/admin/noticeboard');
    }
    return ( 
        <div className='add_notice_container'>
            <h1>Add New Notice</h1>
            <div >
                <form action="post">
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2%'}}>
                    <label className='newNoticeTitle'> Notice Title:</label>
                    <input type="text" value={notice.nb_name} onChange={(e) => setNotice({...notice, nb_name: e.target.value})}/>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center', marginBottom: '2%'}}>
                    <label className='newNoticeDescription'> Notice Description</label>
                    <input type="text" value={notice.nb_description} onChange={(e) => setNotice({...notice, nb_description: e.target.value})} />
                    </div>
                    <div style={{display: 'flex', justifyContent: 'center'}}>
                    <button className='submit_btn' onClick={handleSubmit}> Add Notice</button>
                    </div>
                </form>
            </div>
        </div>
     );
}
 
export default AddNoticeForm;