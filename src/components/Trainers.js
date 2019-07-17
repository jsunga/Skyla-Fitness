import React from 'react'
import trainer1 from './images/trainer1.png'
import trainer2 from './images/trainer2.png'
import trainer3 from './images/trainer3.jpg'
import './styling/trainers.scss'

const Trainers = () => {

    return (
        <main className='trainers'>
            <h1>Our Trainers</h1>
            <div>
                <section>
                    <img src={trainer1} alt='pic' />
                </section>
                <section>
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                        Lorem ipsum dolor sit amet, cum ei 
                        persius minimum, an his corpora tractatos, 
                        viderer fabulas accumsan ad quo. Has 
                        aliquid vivendo appetere ut, mei in everti 
                        evertitur. Dolorum noluisse scaevola id 
                        qui, id mea mazim partiendo, in mel odio 
                        nostrum oporteat. Id has solum eloquentiam 
                        disputationi.
                    </p>
                </section>
            </div>
            <div>
                <section className='special'>
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                        Lorem ipsum dolor sit amet, cum ei 
                        persius minimum, an his corpora tractatos, 
                        viderer fabulas accumsan ad quo. Has 
                        aliquid vivendo appetere ut, mei in everti 
                        evertitur. Dolorum noluisse scaevola id 
                        qui, id mea mazim partiendo, in mel odio 
                        nostrum oporteat. Id has solum eloquentiam 
                        disputationi.
                    </p>
                </section>
                <section>
                    <img src={trainer2} alt='pic' />
                </section>
            </div>
            <div>
                <section>
                    <img src={trainer3} alt='pic' />
                </section>
                <section>
                    <h2>Lorem ipsum dolor</h2>
                    <p>
                        Lorem ipsum dolor sit amet, cum ei 
                        persius minimum, an his corpora tractatos, 
                        viderer fabulas accumsan ad quo. Has 
                        aliquid vivendo appetere ut, mei in everti 
                        evertitur. Dolorum noluisse scaevola id 
                        qui, id mea mazim partiendo, in mel odio 
                        nostrum oporteat. Id has solum eloquentiam 
                        disputationi.
                    </p>
                </section>
            </div>
        </main>
    )

}

export default Trainers