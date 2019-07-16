import React from 'react'
import gym from './images/gym.png'
import users from './images/users.png'
import diet from './images/diet.png'
import './styling/why.scss'

const Why = () => {

    return (
        <main className='why-section'>
            <div className='container'>
                <h1>Why work with us?</h1>
                <span>Because we are the best at what we do!</span>
                <div>
                    <section>
                        <img src={gym} alt='icon' />
                        <h1>Biggest Gyms</h1>
                        <p>
                            Our gyms come with a variety of sections 
                            for all types of athletes. They range from 
                            tennis courts, basketball courts, swimming 
                            pools and gymnasiums.
                        </p>
                    </section>
                    <section>
                        <img src={users} alt='icon' />
                        <h1>Experienced Personal Trainers</h1>
                        <p>
                            The trainers at Python Fitness have over 10 
                            years of experience in fitness. You'll get 
                            your pick of trainer to best fit your training 
                            style and personality.
                        </p>
                    </section>
                    <section>
                        <img src={diet} alt='icon' />
                        <h1>Best Programs</h1>
                        <p>
                            Courses engineered by top athletes from many 
                            sports all being thought by our instructors. To 
                            ensure you get the best raining in the industry.
                        </p>
                    </section>
                </div>
            </div>
        </main>
    )

}

export default Why