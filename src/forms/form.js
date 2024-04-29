import React, { useState } from 'react';

function MyForm() {
    const [curr,setcurr]=useState({})

    const handlechange=(event)=>{
        const name = event.target.name
        const value = event.target.value

        setcurr(v=>({...v,[name]:value}))

    }

    const handleclick=(event)=>{
       event.preventDefault()
       console.log(event)
    }

 return(
    <>
    <form onSubmit={handleclick}>
        <input type='text' name="username" value={curr.username} onChange={handlechange}></input>
        <input type='number' name="age" value={curr.age} onChange={handlechange}></input>
        <input type="submit"></input>
    </form>
    <h1>{curr.username}</h1>
    <h2>{curr.age}</h2>
    </>
 )
}

export default MyForm;
