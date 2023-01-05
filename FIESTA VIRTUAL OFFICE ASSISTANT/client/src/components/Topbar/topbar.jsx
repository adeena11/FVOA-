import './styles.css';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useState } from 'react';
import {FaRegUserCircle} from 'react-icons/fa';


const Topbar = () => {
   const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
   const dispatch = useDispatch();
   const navigate = useHistory();
   const handleLogout =() => {
      dispatch({type: 'LOGOUT'});
      setUser(null);
      navigate.push('/');
   }
   // console.log(user.result._id)
    return ( 
        
        <div className="container"> 
             <div className="container_child username">
              
               <p > FIESTA VIRTUAL OFFICE ASSISTANT </p>
                
             </div>
             <div className="container_child"> 
                <button className='logout' onClick={handleLogout}> Log Out</button>
             </div>
        </div>
        
     );
}
 
export default Topbar;