import React from 'react'
import { NavLink } from 'react-router-dom'
import './styling/navbar.scss'

const Navbar = () => {

    return (
        <main className='navbar'>
            <section>
                <div className='left-container'>
                    <span>SKYLA</span> FITNESS
                </div>
                <div className='right-container'>
                    <ul>
                        <NavLink to='/' exact activeStyle={{textDecoration: 'underline'}} className='navbar-link'><li>HOME</li></NavLink>
                        <NavLink to='/gyms' exact activeStyle={{textDecoration: 'underline'}} className='navbar-link'><li>GYMS</li></NavLink>
                        <NavLink to='/trainers' exact activeStyle={{textDecoration: 'underline'}} className='navbar-link'><li>TRAINERS</li></NavLink>
                    </ul>
                </div>
            </section>
        </main>
    )
    
}

export default Navbar