import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getWriters } from "../../actions/writers";
import { useHistory } from "react-router-dom";

const DisplayWritersEvaluation = () => {
    const navigate = useHistory();
    const dispatch = useDispatch();
    const writers = useSelector((state) => state.writers);
   
    const onCheckReviews = (id) => {
      navigate.push(`/manager/employeeperformance/${id}`);
    }
    const onAddReview = (id) => {
        navigate.push(`/manager/employeeperformance/${id}/addreview`);
      }
    useEffect(() => {
        dispatch(getWriters());
    }, []);

    var count = 1;
    
    return (
        <>
            <div className="employee_list_container">
                
                    <h2 style={{ color: 'black', textAlign: 'center' }}> WRITER LIST</h2>
                  
                
                <div class="header_fixed">
                    <table>
                        <thead>
                            <tr>
                                <th>S No.</th>
                                <th>Name</th>
                                <th>Check Reviews</th>
                                <th> Add Review</th>

                            </tr>
                        </thead>
                        <tbody>

                            {writers.map((writer) => (

                                <tr key={writer._id} >
                                    <td > {count++} </td>
                                    <td> {writer.emp_name} </td>

                                    <td>
                                        <button className="check_reviews"
                                           onClick={ ()=>{
                                                console.log(writer._id);
                                            onCheckReviews(writer._id);
                                           }}
                                        > View</button>
                                    </td>
                                    <td>
                                        <button className="add_review"
                                           onClick={ ()=>{
                                                console.log(writer._id);
                                            onAddReview(writer._id);
                                           }}
                                        > Add Review</button>
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

export default DisplayWritersEvaluation;