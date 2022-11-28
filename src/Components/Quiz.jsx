import React, { useEffect } from 'react'
import { useState } from 'react';
import Timer from './Timer';
import useSound from 'use-sound';
// import countDown from "../Sounds/clock-ticking"
// import correct from "../Sounds/correct-answer"
// import wrong from "../Sounds/wrong-answer"


function Quiz ({data,questionNumber, setQuestionNumber}) {

  const [question, setQuestion] = useState(null)
  const [selectedAnswer, setSelectedAnswer] =useState();
  const [ className, setClassName] = useState();
  const [points , setPoints] = useState(0)
  const [timeOut, setTimeOut] =useState(false)
  // const [countDown] =useSound(countDown)
  // const [correct] =useSound(correct)
  // const [wrong] =useSound(wrong)

  // useEffect(()=>{
  //   countDown()
  // },[countDown])
  

    useEffect(()=>{
     setQuestion(data[questionNumber - 1])
    },[data,questionNumber])

    const totalPoints=(a)=>{
      if(a.correct){
        setPoints((prev)=> prev + 100 )
        setQuestionNumber((prev)=> prev + 1);
        setSelectedAnswer(null)
      } 
      else{
        setTimeOut(true)
      }    
    }

    const handleClick =(a)=>{
      setSelectedAnswer(a);
      setClassName("answer active");
      setTimeout(()=>{
          setClassName(a.correct ? "answer correct" : "answer wrong")
      }, 3000)

       totalPoints(a)    
    }

    const handleNext =()=>{
        setQuestionNumber((prev)=> prev + 1 > data.length ? prev : prev + 1 )
        setSelectedAnswer(null)
      }
    

   const handlePrevious =()=>{
    setQuestionNumber((prev)=> prev - 1 == 0? prev:prev -1 )
    setSelectedAnswer(null)
   }


  return (
    <div className='bg-purple-600 h-screen text-white'>
      <div className=' w-4/5 mx-auto '>
        <div className=' flex justify-end py-5 '>
        <p className='bg-purple-700 text-5xl border-solid border-4 border-slate-200 p-3 h-20 w-20 text-center mt-8 rounded-full'>
          <Timer
          setTimeOut={setTimeOut}
          setQuestionNumber={setQuestionNumber}
          setSelectedAnswer={setSelectedAnswer}
          data={data}
        />
        </p>
        </div>
       <p className='text-4xl'>Points : {points}</p>
    <div className=' my-12 border-3 border-white border p-6 rounded-2xl bg-purple-800 font-semibold'>
        {
          <p>{question?.question}</p>
          }
    </div>
    <div className="answers mt-10">
                {question?.answers.map((a,i)=>
                {
                  return <div key={i} className={selectedAnswer === a ? className :" answer " } onClick={()=>handleClick(a)}>
                         {a.text} 
                          </div>
                })}
    </div>
    <div className='font-semibold flex justify-between place-self-end  mb-5 object-bottom'>
        <div><span className=' border p-1 rounded bg-slate-500 hover:bg-slate-900' onClick={handlePrevious}>Previous</span></div>
        <div><span className=' border p-1 rounded bg-slate-500 hover:bg-slate-900' onClick={handleNext}>Next</span></div>
      </div>
      </div>
    </div>
  )
}

export default Quiz
