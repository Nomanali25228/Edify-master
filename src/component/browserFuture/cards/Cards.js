import React from 'react'
export default function Cards(props) {
    return (
        <div>
            <div>
                <div className='cardiv'>
                    <img src={props.image} alt="" style={{height:'90px' , width:"100px" , marginBottom:'-15px', marginLeft:"27px"}} />
                    <p className='development'>{props.name}</p>
                    <p className='courses'>{props.course}</p>
                </div>
            </div>
        </div>
    )
}