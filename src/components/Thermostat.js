// Import `useEffect` Hook from React
import React, { useEffect, useState } from 'react';

function Thermostat() {
  // Set the starting temperature
  const [temp, setTemp] = useState(100);

  // TODO: Use the `useEffect` Hook to set the `document.title` to the current temperature
  // YOUR CODE HERE    this called dependency array.
  
  async function fetchTemp(){
    const response = await fetch('http://www.randomnumberapi.com/api/v1.0/random?min=100&max=1000&count=1');
    const randomNum= await response.json();
    setTemp(randomNum[0]);
  }

  useEffect(()=>{  // works with every render w/o conditions if there is only one parameter.
    document.title= `current temp is ${temp}`
  },[temp])//only when temp change the useEffect will work when there is a second parameter [temp].
          //if second parameter is empty[], the useEffect will run only once when the page is load.

  useEffect(()=>{
    fetchTemp()
  },[]);

  // Handler for increasing the temp by 1
  const increaseTemp = () => {
    setTemp(temp + 1);
  };

  // Handler for decreasing the temp by 1
  const decreaseTemp = () => {
    setTemp(temp - 1);
  };

  return (
    <div className="card text-center">
      <div className="card-header bg-warning text-white">
        Building Temperature
      </div>
      <div className="card-body">
        <p className="card-text">
          Current temperature: {temp} degrees Fahrenheit
        </p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={increaseTemp}
        >
          Raise temperature
        </button>{' '}
        <button
          type="button"
          className="btn btn-primary"
          onClick={decreaseTemp}
        >
          Lower temperature
        </button>
      </div>
    </div>
  );
}

export default Thermostat;
