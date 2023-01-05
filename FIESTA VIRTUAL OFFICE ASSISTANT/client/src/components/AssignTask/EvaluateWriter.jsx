import './styles.css';
import { useParams } from 'react-router-dom';
import { useState } from "react";
import { TextareaAutosize } from "@material-ui/core";
import { useDispatch, useSelector } from 'react-redux';
import { createEvaluation } from '../../actions/evalaution';
import { useHistory } from 'react-router-dom';

const EvaluateWriter = () => {
    const {id} = useParams();
    const dispatch = useDispatch();
    const evaluations = useSelector((state) => state.evaluation);
    const navigate = useHistory();
 
    const [ratingOnTime, setRatingOnTime] = useState(0);
    const [ratingLessPlag, setRatingLessPlag] = useState(0);
    const [ratingWritingSkills, setRatingWritingSkills] = useState(0);
    const [ratingCustomerSatisfaction, setRatingCustomerSatisfaction] = useState(0);
    const [review, setReview] = useState('');
    const [hover1, setHover1] = useState(0);
    const [hover2, setHover2] = useState(0);
    const [hover3, setHover3] = useState(0);
    const [hover4, setHover4] = useState(0);
    const onSubmit = (e) => {
        e.preventDefault();
        const avgRating = (ratingOnTime + ratingLessPlag + ratingWritingSkills+ ratingCustomerSatisfaction) / 4;
        console.log(avgRating);
        const data = {timeRating: ratingOnTime, plagRating: ratingLessPlag, writingSkillRating: ratingWritingSkills, csRating: ratingCustomerSatisfaction,avgRating: avgRating, review: review, writerId: id};
        console.log(data);
        dispatch(createEvaluation(data));
        
    }
    return (
        <div className="performance_container">
            <h2 className='performance_title'>RATE THE PERFORMANCE</h2>
            <div className='performance_form'>
            <form >

            <div style={{marginLeft: '2%' ,marginTop: '3%'}}>
                Did the writer submit task on time?
                    <div className="star-rating">

                        
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (

                                <button

                                    type="button"
                                    key={index}
                                    className={index <= (hover1 || ratingOnTime) ? "on" : "off"}
                                    onClick={() => setRatingOnTime(index)}
                                    onMouseEnter={() => setHover1(index)}
                                    onMouseLeave={() => setHover1(ratingOnTime)}
                                >
                                    <span className="star">&#9733;</span>
                                    {console.log(ratingOnTime)}
                                </button>

                            );
                        })}
                    </div>
                </div>
                {/* Question 2 */}
                <div style={{marginLeft: '2%',marginTop: '1%'}}>
                Does the submitted content has acceptable plagiarism?
                    <div className="star-rating">

                       
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (

                                <button

                                    type="button"
                                    key={index}
                                    className={index <= (hover2 || ratingLessPlag) ? "on" : "off"}
                                    onClick={() => setRatingLessPlag(index)}
                                    onMouseEnter={() => setHover2(index)}
                                    onMouseLeave={() => setHover2(ratingLessPlag)}
                                >
                                    <span className="star">&#9733;</span>
                                    {console.log(ratingLessPlag)}
                                </button>

                            );
                        })}
                    </div>
                </div>
                {/* Question 3 */}
                <div style={{marginLeft: '2%', marginTop: '1%'}}>
                How would you rate the written content?
                    <div className="star-rating">

                       
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (

                                <button

                                    type="button"
                                    key={index}
                                    className={index <= (hover3 || ratingWritingSkills) ? "on" : "off"}
                                    onClick={() => setRatingWritingSkills(index)}
                                    onMouseEnter={() => setHover3(index)}
                                    onMouseLeave={() => setHover3(ratingWritingSkills)}
                                >
                                    <span className="star">&#9733;</span>
                                    {console.log(ratingWritingSkills)}
                                </button>

                            );
                        })}
                    </div>
                </div>

                {/* Question 4 */}
                <div style={{marginLeft: '2%', marginTop: '1%'}}>
                Is the client Satisfied with the work?
                    <div className="star-rating">

                       
                        {[...Array(5)].map((star, index) => {
                            index += 1;
                            return (

                                <button

                                    type="button"
                                    key={index}
                                    className={index <= (hover4 || ratingCustomerSatisfaction) ? "on" : "off"}
                                    onClick={() => setRatingCustomerSatisfaction(index)}
                                    onMouseEnter={() => setHover4(index)}
                                    onMouseLeave={() => setHover4(ratingCustomerSatisfaction)}
                                >
                                    <span className="star">&#9733;</span>
                                    {console.log(ratingCustomerSatisfaction)}
                                </button>

                            );

                        })}
                    </div>
                </div>
                <div style={{marginLeft: '2%', marginTop: '1%'}}>
                    Write a Review
                    
                <TextareaAutosize
                    className='review'
                    maxRows={4}
                    aria-label="maximum height"
                    placeholder="Review"
                    style={{ width: '90%', height: '15vh', marginLeft: '3%', marginTop: '1%' }}
                    onChange={(e) => {setReview(e.target.value)}}
                />
                </div>
                <div style={{justifyContent: 'center', textAlign: 'center'}}>
                <button className='submit_performance' onClick={onSubmit}> Sumbit</button>
                </div>
            </form>
            </div>
        </div>
    );
}

export default EvaluateWriter;