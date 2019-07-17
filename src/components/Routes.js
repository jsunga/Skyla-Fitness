import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Main from './Main'
import Gyms from './Gyms'
import Trainers from './Trainers'
import Register from './Register'
import Navbar from './Navbar'
import Landing from './Landing'
import Footer from './Footer'
import WOW from 'wowjs'

export default class Routes extends Component {

    componentDidMount() {
        const wow = new WOW.WOW()
        wow.init()
    }

    render() {
        return (
            <HashRouter basename='/'>
                <Navbar />
                <Landing />
                <Route exact path='/' component={Main} />
                <Route exact path='/gyms' component={Gyms} />
                <Route exact path='/trainers' component={Trainers} />
                <Route exact path='/join' component={Register} />
                <Footer />
            </HashRouter>
        )
    }

}
