import React from 'react'
import './styling/contact.scss'

const Contact = () => {

    return (
        <main className='contact'>
            <div className='container'>
                <h1>Contact Us</h1>
                <span>Need to get in touch? Fill in the form below for more information:</span>
                <form onSubmit={e => e.preventDefault()}>
                    <input placeholder='email' />
                    <input placeholder='name' />
                    <input placeholder='subject' />
                    <input placeholder='message' />
                    <button>Submit</button>
                </form>
            </div>
        </main>
    )

}

export default Contact