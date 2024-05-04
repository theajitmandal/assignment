'use client'
import React, {useState} from 'react'

const page = () => {
    // console.log("Hello");
    // let number = 3;
    let [number, setNumber] = useState(5);

    const increment = () => {
        if(number<10){
            setNumber(number+1);
        }
    }

    const decrement = () => {
        if(number>0) {
            setNumber(number-1);
        }
    }
    // const increment = () => {
    //     number +=  1;
    //     console.log(number);
    // }


    // const decrement = () => {
    //     number -=  1;
    //     console.log(number);
    // }
  return (
    <div>
        Page

        <button className='bg-teal-200 p-2' onClick={increment}>+</button>
        {number}
        <button className='bg-teal-200 p-2' onClick={decrement}>-</button>
    </div>
  )
}

export default page
