import React from 'react'
import fb from './images/fb.png'
import ig from './images/ig.png'
import twitter from './images/twitter.png'
import './styling/footer.scss'

const Footer = () => {

    return (
        <footer className='footer'>
            <div className='container'>
                <section className='left-container'>
                    <h1>About <span>Skyla</span> Fitness</h1>
                    <p>
                        Skyla Fitness was founded by Derek Hale in 
                        1998 during his golden bodybuilding days. He 
                        always struggled to find the right advice from 
                        credible mentors, as the industry filled with 
                        fake gurus and bodybuilding products. Derek Hale 
                        envisioned Skyla Fitness as the #1 source for 
                        fitness enthusiast. Now it serves as training 
                        grounds for people all over the country whom are 
                        trying to take their fitness journey's to the 
                        next level.
                    </p>
                    <p>
                        Skyla Fitness will be taking the next step in 
                        becoming a worldwide gym by opening 22 new locations 
                        all over the world in 2018.
                    </p>
                    <div>
                        <img src={fb} alt='icon' />
                        <img src={ig} alt='icon' />
                        <img src={twitter} alt='icon' />
                    </div>
                </section>
                <section className='right-container'>
                    <h2>Say Hello:</h2>
                    <ul>
                        <li><b>Address:</b> 123 Elmo Street, San Francisco, CA 94110</li>
                        <li><b>Email:</b> skylafitness@mail.com</li>
                        <li><b>Phone:</b> (777) 777-7777</li>
                    </ul>
                </section>
            </div>
        </footer>
    )

}

export default Footer