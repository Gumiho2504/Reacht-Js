import React from "react";
import "./style1.css";
const HomeScreen = () =>{
    const txt1 = {
        color: "green",
        right: 10,
        backgroundColor: "#e1e1e1",
    }
    return(
        
        <div>
            <h2>HomeScreen</h2>
            <h1 style={{color: "red", padding: 10,fontSize:100,backgroundColor: "darkblue"}}> Inline style</h1>
            <h3 style={txt1}>Internal style</h3>
            <h2 className="txtDemo">External style</h2>
        </div>
        
    )
}
export default HomeScreen;