import React, { Component } from 'react'
import gym1 from './images/gym1.jpg'
import gym2 from './images/gym2.jpg'
import gym3 from './images/gym3.jpg'
import './styling/gyms.scss'

class Gyms extends Component {

    componentDidMount() {
        window.scrollTo(0, 0)
    }

    render() {
    return (
        <main className='gym'>
            <div className='container'>
                <h1>What Locations Are There?</h1>
                <div>
                    <section>
                        <span>San Francisco</span>
                        <img src={gym1} alt='pic' />
                    </section>
                    <section>
                        <span>San Diego</span>
                        <img src={gym2} alt='pic' />
                    </section>
                    <section>
                        <span>Los Angeles</span>
                        <img src={gym3} alt='pic' />
                    </section>
                </div>
            </div>
        </main>
    )
    }
}

export default Gyms