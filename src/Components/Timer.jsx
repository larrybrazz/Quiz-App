import React, {useEffect, useState} from 'react'

const Timer = ({setTimeOut,setQuestionNumber,setSelectedAnswer,data}) => {
 const [timer , setTimer] = useState(30)

 useEffect(()=> {
    const interval = setInterval(() => {
       setTimer((prev)=> prev -1) 
    }, 1000);

    if(timer === 0){
      setQuestionNumber((prev)=> prev + 1 > data.length ? prev : prev + 1 )
      setSelectedAnswer(null);
      setTimer(30)
   }
   

    return ()=> clearInterval(interval);

 }, [timer])

 useEffect(()=>{
    setTimer(30)
 },[setQuestionNumber])
  return     timer
}

export default Timer