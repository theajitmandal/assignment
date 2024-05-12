'use client'
import React, {useState} from 'react';
import { GrLike } from "react-icons/gr";

const page = () => {
    const [color, setColor] = useState('grey');
    const handleColorChange = () => {
        setColor('skyblue');
    }
  return (
    <div>
        <button onClick = {()=>handleColorChange()} className='bg-gray-200 p-2 border border-black'><GrLike color={color}/></button>
    </div>
  )
}

export default page