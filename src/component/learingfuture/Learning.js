import React from 'react'
import { TbHeartHandshake } from "react-icons/tb";
import { BiSolidInstitution } from "react-icons/bi";
import { SiTicktick } from "react-icons/si";
import './Learning.css'
import LearningCard from './LearningCard';
import { FaComputer } from "react-icons/fa6";
import { PiRankingFill } from "react-icons/pi";

export default function Learning(proplearn) {
    return (
        <>
            <div>
                <div className='mainn1'>
                    <div>
                        <p className='linered1'></p>
                        <p className='handshake'><TbHeartHandshake className='icon'/></p>
                        <p className='linered'></p>
                    </div>
                    <div className='skilldiv'>
                        <p className='adapt'>Adapt Your Future</p>
                        <p className='startover'>Start your</p>
                        <p className='learningjourney'>Learning Journey Today!</p>
                    </div>
                </div>
                <div className='card1' >
                <LearningCard icon={<FaComputer className='icon1'/>} name={"High-End Tech"} text={"Extend into a tech Space"}/>
                <LearningCard icon={<BiSolidInstitution  className='icon2'/>} name={"High-End Tech"} text={"Extend into a tech Space"}/>
                </div>
                <div className='card2' >
                <LearningCard icon={<SiTicktick className='icon3'/>} name={"High-End Tech"} text={"Extend into a tech Space"}/>
                <LearningCard icon={<PiRankingFill className='icon4'/>} name={"High-End Tech"} text={"Extend into a tech Space"}/>

                </div>
            </div>


        </>
    )
}
