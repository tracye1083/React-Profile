import React from 'react';

const styles = {
    h4: {
        fontSize: '19px',
        margin: '10px 0px 30px',
        fontFamily: '"Spectral SC", sans-serif'
    }
}
function Footer() {
    return (
        <footer className="container-fluid text-center">
        <a href="#myPage" title="To Top">
        <div className="glyphicon glyphicon-chevron-up"></div>
         </a>
        <h4 style={styles.h4}>Designed by Tracy Angell</h4>
        </footer>
    )
}

export default Footer;