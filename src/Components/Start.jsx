
import { useRef } from 'react'

const Start = ({userInfo}) => {

const inputRef = useRef(null)

const handleClick =()=>{
       inputRef.current.value && userInfo(inputRef.current.value)
}
  return (
    <div className='bg-purple-300'>
      <div
      className='flex flex-col justify-center items-center h-screen  bg-purple-100 p-8 space-y-6'
       >
        <p>Enter your Name</p>
        <input
        className='p-2 rounded-xl'
         type="text"
        placeholder='Enter Username'
        ref={inputRef}
         />
        <input
        className='bg-purple-500 p-2 rounded-md text-white font-medium hover:bg-purple-700'
         type="submit" onClick={handleClick} />
      </div>
    </div>
  )
}

export default Start
