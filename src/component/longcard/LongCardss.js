import React from 'react'
import { AiFillClockCircle } from "react-icons/ai";
import './LongCard.css'
export default function LongCardss(propis) {
    return (
        <>
            <div>
                <img src={propis.image} alt="" className='longcardimg'/>
                <div className='buttondiv'>
                    <button className='devlopment'>Development</button>
                    <button className='timeweek'><AiFillClockCircle /></button>
                    <p className='stackdev'>Full Stack Web Developer</p>
                </div>
            </div>
        </>
    )
}
