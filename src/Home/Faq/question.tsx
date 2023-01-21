import React, { useState } from 'react'
import { IoCaretDown,IoCaretUp } from "react-icons/io5";

type props ={
    questions:string;
    answer:string;
}

const Question = ({questions,answer}:props) => {
    const [ispositionUp,setispositionUp] = useState(false)
    const Answer = (answer:string)=>{
        if(ispositionUp==true){
            return <IoCaretUp onClick={()=>setispositionUp(!ispositionUp)}/>
        }else{
            return <IoCaretDown onClick={()=>setispositionUp(!ispositionUp)}/>
        }
    }
  return (
    <div className='text-white border-b border-white pb-2'>
        <p onClick={()=>setispositionUp(!ispositionUp)} className='font-semibold hover:text-[#f19762] hover:cursor-pointer flex items-start justify-between'>{questions} <span>{Answer(answer)}</span></p>
        {ispositionUp && <p>{answer}</p>}
    </div>
  )
}

export default Question