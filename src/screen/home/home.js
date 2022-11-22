import React ,{useState}from "react";

import "./style1.css";
const HomeScreen = () =>{
    const [firstname,setFname] = useState("");
    const [lastname,setLname] = useState("");
    const [gender,setGender] = useState("");
    const [salary,setSalary] = useState("");
    const [staffInfo,setStaff] = useState([]);
    const Add = () =>{
       console.log("btn click")
       var person_obj = {
            "firstName" : firstname,
            "LastName" : lastname,
            "Gender" : gender,
            "Salary" : salary,
       };
       var arrTmp = [...staffInfo,person_obj]
       setStaff([...arrTmp])
    }
    return(
        <>
        <div>
           <h1>HomeScreen</h1>
           <div className="form">
                <h4>Staff Form</h4>
                <input placeholder="firstname" value={firstname} onChange={(even) =>setFname(even.target.value)}/>
                <input placeholder="lastname" value={lastname} onChange={(even) =>setLname(even.target.value)}/>
                <input placeholder="Gender" value={gender} onChange={(even) =>setGender(even.target.value)}/>
                <input placeholder="Salary" value={salary} onChange={(even) =>setSalary(even.target.value)}/>
                <button className="normal" onClick={Add}>Add</button>
           </div>
           <div>
            <h1>List Of Staff</h1>
            {
             
                staffInfo.map((item,index) =>{
                    return(
                <div>
                  <h2>N*{index + 1 + "\t"}{item.firstName}   {item.LastName}</h2>  
                  <h2>Gender : {item.Gender}</h2>
                  <h2>Salary : {item.Salary} $</h2>
                 </div>)
                
                })
            }
           </div>
        </div>
        </>
    )
}
export default HomeScreen;