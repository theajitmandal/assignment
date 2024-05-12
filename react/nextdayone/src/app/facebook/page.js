'use client'
import React, { useState } from 'react';
import { GrLike } from "react-icons/gr";
import { FaHeart } from "react-icons/fa";
import { FaH, FaRegFaceLaughSquint } from "react-icons/fa6";

const page = () => {
    const [color, setColor] = useState('grey');
    const [size, setSize] = useState(12);
    const [reaction, setReaction] = useState('like');
    const [reactionDivOpen, setReactionDivOpen] = useState(false);
    // const handleColorChange = () => {
    //     // setColor('skyblue');
    //     setColor(color === 'grey' ? 'blue' : 'grey'); //if color grey then change into blue otherwise leave grey
    // }

    const changeReaction = (newReaction, newColor) => {
        //love ---> newReaction --->love
        setReaction(newReaction);
        setColor('newColor');
        newReaction === reaction && newColor === color ? setColor('grey') : setColor(newColor);
    }

    const ReactionDiv = () => {
        return (
            <div className='border border-gray-200 shadow-lg w-32'>
                <button className='p-2'><GrLike onClick={() => changeReaction('like', 'skyblue')} onMouseEnter={() => setSize(40)} onMouseLeave={() => setSize(12)} size={size} color='skyblue' /></button>
                <button className='p-2'><FaHeart onClick={() => changeReaction('love')} color='crimson' /></button>
                <button className='p-2'><FaRegFaceLaughSquint onClick={() => changeReaction('laugh')} color='orange' /></button>
            </div>
        )
    }

    const generateReactionButton = () => {
        //we will have if else later, if reaction is like, show like button, else show other part
        if (reaction === 'love') {
            return (
                <button onMouseEnter={() => setReactionDivOpen(true)} className='p-2'><FaHeart color="crimson" /></button>
            )
        } else if (reaction === 'laugh') {
            <button onMouseEnter={() => setReactionDivOpen(true)} className='p-2'><FaRegFaceLaughSquint color="crimson" /></button>
        }
        else {
            return (
                <button onMouseEnter={() => setReactionDivOpen(true)} className='bg-gray-200 p-2 border border-black'><GrLike color={color} /></button>
            )
        }
    }
    //ternay operator ? : is alternative for if else
    //Do not use ternary operator for multiple else if
    return (
        <div>
            {reactionDivOpen ? <ReactionDiv /> : null}
            {generateReactionButton()}
        </div>
    )
}

export default page