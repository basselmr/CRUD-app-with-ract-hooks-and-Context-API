import React from 'react'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem, NavbarBrand, Container } from 'reactstrap'

const Heading = () => {
    return (
        <Navbar className='rounded-3' color='dark' dark>
            <NavbarBrand href='/'>My Team</NavbarBrand>
            <Nav>
                <NavItem>
                    <Link className='btn btn-primary' to='/adduser'>Add User</Link>
                </NavItem>
            </Nav>

        </Navbar>
    )
}
export default Heading;
