import React from 'react'
export default function LearningCard(proplearn) {
    return (
        <>
            <div className='learningcard'>
                <div>
                    {proplearn.icon}
                </div>
                <div className='textmaindiv'>
                    <p className='hightext'>{proplearn.name}</p>
                    <p className='extendtext'>{proplearn.text}</p>
                </div>
            </div>
        </>
    )
}