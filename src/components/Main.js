import React from 'react'
import Why from './Why'
import './styling/main.scss'

const Main = () => {

    return (
        <>
            <div className='main-section'>
                <div>Leave Your Mark</div>
            </div>
            <div className='main-message'>
                Start Your Journery Today!
                <button>Join Now</button>
            </div>
            <Why />
        </>
    )

}

export default Main