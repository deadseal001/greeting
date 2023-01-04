// We have to first import `useState` with React in order to take advantage of the hook
import React, { useState } from 'react';

function Greeting() {
  // TODO: Convert `greeting` to a state variable using the useState hook. Give it a initial value of 'Welcome the following students to class!'
  //let greeting = 'Welcome the following students to class!';
  const [greeting, setGreeting]= useState('Welcome the following students to class!' );
  //const greeting=useState()[0];
  //const setGreeting=useState()[1];


  // TODO: Convert `group` to a state variable using the useState hook. Set to an initial value to an array including three students in your class. (ex. ["John", "Grace", "Jared"])
  //let group = ['Alex', 'Alishah', 'Jessica'];
  const [group,setGroup]=useState(['Alex', 'Jessica', 'Alishah'])
  const [name, setName]=useState(['']);


  
  function handleClick(){
    setGreeting('Happy holidays to everyone!')
    setGroup([...group,'Slavic'])
  }

  function handleSort(){
    const groupSorted=[...group];
    groupSorted.sort();
    setGroup(groupSorted);
  }

  function nameupdate(e){
    setName(e.target.value)
  }

  return (
    <div className="card text-center">
      <div className="card-header bg-primary text-white">State activity!</div>
      <div className="card-body">
        {/* TODO: Fix the `p` tag below to instead render the `greeting` variable */}
        <p className="card-text">{greeting} {name}</p>
        <ul>
          {group.map(person=>
            <li>{person}</li>)}
          {/* <li>{group[0]}</li>
          <li>{group[1]}</li>
          <li>{group[2]}</li> */}
        </ul>
        <lable>Enter your name</lable>
        <input type='text' onChange={e=>nameupdate(e)}></input>
        <button onClick={handleClick}>change greeting</button>
        <button onClick={handleSort}>Sort</button>
      </div>
    </div>
  );
}

export default Greeting;
