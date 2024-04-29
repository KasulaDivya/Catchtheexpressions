import { useCallback, useState } from "react";
import React from "react";
//import { memo } from "react";
//import React, { useCallback, useState } from 'react'
import Button from './callbackchild.js'

function ParentCallback() {
    const[age,setAge]=useState(100)
    const[salary,setSalary]=useState(10000)

    const handleAge=useCallback(()=>{
        setAge(age+5)      
    },[age])

    const handleSalary=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])

  return (
    <div>
        <h2>Current age {age}</h2>
        <h2>Current salary {salary}</h2>

        <Button onClick={handleAge} >
            Increment age
        </Button>

        <Button onClick={handleSalary} >
            Increment salary
        </Button>
    </div>
  )
}

export default ParentCallback