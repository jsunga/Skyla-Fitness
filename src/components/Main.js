import React from 'react'
import Why from './Why'
import Pricing from './Pricing'
import './styling/main.scss'

const Main = () => {

    return (
        <>
            <div className='landing'>
                <div>Leave Your Mark</div>
            </div>
            <div className='message'>
                Start Your Journery Today!
                <button>Join Now</button>
            </div>
            <Why />
            <Pricing />
        </>
    )

}

export default Main