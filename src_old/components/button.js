import React ,{useState} from 'react'
import "./button.css"

export default function Button() {
    const [count, setCount]= useState(0)

    function handleClick( ){
        setCount(count+1)
    }
    return (
        <>
        <h4>You clicked: {count} times!</h4>
        <button className='custom-button' onClick={handleClick}> click me! </button>
        </>
    )
}