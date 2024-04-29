import React from 'react'
import Childprop from './childprop'

function Propvalidation() {

const Angle = () =>{
    console.log("hyy phani Hospitals")
}
  return (
    <>
    <Childprop name={"divya"} age={22} boole={true} fun={Angle}></Childprop>
    </>
  )
}

export default Propvalidation