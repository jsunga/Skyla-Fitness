import React, { Component } from 'react'
import './styling/style.scss'

export default class Main extends Component {
    render() {
        return (
            <>
                <div className='main'>
                    <div>Leave Your Mark</div>
                </div>
                <div className='main-message'>
                    Start Your Journery Today!
                    <button>Join Now</button>
                </div>
            </>
        )
    }
}
