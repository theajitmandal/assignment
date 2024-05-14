'use client'
import React, { useEffect, useRef, useState } from 'react'

const page = () => {
    //first load
    // useEffect(() => {
    //     console.log("Hello");
    // }, [])

    // const handleChange = (e) => {
    //     console.log(e); //learning about event type and target and value
    // }

    // const [userName, setUserName] = useState('');

    // const handleChange = (e) => {
    //     // setUserName('ram') name will always be ram if button is clicked or any key is typed
    //     setUserName(e.target.value) ///typed value will be value of input field
    // }

    // useEffect(() => {
    //     setUserName('Gopal');
    // }, [])

    //to focus on input field on the first page render
    const inputRef = useRef(null)
    useEffect(()=>{
        if(inputRef.current){
            inputRef.current.focus()
        }
    }, [])

    return (
        <div>
            {/* <input onChange={handleChange}/> //learning about event type and target and value
            <button onClick={handleChange}>Click Me</button> //learning about event type and target and value */}
            {/* {userName}
            <input value={userName} onChange={handleChange}/>
            <button onClick={handleChange}>Click Me</button> */}

            {/*to focus on input field on the first page render*/}
            <input ref={inputRef} placeholder='Enter name'/>


        </div>
    )
}

export default page