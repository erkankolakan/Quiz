import React, { useEffect } from 'react'
import './QuestionCard.css'
import { useState } from 'react'



const QuestionCard = ({ questionsData , score ,setScore , count , setCount , modal , setModal } ) => {

    const [timer , setTimer] = useState(30)

    const approvedChoice = (e) => {
        console.log(e.currentTarget.value) 
        const checkAnswer = e.currentTarget.value === questionsData[count]?.correct_answer;

        if(checkAnswer){
            setScore(score + 100)
        }
        setCount(count + 1)
        if(count == 9){
            setModal(true)   //set modal olayım true olursa farklı sayfanın renden edilmeisi sağlayacağım.
         
        }
        setTimer(30)
    }

        useEffect(() => {
            const interval = setInterval(() => {

            if(timer > 0){
                setTimer(timer - 1);
            }
            if(timer == 0 && count < 10){
                setCount(count + 1)
                setTimer(30)
            }
            else if(count >= 10){
                setModal(true)
            }
            },1000)
            return () => {
                clearInterval(interval); //!!!!!!!!!!!!!!!!!!!Bu Kısım Oldukça Önemli!!!!!!!!!!!!!!!!!!!!
            }

        },[timer])

    return (
        <div className='questionCard'>
        <div className='questionCard-timer'>{timer}</div>
        <div className=' questionCard-title'> {count+1}/10 - {questionsData[count]?.question}  </div>
        <div className='questionCard-btn' >

            {       
            questionsData[count]?.answer?.map((answer , i) => (  
                <button onClick={approvedChoice} key={i} value={answer}>{answer}</button>
            ))
            } 
        </div>
 
      
              
          

        </div>
      )
      
}

export default QuestionCard
