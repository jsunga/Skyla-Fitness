import React, { Component } from 'react'
import './styling/style.scss'

export default class Navbar extends Component {
    render() {
        return (
            <div className='navbar-container'>
                <div>
                    <div className='navbar-left'>
                        <span>SKYLA</span> FITNESS
                    </div>
                    <div className='navbar-right'>
                        <ul>
                            <li>HOME</li>
                            <li>GYMS</li>
                            <li>TRAINERS</li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
