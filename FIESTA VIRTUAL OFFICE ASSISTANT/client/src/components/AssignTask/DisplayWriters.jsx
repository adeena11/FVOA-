import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWriters } from "../../actions/writers";
import { useHistory } from "react-router-dom";

const DisplayWriters = () => {
    const navigate = useHistory();
    const dispatch = useDispatch();
    const writers = useSelector((state) => state.writers);
   
    const onAssign = (id) => {
        navigate.push(`/manager/assigntask/${id}`);
    }
    useEffect(() => {
        dispatch(getWriters());
    }, []);

    var count = 1;
    
    return (
        <>
            <div className="employee_list_container">
                <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', alignText: 'center' }}>
                    <h1 style={{ color: 'black' }}> WRITER LIST</h1>
                    <button className="btn_add_emp" > View Assigned Tasks</button>
                </div>
                <div class="header_fixed">
                    <table>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Name</th>
                                <th>Assign</th>

                            </tr>
                        </thead>
                        <tbody>

                            {writers.map((writer) => (

                                <tr key={writer._id} >
                                    <td > {count++} </td>
                                    <td> {writer.emp_name} </td>

                                    <td>
                                        <button className="emp_profile_btn"
                                           onClick={ ()=>{
                                                console.log(writer._id);
                                            onAssign(writer._id);
                                           }}
                                        > Assign Task</button>
                                    </td>
                                </tr>

                            ))}

                        </tbody>
                    </table>
                </div>


            </div>
        </>
    );
}

export default DisplayWriters;;