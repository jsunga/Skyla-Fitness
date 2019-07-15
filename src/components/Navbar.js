import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
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
                            <NavLink to='/' exact activeStyle={{textDecoration: 'underline'}} className='navbar-link'><li>HOME</li></NavLink>
                            <NavLink to='/gyms' exact activeStyle={{textDecoration: 'underline'}} className='navbar-link'><li>GYMS</li></NavLink>
                            <NavLink to='/trainers' exact activeStyle={{textDecoration: 'underline'}} className='navbar-link'><li>TRAINERS</li></NavLink>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
    
}
