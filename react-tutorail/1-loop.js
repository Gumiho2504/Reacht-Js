import React from 'react';

const App = () =>{
  // variable
  var value1 = 100;
  var value2 = 200;

  const list_student = [
    {name: "trey",id: "e1",class: "12a"},
    {name: "hong",id: "e2",class: "12b"},
    {name: "lin",id: "e3",class: "12c"},
  ]
  
  function sum(a,b){
    let c = a + b;
    return c;
  }
  const DemoArray = ()=>{
    const arr_demo = ["C","C++","Java","Javascript","ReachJs"];
    var content = null;
    for(let i = 0 ; i < arr_demo.length ; i++){
      content = 
      <div>
        {content}
        <h3>{arr_demo[i]}</h3>
      </div>
    }
    return content
  }
  const arr_name = [1,2,3,4,5]

  return (
    <><div>
      <h1>{value1}</h1>
      <h1>{sum(value1, value2)}</h1>
      <button onClick={value1++}>sum</button>
      <h1>{DemoArray()}</h1>
      <h2> List name</h2>
      {arr_name.map((item, index) => {
        return (
          <li>{item}</li>
        );
      })}
      <h1>List Student</h1>
      {list_student.map((item, index) => {
        return (
          <h2>
            {item.id + "\t" + item.name + "\t" + item.class}
          </h2>
        );
      })}
    </div>
    <table>
      <thead>
      <tr> 
        <th>Id</th>
        <th>Name</th>
        <th>Class</th>
      </tr> 
      </thead>
      <tbody>
        
          {
            list_student.map((item,index) =>{
              return(
                <tr>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.class}</td>
                </tr>
              );
            })
          }
          

       
      </tbody>
    </table>
    </>
  )
}

export default App;