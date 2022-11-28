import { useState } from 'react'
import reactLogo from './assets/react.svg'
import axios from 'axios'
import './App.css'
import Start from './Components/Start'
import Quiz from './Components/Quiz'
import { data } from './Components/Data'


function App() {
  const [username, setUserName]= useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)


  return (
    <div className=''>
      {/* <Quiz 
       data={data}
       questionNumber={questionNumber}
       setQuestionNumber={setQuestionNumber}
       
       /> */}
      { username ? 
      <Quiz 
       data={data}
       questionNumber={questionNumber}
       setQuestionNumber={setQuestionNumber}
       /> :<Start userInfo={setUserName}/> }
    
    </div>
  )
}

export default App
