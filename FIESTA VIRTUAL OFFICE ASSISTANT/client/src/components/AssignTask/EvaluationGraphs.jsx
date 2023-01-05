import { useEffect } from 'react';
import './styles.css';
import { Line } from 'react-chartjs-2';
import {useParams, useLocation} from 'react-router-dom';
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
} from 'chart.js';
import { useDispatch, useSelector } from 'react-redux';
import { getEvaluation } from '../../actions/evalaution';
import { getaWriter, getWriters } from '../../actions/writers';
import writers from '../../reducers/writers';
import { useState } from 'react';



ChartJS.register(
    LineElement,
    CategoryScale,
    LinearScale,
    PointElement
)
const EvaluationGraphs = () => {
    const [writer, setWriter] = useState({});
    const {id} = useParams();
   
    const dispatch = useDispatch();
    var evaluations = useSelector((state) => state.evaluation);
   
    useEffect(() => {
        dispatch(getEvaluation());
       dispatch(getWriters());
       
    }, []);
    var writers = useSelector((state) => state.writers);
    console.log(writers);
    var name = "";
    const findRecord = () => writers.find(element => {
        console.log("saving 1");
        console.log(element._id)
        if (element._id === id){
            name = element.emp_name;
        }
      });
      findRecord();
      
      name = name.toUpperCase();
      console.log(name);
    // writer.find(element => {
        
    //     if (element._id === id)
    //      writer = element;
    //   });
    var tempEval = []; 
    var count = 0;
    for(var i=0; i<evaluations.length; i++){
        if(evaluations[i].writerId === id){
            tempEval[count++] = evaluations[i];
        }
    }
    evaluations = tempEval;
    var temp = [];
    var temp1 = [];
      console.log(evaluations.length);
        for(var i=0; i<evaluations.length ; i++){

        temp[i] = evaluations[i].avgRating;
        temp1[i] = evaluations[i].rating_Date.split('T')[0];
       
    }
    console.log(evaluations.avgRating);
    console.log(temp);
  
   
    
    console.log(temp1);
    const data = {
        labels: temp1,
        datasets: [{
            data: temp,
            backgroundColor: 'transparent',
            borderColor: '#f26c6d',
            pointBorderColor: 'transparent',
            pointBorderWidth: 4
            
        }]
    };
    const options = {
        plugins: {
            legend: false
        }, 
        scales: {
            x: {
                grid: {
                    display: false
                }
            }, 
            y: {
                min: 1, 
                max: 5, 
                ticks: {
                    stepSize: 1,
                    
                }
            }
        }
    }


return (
    <div className='performance_container'>
        <h2 style={{textAlign: 'center'}}> PERFORMANCE OF {name}</h2>
 <h3 className='review_title'>GRAPH</h3>
        <div className='chart'>
            <Line data={data} options={options} ></Line>
        </div>
        <div className='reviews'>
        <h3 className='review_title'>REVIEWS</h3>
        <div>
        {evaluations.map((evaluation) => ( 
               <div key={evaluation._id} className="review_container">
                 <div style={{display: 'flex', justifyContent: 'space-between'}}>      
                <div style={{width: '80%', justifyContent: 'flex-start !IMPORTANT', textAlign:'left !important',alignItems:'flex-end' }}>
                <p className="review_comment"> {evaluation.review} </p>
                </div>
                <div style={{width: '20%', display: 'flex', flexDirection:'row'}}>
                  
                </div>
                </div>
                
                <div style={{display: 'flex', width: '90%', marginBottom: '2%'}}>
              
                <div className="notice_date"> {evaluation.rating_Date.split('T')[0]}</div>
                
                </div>
                
                
                
               
                </div>
       ))}
        </div>
        </div>
    </div>
);

}
export default EvaluationGraphs;