import React from "react";
import {Link} from 'react-router-dom'
const MainContainer = (props) =>{
    return(
        <>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {props.children}
                </ul>
            </div>
        </>
    )
}
export default MainContainer;