import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <div>
                <img src="user.png" className="imagecontrol"></img>
                <h1 className="intialdes">My name is Juthika. </h1>
                <p className="seconddes">I have worked as an intern in Bangla Trac Technologies Limited.</p>
                <p className="thirddes">I have done my undergrad in computer science and technology. I am interested in MCDA since 
                    it will an excellent opportunity for diving into data analysis.
                </p>
            </div>
        )
    }
}
