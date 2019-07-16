import React from 'react'
import './styling/pricing.scss'

const Pricing = () => {

    return (
        <main className='pricing-section'>
            <div className='container'>
                <h1>Pricing</h1>
                <span>
                    Pricing structure for 
                    our services that cannot be beaten.
                </span>
                <div>
                    <section>
                        <h2>Basic</h2>
                        <ul>
                            <li><b>1</b> Pass</li>
                            <li><b>$10</b> /month</li>
                            <li><b>Machine</b> Access</li>
                            <li><b>0</b> Trainers</li>
                            <li><b>0</b> Perks</li>
                            <li><button>Sign up</button></li>
                        </ul>
                    </section>
                    <section class='special'>
                        <h2 class='standard'>STANDARD</h2>
                        <ul>
                            <li><b>2</b> Pass</li>
                            <li><b>$20</b> /month</li>
                            <li><b>Full</b> Access</li>
                            <li><b>1</b> Trainer</li>
                            <li><b>2</b> Perks</li>
                            <li><button>Sign up</button></li>
                        </ul>
                    </section>
                    <section>
                        <h2>Pro</h2>
                        <ul>
                            <li><b>3</b> Pass</li>
                            <li><b>$30</b> /month</li>
                            <li><b>Full</b> Access</li>
                            <li><b>5</b> Trainer</li>
                            <li><b>10</b> Perks</li>
                            <li><button>Sign up</button></li>
                        </ul>
                    </section>
                </div>
            </div>
        </main>
    )

}

export default Pricing