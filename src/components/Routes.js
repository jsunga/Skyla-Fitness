import React, { Component } from 'react'
import { HashRouter, Route } from 'react-router-dom'
import Main from './Main'
import Gyms from './Gyms'
import Trainers from './Trainers'
import Register from './Register'
import Navbar from './Navbar'

export default class Routes extends Component {

    render() {
        return (
            <HashRouter basename='/'>
                <Navbar />
                <Route exact path='/' component={Main} />
                <Route exact path='/gyms' component={Gyms} />
                <Route exact path='/trainers' component={Trainers} />
                <Route exact path='/join' component={Register} />
            </HashRouter>
        )
    }

}
