import React from 'react'

function Childprop(props) {
const {name ,age,boole,fun} = props
console.log(props)

if(typeof(name)=='string' && typeof(age)=='number'){
    console.log("verified")
}
  return (
    <>
    {
        boole ? (<p>discount available</p>):(<h1>No discount available</h1>)
       
    }
    <button onClick={fun}>click</button>
    
    </>
  )
}

export default Childprop

