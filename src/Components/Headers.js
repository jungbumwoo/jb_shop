import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";



const Ul = styled.ul`
    position: absolute;
    width: auto;
    right: 0;
    left: 0;
`

const Li = styled.li`
    color: red;
    float: left;
`


const Headers = () => {
    return(
        <>
            <div className="App">
            <header className="App-header">
            <div className="mainName">
                Name of store
            </div>
            </header>
            </div>
            <div className="headerdiv">
                <Ul>
                <Li>
                    <Link to="/">Home</Link>
                </Li>
                <Li>
                    <Link to="/brand">Brand</Link>
                </Li>
                <Li>
                    <Link to="/store">Store</Link>
                </Li>
                <Li>
                    <Link to="/aboutUs">about us</Link>
                </Li>
                <Li>
                    <Link to="/contact">Contact</Link>
                </Li>
                </Ul>
            </div>
        </>
    )
}

export default Headers;