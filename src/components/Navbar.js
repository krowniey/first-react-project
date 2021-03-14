import React, { Component } from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';
import {ButtonContainer} from "./Button";


export default class Navbar extends Component {
    render() {
        return (
            <NavWrapper className="navbar navbar-expand-sm  navbar-dark px-sm-5">
                {/**https://www.iconfinder.com/icons/3316510/
                 * cerejas_cherries_cherry_fruit_icon */}

                <Link to='/' className="navbar-brand">
                    FarMFresHorg
                </Link>
                <ul className="navbar-nav align-item-center">
                    <li className="nav-item ml-5">
                        <Link to="/" className="nav-link">
                            Products
                     </Link>
                    </li>
                </ul>
                <Link to='/cart' className="ml-auto">
                <ButtonContainer>
                    <span className="mr-2">
                    <i className="fas fa-cart-plus" />My cart
                    </span>

                </ButtonContainer>
                </Link>
            </NavWrapper>
        );
    }
}


const NavWrapper = styled.nav`
background: var(--mainGreen);
.navbar-brand{
    color: var(--mainWhite) !important;
    font-size: 1.5rem;
    text-transform: capitalize !important;
}
.nav-link{
    color: var(--lightGreen) !important;
    font-size: 1rem;

`;