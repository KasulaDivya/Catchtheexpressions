//import { useState } from "react"
import Child from "./child"

 function ParentComponent(props){
 const {pp}=props
    return(
        <>
        <h1  >Parent component</h1>
        <h1>{pp}</h1>
        <Child tt={"divya"}></Child>
        </>
    )
 }
 export default ParentComponent