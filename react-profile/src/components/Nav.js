  
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import Resume from '../assets/Angell_Resume.pdf'

const styles = {
    navbar: {
        backgroundColor: '#0fb0e6a9'
    },
    links: {
        textDecoration: 'none'
    },
    list: {
        padding: '10px'
    },
    brand: {
        fontSize: '16px'
    }
}

const Navigation = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <Navbar style={styles.navbar} light expand="md" className="sticky-top">
            <NavbarBrand className="ms-3 ps-4 pt-1" style={styles.brand}>Tracy Angell</NavbarBrand>
            <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
                <Nav style={styles.list} className="ms-auto" navbar>
                    <NavItem>
                        <NavLink href="#about-me">
                            ABOUT ME
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#work">
                            WORK
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#skills">
                            SKILLS
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#contact-me">
                            CONTACT ME
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href={Resume} download>RESUME
                        </NavLink>
                    </NavItem>
                </Nav>  
            </Collapse>
        </Navbar>
    )
};

export default Navigation;