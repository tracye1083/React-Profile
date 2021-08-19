import React from 'react';
import phone from '../assets/images/icons/phone.png';
import email from '../assets/images/icons/email.png';
import Github from '../assets/images/icons/github.png';
import Linkedin from '../assets/images/icons/linkedin.png';
import Stackoverflow from '../assets/images/icons/stackoverflow.png';

const styles = {
    h1: {
        fontSize: '24px',
        fontFamily: '"Spectral SC", sans-serif',
        fontWeight: 'bold',
        margin: '20px 0px 30px'
    },
    p: {
        fontSize: '14px',
        fontFamily: '"Fauna One", sans-serif',
        margin: '0px 0px 10px'
    }
}
function Contact() {
    return (
        <div id="contact" className="container-fluid bg-grey">
            <h1 className="text-center contact" style={styles.h1}>CONTACT ME</h1>
            <p style={styles.p} className="text-center"><a href="tel:5055034455"><img src={phone} alt="Telephone Reciever" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Call Me" /></a></p>
            <p style={styles.p} className="text-center"><a href="mailto:myemail@gmail.com&subject=Your Portfolio Page"><img src={email} alt="Envelope Icon" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Email Me" /></a></p>
            <p className="text-center"><span className="glyphicon"><a target="_blank" href="https://stackoverflow.com/users/15127473/tracy-a" rel="noreferrer"><img src={Stackoverflow} alt="StackOverflow Logo" data-bs-toggle="tooltip" data-bs-placement="bottom" title="StackOverflow" /></a></span></p>
            <p className="text-center"><span className="glyphicon"><a target="_blank" href="https://github.com/tracye1083" rel="noreferrer"><img src={Github} alt="GitHub Logo" data-bs-toggle="tooltip" data-bs-placement="bottom" title="GitHub" /></a></span></p>
            <p className="text-center"><span className="glyphicon"><a target="_blank" href="https://www.linkedin.com/in/tracyangell/" rel="noreferrer"><img src={Linkedin} alt="LinkedIn Logo" data-bs-toggle="tooltip" data-bs-placement="bottom" title="LinkedIn" /></a></span></p>
    </div>
)};

export default Contact;