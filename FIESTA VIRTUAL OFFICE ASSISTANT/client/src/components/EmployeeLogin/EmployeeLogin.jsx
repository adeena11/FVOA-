import React, { useState } from "react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { login, loginAdmin, loginManager, loginTrainee, loginWriter } from "../../actions/auth";

import './styles.css';
const Login = () => {
    const dispatch = useDispatch();
    const navigate = useHistory();

    const [userData, setData] = useState({
        email: '', username: '', password: ''
    });
    //    const [axiosResponse, setAxiosResponse] = useState(localStorage.getItem('response'));


    const handleSubmit = (e) => {
        e.preventDefault();
        if ((userData.username == '') || (userData.password == '')) {
            return console.log('Credentials not added');
        }
        console.log(userData);
        console.log(document.getElementById("role").value);
        if (document.getElementById("role").value == 'admin') {
            dispatch(loginAdmin(userData, toast, navigate));
            // navigate.push('/admin/dashboard');
        }
        if (document.getElementById("role").value == 'trainee') {
            dispatch(loginTrainee(userData, toast, navigate));
           // navigate.push('/trainee/dashboard');
        }
        if (document.getElementById("role").value == 'writer') {
            dispatch(loginWriter(userData, toast, navigate));
            //navigate.push('/writer/dashboard');
        }
        if (document.getElementById("role").value == 'manager') {
            dispatch(loginManager(userData, toast, navigate));
           // navigate.push('/manager/dashboard');
        }
    }
    return (
        <><Toaster
            position="top-centre"
            reverseOrder={false} />
            <div className="form_container">
                <form action="post">
                    <p className="title"> LOGIN</p>
                    <label className="role_label">
                        Role:
                        <select id="role">
                            <option value="admin">Admin</option>
                            <option value="trainee">Trainee</option>
                            <option value="writer">Writer</option>
                            <option value="manager">Manager</option>
                        </select>
                    </label>
                    <div className="txt_field">
                        <input type='text' placeholder="manager@gmail.com" value={userData.email} onChange={(e) => setData({ ...userData, email: e.target.value })} />
                        <span></span>
                        <label> Enter email: </label>
                    </div>
                    <div className="txt_field">
                        <input type='text' placeholder="manager_123" value={userData.username} onChange={(e) => setData({ ...userData, username: e.target.value })} />
                        <span></span>
                        <label> Enter username: </label>
                    </div>
                    <div className="txt_field">
                        <input type="password" placeholder="*******" value={userData.password} onChange={(e) => setData({ ...userData, password: e.target.value })} />
                        <span></span>
                        <label> Password:</label>

                    </div>

                    <button className="btn_login" onClick={handleSubmit}> Log in </button>

                </form>
            </div></>
    );
}

export default Login;