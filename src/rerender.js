import React, { useEffect, useState } from 'react'

function Rerender() {
    var [a,seta]=useState(0)
    useEffect(()=>{
      seta(a+1)
    },[a])
    console.log(a)
  return (
  
    <div>

    </div>
  )
}

export default Rerender