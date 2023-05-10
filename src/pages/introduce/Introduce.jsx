import React, {useState} from 'react'
import './Introduce.css'
import Dropdown from '../../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom';
import QuestionCard from '../../components/questionCard/QuestionCard';


const Introduce = () => {
    const difficulty = ["easy", "medium", "hard"];
    const [difficultyChanege , setdifficultyChanege] = useState('easy')
    const TOTAL_QUESTİİON = 10;
    const navigate = useNavigate();

    const startQuiz = () => {
        if(difficultyChanege){
            navigate(`/quiz/${difficultyChanege}/${TOTAL_QUESTİİON}`)
        }
    }
    
 
  return (
    <div className='introduce'>
        <div className="introduce-container">
            <img src="https://cdn1.ftimg.com/images/logos/s240x120/en_US/fluffy-logo.png" alt="logo" className="introduce-logo"/>
            <Dropdown data={difficulty} setdifficultyChanege={setdifficultyChanege}/>
                <div onClick={startQuiz} className='introduce-btn'>Start Quiz</div>
    
        </div>
        
    </div>
  )
}

export default Introduce
