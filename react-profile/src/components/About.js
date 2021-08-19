import React from 'react';
import avatar from '../assets/images/headshot1.png';

const styles = {
    container: {
        padding: "60px 50px"
    },
    h1: {
        fontSize: '36px',
        margin: '20px 0px 10px',
        padding: '20px',
        fontFamily: '"Spectral SC", sans-serif'
    },
    h3: {
        fontSize: '24px',
        margin: '20px 0px 10px',
        padding: '20px',
        fontFamily: '"Fauna One", sans-serif'
    }
}

function About() {
    return (
        <div id="about" className="container-fluid">
            <div className="row">
                <div className="col-sm-9">
                    <h1 style={styles.h1}>About Me</h1>
                    <h3 style={styles.h3}>My name is Tracy Angell. I have recently become interested in startups and learning how to code. I am attending a Coding Bootcamp program through University of New Hampshire to become a Full Stack Web Developer. Once the I have completed the program succesfully I will be seeking freelance development work, as well as remote positions. However, I am open-minded to other possibilities.</h3>
                </div>
                <div className="col-sm-3">
                    <span><img id="profile" src={avatar} alt="Tracy Angell"/></span>
                </div>
            </div>
      </div>
    )
};

export default About;