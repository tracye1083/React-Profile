import React from 'react';

const styles = {
    jumbotron: {
        backgroundColor: '#0fb0e6a9',
        color: '#ffffff',
        padding: '100px 25px',
        fontFamily: '"Spectral SC", sans-serif',
    },
    h1: {
        fontSize: '63px',
    },
    p: {
        fontSize: '21px',
        fontFamily: '"Fauna One", sans-serif',
    }
}

function Header() {
    return (
    <div className="jumbotron text-center">
        <h1 style={styles.h1}>Tracy Angell</h1>
        <p style={styles.p}>Junior Full-Stack Web Developer</p>
    </div>
    )
}

export default Header;