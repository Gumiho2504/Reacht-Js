import React,{useState} from 'react';
const HomeScreen = () =>{
    const [x,setX] = useState(0);
    const [name, setName] = useState("Dara")
    const handleClick = ()=>{
        alert("U had set X = 100");
        setX(100);
        setName("GumiHo")
    }
    const Increase = ()=>{
        setX(x+1);
    }
    const DeIncrease = ()=>{
        setX(x-1);
    }
    return (
        <>
        <h1> Home Screen</h1>
        <h1 onClick={handleClick}>click me please!</h1>
        <h1 style={{color: "red" ,fontSize: "100px"}}>{name}</h1>
        <h1 onClick={Increase}>+</h1>
        <h1 onClick={DeIncrease}>-</h1>
        <h1>X = {x}</h1>
        </>
    )
}
export default HomeScreen;