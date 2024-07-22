import React from 'react'
import './Featured.css'
import lineimg from "../../assest/image/git-branch-security.svg"
export default function Featured() {
    return (
        <>
  
            <div className='feaaturedmain'>
                <div className='greenptag'>
                </div>
                    <img src={lineimg} className='imagess' alt="" />
                <div className='featuredcourse'>
                <p className='featuredptag'>Featured Courses</p>
                <p className='getstartedptag'>Get Started</p>
                <p className='pickptag'>Pick a Course</p>
                </div>
            </div>
        </>
    )
}
